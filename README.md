# PlayBack Padel — sitio público

Landing bilingüe (español / inglés) de PlayBack Padel: https://diegokelya.github.io/playback-padel-site/

Este repositorio contiene solo los archivos públicos del sitio. El código de la app vive en otro repositorio.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Página única, con metadatos para buscadores y redes (Open Graph). |
| `app.js` | Textos en español e inglés, y la lógica de la página. Elige el idioma por `?lang=xx`, después la última elección guardada y después el idioma del navegador (hay ocho: es, en, it, pt, de, fr, sv, nl). |
| `copy.extra.js` | **Generado.** Los textos de la página en italiano, portugués, alemán, francés, sueco y neerlandés (`python3 scripts/build-copy.py`, desde `scripts/i18n/<idioma>.txt`). |
| `styles.css` | Estilos, sin dependencias externas. |
| `support/` | Soporte (`index.html` en español, `en.html` en inglés, y `it`, `pt`, `de`, `fr`, `sv`, `nl` **generados** con `python3 scripts/build-pages.py` a partir de `en.html` y `scripts/i18n/support-<idioma>.txt`). Es la URL de soporte de App Store Connect. |
| `privacy/` | Política de privacidad (`index.html` / `en.html`, y los otros seis idiomas generados igual). Es la URL de privacidad de App Store Connect. |
| `legal.css` | Estilos de soporte y privacidad, sobre `styles.css`. |
| `404.html` | Página de error de GitHub Pages. |
| `sitemap.xml` | Para cargar en Google Search Console. |
| `assets/shots/` | Capturas de la app en WebP (iPhone y Watch, español e inglés), con datos de ejemplo. `app.js` elige las del idioma activo. |
| `assets/` | Logo optimizado (PNG/WebP 128 px), ícono para iPhone y tarjeta para redes de 1200×630. `playback-padel-logo.png` es el original en alta y no se publica. |

## Traducciones

`en.html` de soporte y privacidad es la plantilla: cada párrafo, título, ítem y celda es un bloque numerado, y `scripts/i18n/<página>-<idioma>.txt` tiene la traducción de cada uno (una línea `<número> <html>`). Si cambia un texto en español o inglés, hay que cambiarlo en los seis archivos de esa página y correr los dos scripts; el deploy falla (`--check`) si algo quedó viejo. **Las traducciones las hizo una IA y conviene que las lea alguien nativo**, sobre todo la política de privacidad. Las imágenes y el video de la página existen en español e inglés; los demás idiomas usan los de inglés.

## Publicación

Cada push a `main` corre `.github/workflows/pages.yml`, que copia solo los archivos públicos a `_site/`, verifica que no falte ningún recurso y publica en GitHub Pages. Si se agrega un archivo nuevo, hay que sumarlo al paso *Build _site*. Las páginas de soporte y privacidad reemplazan al repo `padel-replay-support`.

## Seguridad

- CSP en `<meta>` (Pages no permite headers): solo recursos propios, sin scripts ni estilos inline y sin formularios.
- Sin recolección de datos: no hay formularios, cookies ni analíticas. `localStorage` guarda solo el idioma elegido.
- Actions fijadas por SHA y actualizadas con Dependabot.

## Pendiente

- Opcional: reemplazar el botón de descarga por el badge oficial de Apple.
- Si se quiere una lista de espera real, conectar un servicio (Buttondown, Google Forms) y agregarlo a la política de privacidad.
