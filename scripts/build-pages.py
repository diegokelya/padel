#!/usr/bin/env python3
"""Builds the support and privacy pages in the languages that are not Spanish or English.

The English pages (`support/en.html`, `privacy/en.html`) are the template. Their text blocks (headings, paragraphs, list
items and table cells) are numbered in order of appearance, and `scripts/i18n/<page>-<lang>.txt` holds the translation of
each block, one per line: `<number> <html>`. Everything else (links, structure, meta tags) comes from the template.

Usage: python3 scripts/build-pages.py          # write support/<lang>.html and privacy/<lang>.html
       python3 scripts/build-pages.py --check  # fail if a page is stale or a translation is missing
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://diegokelya.github.io/playback-padel-site'
LANGS = ['it', 'pt', 'de', 'fr', 'sv', 'nl']
NAMES = {'es': 'Español', 'en': 'English', 'it': 'Italiano', 'pt': 'Português', 'de': 'Deutsch', 'fr': 'Français', 'sv': 'Svenska', 'nl': 'Nederlands'}
HTML_LANG = {'pt': 'pt-BR'}
ORDER = ['es', 'en'] + LANGS
BLOCK = re.compile(r'<(h1|h2|h3|p|li|th|td)(\s[^>]*)?>(.*?)</\1>', re.S)
# Meta text of each page in each language: (title, description, nav "Support", nav "Privacy", "Back to home", "Languages")
META = {
    'it': ('Assistenza', 'Guida di PlayBack Padel: gesti, tabellone, VAR, giocate salvate, permessi e risoluzione dei problemi.',
           'Informativa sulla privacy di PlayBack Padel: niente account, niente server, niente analisi. I tuoi dati restano sul tuo dispositivo.',
           'Assistenza', 'Privacy', 'Torna alla home', 'Lingue', 'Privacy'),
    'pt': ('Suporte', 'Guia do PlayBack Padel: gestos, placar, VAR, jogadas salvas, permissões e solução de problemas.',
           'Política de privacidade do PlayBack Padel: sem contas, sem servidor, sem análises. Seus dados ficam no seu dispositivo.',
           'Suporte', 'Privacidade', 'Voltar ao início', 'Idiomas', 'Privacidade'),
    'de': ('Support', 'Anleitung für PlayBack Padel: Gesten, Anzeigetafel, VAR, gespeicherte Spielzüge, Berechtigungen und Fehlerbehebung.',
           'Datenschutzerklärung von PlayBack Padel: keine Konten, kein Server, keine Analyse. Deine Daten bleiben auf deinem Gerät.',
           'Support', 'Datenschutz', 'Zurück zur Startseite', 'Sprachen', 'Datenschutz'),
    'fr': ('Assistance', "Guide de PlayBack Padel : gestes, tableau des scores, VAR, actions enregistrées, autorisations et dépannage.",
           "Politique de confidentialité de PlayBack Padel : pas de compte, pas de serveur, pas d'analyse. Tes données restent sur ton appareil.",
           'Assistance', 'Confidentialité', "Retour à l'accueil", 'Langues', 'Confidentialité'),
    'sv': ('Support', 'Guide för PlayBack Padel: gester, resultattavla, VAR, sparade klipp, behörigheter och felsökning.',
           'Integritetspolicy för PlayBack Padel: inga konton, ingen server, ingen analys. Dina data stannar på din enhet.',
           'Support', 'Integritet', 'Tillbaka till startsidan', 'Språk', 'Integritet'),
    'nl': ('Support', 'Gids voor PlayBack Padel: gebaren, scorebord, VAR, bewaarde fragmenten, toestemmingen en probleemoplossing.',
           'Privacybeleid van PlayBack Padel: geen accounts, geen server, geen analyse. Je gegevens blijven op je apparaat.',
           'Support', 'Privacy', 'Terug naar de startpagina', 'Talen', 'Privacy'),
}


def page_url(page, code):
    return f'{BASE}/{page}/' + ('index.html' if code == 'es' else f'{code}.html')


def set_languages(html, page, code, label):
    """The hreflang alternates in the head and the list of languages in the footer (replaced if already there)."""
    alternates = '\n  '.join(f'<link rel="alternate" hreflang="{c}" href="{page_url(page, c)}">' for c in ORDER)
    html = re.sub(r'(  <link rel="alternate" hreflang="[a-z]+" href="[^"]*">\n)+', '  ' + alternates + '\n', html, count=1)
    html = re.sub(r'\n\s*<nav class="langs"[^\n]*</nav>', '', html)
    links = ' · '.join(f'<a lang="{HTML_LANG.get(c, c)}" href="{"index" if c == "es" else c}.html"{" aria-current=\"page\"" if c == code else ""}>{NAMES[c]}</a>' for c in ORDER)
    return html.replace('  </footer>', f'    <nav class="langs" aria-label="{label}">{links}</nav>\n  </footer>', 1)


def blocks(html):
    main = html[html.index('<main'):html.index('</main>')]
    return [(m.start(), m.end(), m.group(3)) for m in BLOCK.finditer(main)], html.index('<main')


def render(page, code, template, translations):
    items, offset = blocks(template)
    out, last = [], 0
    for index, (start, end, _) in enumerate(items):
        match = BLOCK.match(template, offset + start)
        out.append(template[last:offset + start])
        out.append(f'<{match.group(1)}{match.group(2) or ""}>{translations[index]}</{match.group(1)}>')
        last = offset + end
    out.append(template[last:])
    html = ''.join(out)
    support_title, support_desc, privacy_desc, nav_support, nav_privacy, back, languages, privacy_title = META[code]
    title, desc = (support_title, support_desc) if page == 'support' else (privacy_title, privacy_desc)
    html = html.replace('<html lang="en">', f'<html lang="{HTML_LANG.get(code, code)}">')
    html = re.sub(r'<title>.*?</title>', f'<title>{title} — PlayBack Padel</title>', html)
    html = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + desc, html)
    html = re.sub(r'<link rel="canonical"[^>]*>', f'<link rel="canonical" href="{page_url(page, code)}">', html)
    html = html.replace('href="../?lang=en"', f'href="../?lang={code}"')
    html = html.replace('aria-label="Main"', f'aria-label="{title}"')
    html = html.replace('<a href="../support/en.html">Support</a>', f'<a href="../support/{code}.html">{nav_support}</a>')
    html = html.replace('<a href="../privacy/en.html">Privacy</a>', f'<a href="../privacy/{code}.html">{nav_privacy}</a>')
    html = re.sub(r'\s*<a class="lang"[^>]*>[^<]*</a>', '', html, count=1)
    html = set_languages(html, page, code, languages)
    html = re.sub(r'(<a href="\.\./\?lang=)[a-z]+(">)[^<]*(</a>)', lambda m: f'{m.group(1)}{code}{m.group(2)}{back}{m.group(3)}', html, count=1)
    html = html.replace('../privacy/en.html', f'../privacy/{code}.html').replace('../support/en.html', f'../support/{code}.html')
    return html


def main(check):
    problems, outputs = [], {}
    for page in ('support', 'privacy'):
        template = open(os.path.join(ROOT, page, 'en.html'), encoding='utf-8').read()
        items, _ = blocks(template)
        for code in LANGS:
            path = os.path.join(ROOT, 'scripts/i18n', f'{page}-{code}.txt')
            lines = {}
            for line in open(path, encoding='utf-8').read().split('\n'):
                if line.strip():
                    number, _, text = line.partition(' ')
                    lines[int(number)] = text.replace('⏎', '\n')
            for index in range(len(items)):
                if index not in lines:
                    problems.append(f'{page}-{code}: block {index} is missing ({items[index][2][:50]!r})')
            if not any(p.startswith(f'{page}-{code}') for p in problems):
                outputs[os.path.join(ROOT, page, f'{code}.html')] = render(page, code, template, lines)
    for problem in problems:
        print(problem, file=sys.stderr)
    if problems:
        sys.exit(1)
    for page in ('support', 'privacy'):
        for code, label in (('es', 'Idiomas'), ('en', 'Languages')):
            path = os.path.join(ROOT, page, 'index.html' if code == 'es' else 'en.html')
            html = open(path, encoding='utf-8').read()
            outputs[path] = set_languages(html, page, code, label)
    stale = [p for p, text in outputs.items() if not os.path.exists(p) or open(p, encoding='utf-8').read() != text]
    if check:
        if stale:
            print('Out of date (run python3 scripts/build-pages.py):', *[os.path.relpath(p, ROOT) for p in stale], sep='\n  ', file=sys.stderr)
            sys.exit(1)
        print(f'Pages OK: {len(outputs)} translated pages.')
        return
    for path, text in outputs.items():
        open(path, 'w', encoding='utf-8').write(text)
        print('wrote', os.path.relpath(path, ROOT))


if __name__ == '__main__':
    main('--check' in sys.argv)
