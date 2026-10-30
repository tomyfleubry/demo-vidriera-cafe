---
name: Mora
description: Una merienda de casa, puesta sobre la mesa.
colors:
  cream: "#FAF5EE"
  ink: "#2E2018"
  berry: "#6D2E46"
  caramel: "#C97B4A"
  mint: "#DCE8DC"
  paper: "#FFFDF9"
  berry-soft: "#F0E2E5"
  muted: "#6B5348"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(54px, 5.6vw, 80px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(36px, 4vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fraunces, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.65
  wordmark:
    fontFamily: "Fraunces, serif"
    fontSize: "46px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
  price:
    fontFamily: "Fraunces, serif"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  sm: "12px"
  md: "24px"
  lg: "32px"
  mobile-product: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
  section: "clamp(72px, 8vw, 128px)"
  section-mobile: "76px"
components:
  button-primary:
    backgroundColor: "{colors.berry}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.berry-soft}"
    textColor: "{colors.ink}"
  button-order:
    backgroundColor: "{colors.berry}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  filter-selected:
    backgroundColor: "{colors.berry}"
    textColor: "{colors.paper}"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  navigation:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
  faq:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
  closing:
    backgroundColor: "{colors.berry-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "72px 48px"
  floating-whatsapp:
    backgroundColor: "{colors.berry}"
    textColor: "{colors.paper}"
    width: "58px"
    height: "58px"
---

# Design System: Mora

## Overview

**Creative North Star: "Sobremesa doméstica"**

Una merienda de casa, puesta sobre la mesa. Mora combina la calidez de una
cocina de Palermo con una carta ordenada: fotografías de alimentos con tamaños
distintos, titulares serif de peso medio y acciones mora fáciles de encontrar.
Los recortes que asoman y la pieza ampliada del estante le dan un gesto propio.

Este documento reconcilia con el código el DESIGN.md inicial, escrito antes de
index.html por pedido de Tomas. Conserva la paleta, Fraunces/Manrope, las fotos y
las decisiones expresas del brief. La fuente de las medidas finales es el CSS
de index.html; la composición puntual vive en .impeccable/surfaces/index-html.md.
La marca, Male, los precios y los datos son ficticios. Las fotos ilustran la
propuesta sin presentar a una modelo como la cocinera ni inventar testimonios.

**Key Characteristics:**
- Calidez crema, mora y espresso; menta localizada en Smoothies.
- Fraunces recta e itálica, acompañada por Manrope de lectura clara.
- Fotografías de Pexels, dos recortes transparentes y tamaños desiguales.
- Menú con precios visibles, estante filtrable y pedido por producto.
- Superficies suaves, profundidad discreta y movimiento breve y opcional.

## Colors

La paleta conserva los colores fijados por el brief; las variables del CSS
mantienen los nombres de los tokens de la cabecera, que es normativa.

### Primary
- **Mora:** identidad, marca, CTA, precios, foco y selección de filtros.
- **Mora suave:** fondo del proceso y base del cierre cálido; hover secundario
  y pista de los scrollbars.

### Secondary
- **Menta suave:** fondo de Smoothies exclusivamente.
- **Caramelo:** acento reservado por el brief. La variable está declarada pero
  no tiene una aplicación visual activa; no inventar una distribución nueva
  para justificar su presencia en la paleta.

### Neutral
- **Crema:** fondo general y header; texto sobre los campos mora.
- **Espresso:** tinta principal y hover de acciones mora.
- **Papel:** tarjetas, botones secundarios y texto claro sobre mora.
- **Tinta secundaria:** descripciones, respuestas y datos auxiliares.

**The Menta Local Rule.** Reservar la menta para Smoothies; la página no alterna
fondos de colores por una cadencia decorativa.

**The Carta Legible Rule.** Usar espresso o tinta secundaria sobre fondos claros;
caramelo no se usa como texto pequeño sobre crema.

## Typography

**Display Font:** Fraunces, con fallback serif.
**Body Font:** Manrope, con fallback sans-serif.

Fraunces aporta carácter casero a marca, titulares, nombres y precios. Manrope
ordena descripciones, navegación y controles. Se cargan Fraunces 500/600 recta e
itálica y Manrope 400/500/600/700 mediante Google Fonts. El peso habitual de
titulares y precios es 500.

### Hierarchy
- **Display:** titular de dos líneas deliberadas. La segunda va en itálica mora.
  El valor fluido se ajusta a 60px hasta 1050px, 64px hasta 900px y 44px hasta
  600px; en móvil el tracking es -0.03em.
- **Headline:** capítulos en serif media. El combo llega a 54px y usa 40px en
  tablet/móvil; el cierre llega a 60px y usa 38px en móvil.
- **Title:** nombre de producto base. Tortitas amplía a 28px en escritorio y
  27px en móvil. Café usa 23px en móvil; smoothies, 25px.
- **Body:** texto base de la cabecera, párrafos hasta 65ch. Leads y relato usan
  17px y pasan a 16px en móvil. Descripciones usan 14px o 13px.
- **Label:** etiqueta del hero en caja natural, sin tracking añadido.
  Navegación 14px/600; CTA principal 15px/700 y 14px en móvil.
- **Wordmark:** marca baja en mora; pasa a 42px hasta 900px. El footer la amplía
  a 66px y 60px en móvil sobre campo mora.
- **Price:** cifras serif en mora; menú 22–25px, favoritos 23px y combo 46px,
  que baja a 42px en móvil. «Desde» usa Manrope 13px/500.

**The Voz de Casa Rule.** Mantener voseo argentino, nombres claros y precios con
punto de miles; las itálicas refuerzan la voz y no reemplazan la jerarquía.

## Layout

El contenedor llega a 1240px y descuenta 80px del viewport; hasta 900px descuenta
48px, es decir, 24px por lado. Los capítulos usan la separación fluida de la
cabecera; hasta 600px se fija en 76px. El menú usa 60px de padding vertical en
escritorio y 38px en móvil; Smoothies 72px y 54px. Gaps de 16/24/32/48px.

### Responsive
| Umbral del CSS | Comportamiento observado |
|---|---|
| Más de 1050px | Hero en dos columnas; café en cuatro; tortitas en dos; smoothies en tres. |
| Hasta 1050px | Hero con gap de 36px; tarjetas con gaps de 16px y contenido compacto. |
| Hasta 900px | Hero en una columna y menú plegable; café en dos columnas; smoothies conserva tres con precio y acción apilados; FAQ en una columna. |
| Hasta 600px | Categorías táctiles; tortitas en una columna; smoothies en filas con foto al 43%; combo, cocina, proceso y footer se apilan. Café conserva dos columnas. |

Las categorías miden 400px de alto en escritorio, 330px en tablet y 360px en
móvil. En escritorio se escalonan; en móvil cada panel ocupa el 78% de la fila,
con snap y scroll nativos. Favoritos también tiene scroll táctil, sin autoplay:
piezas de 266px y destacada de 330px; en móvil, 230px y 278px. El filtro centra
y amplía la pieza central del grupo visible y centra el único smoothie.

Header sticky con fila mínima de 86px en escritorio y 76px en móvil. Las anclas
reservan 104px arriba, o 100px hasta 600px. El footer deja 104px abajo, o 110px
en móvil, para liberar el flotante. El desplazamiento horizontal pertenece a
categorías y favoritos; no se usa ocultamiento global para disimular overflow.

Verificación: CSS, capturas locales de hero/tortitas/cierre y control de 1440,
768, 430 y 390px: cero overflow de documento, CTA del hero en una línea, anclas
despejadas y pie separado del flotante.

## Elevation & Depth

Capas de color, recortes y superposición leve construyen la profundidad. Las
tarjetas son planas, sin sombra ni borde ornamental. El único box-shadow es
0 8px 24px rgba(46,32,24,.25), en WhatsApp flotante. El cierre superpone papel
al 50% sobre mora suave, con blur de 8px, inset de 16px y radio medio; en móvil,
inset de 10px y radio interior de 22px. El scrim neutro de las categorías
oscurece el pie de sus fotos para leer los rótulos.

**The Profundidad Discreta Rule.** Fotografía y capas suaves construyen profundidad;
reservar la sombra para distinguir el control flotante.

Botones: estados de 0.2s y elevación de 2px; flotante 3px. Zoom de producto 1.025
en 0.5s; categoría 1.04 en 0.6s. GSAP revela con y:18px, duración 0.65s y
power2.out; la foto del hero entra en 0.9s. Los recortes se desplazan apenas
14px/22px con scroll. Lenis suaviza rueda con duración 0.9 y comparte reloj
con GSAP. Con prefers-reduced-motion se omiten Lenis y animaciones y se
desactivan transiciones. Sin librerías, el contenido sigue visible y usable.

## Shapes

Radios pequeño, medio y grande según cabecera; producto reduce su radio en
móvil. Botones y filtros son pills; menú y flotante, círculos. Hero y estante
comparten remate arqueado (48%) con esquinas inferiores suaves; el hero pasa
al 46% en móvil. Los dos recortes con alfa asoman sobre crema y se inclinan en
sentidos opuestos. La foto de cocina gira -3°. Fotos con cover; recortes
transparentes con contain, sin estirar alimentos.

## Components

### Buttons
CTA cálido y visible: mora/papel, peso 700, altura mínima de 52px y SVG de
WhatsApp. Texto sin partir. El secundario es papel/espresso y pasa a mora suave
al hover. Pedir usa 44px mínimo, 13px/700 y flecha SVG; en combo invierte a
crema/mora con 48px mínimo y 15px. El foco visible general es mora, 3px,
separado 5px; sobre combo y footer se usa crema. No hay inputs ni formularios.

### Navigation
Header compacto, marca y cuatro anclas, sin CTA extra de WhatsApp. Menú móvil
con botón circular de 44px y aria-expanded; Escape cierra y devuelve foco.
Sin JavaScript las anclas quedan visibles y el botón plegable oculto. El
enlace de salto al contenido aparece al recibir foco.

### Chips
Todo / Café / Tortitas / Smoothies, altura mínima de 44px, pills de papel.
Selección mora/papel con aria-pressed. Status vivo con número de resultados.
Sin JavaScript se ocultan los filtros y se conservan los seis favoritos.
No hay carrusel automático.

### Cards / Containers
Papel, foto, nombre, descripción breve, precio y Pedir. Padding base de 24px;
hasta 1050px, 18px; en móvil, 18px vertical y 14px horizontal. Tortitas usa
28px/30px y 24px en móvil. Fotos cuadradas en café; tortitas 1.9:1 y 1.6:1 en
móvil; smoothies 1.18:1 y luego foto cubriendo la fila. Cada producto y combo
enlaza al placeholder con su mensaje prellenado.

### FAQ
Cuatro details/summary nativos, papel y radio pequeño; summary mínimo de 76px.
La suma SVG gira 45° al abrir. Varias respuestas pueden permanecer abiertas.
Funciona con teclado y sin JavaScript. Transferencia y Mercado Pago son una
mención ficticia: no hay botones de cobro, checkout, SDK, credenciales ni
confirmación de pagos. No hay integración que habilitar.

### Hero, cierre y flotante
Etiqueta «Hecho en casa · Por encargo», titular de dos líneas, texto breve, dos
CTA y foto con tortita y café. Smoothie y plato recortados asoman abajo.
El cierre centra la frase serif y sus dos CTA sobre vidrio cálido; en móvil
apila las acciones. WhatsApp aparece solo en hero/cierre/flotante, más los
Pedir de productos y combo. Los 21 enlaces usan https://wa.me/5491100000000
con mensaje. Flotante de 58px a 20px de los bordes; en móvil 54px a 18px.

### Fotos elegidas y procedencia
Todas son fotografías ilustrativas libres bajo licencia Pexels:
https://www.pexels.com/license/. Se inspeccionaron antes de elegirlas.
Sin marcas ni texto ajeno legible; sin caras frontales reconocibles.
Se guardan como WebP locales en assets, con origen también embebido.

| Archivo | Autor / ID Pexels | Uso y fuente |
|---|---|---|
| hero-merienda.webp | Hilal Yıldız13231023 | Hero: tortita y café. https://www.pexels.com/photo/a-cake-and-a-coffee-on-a-table-13231023/ |
| combo-merienda.webp | Jason Toevs2068296 | Combo y merienda. https://www.pexels.com/photo/espresso-on-teal-saucer-beside-baked-cake-2068296/ |
| espresso.webp | Soulaymane Benchekroun13959547 | Espresso. https://www.pexels.com/photo/a-black-coffee-on-a-clear-drinking-glass-13959547/ |
| latte.webp | Julissa Pires15023135 | Latte. https://www.pexels.com/photo/coffee-latte-in-a-glass-15023135/ |
| capuchino.webp | mohammad khorram14704660 | Capuchino. https://www.pexels.com/photo/a-coffee-with-latte-art-on-ceramic-cup-14704660/ |
| flat-white.webp | Anna Pyshniuk6048537 | Flat white y panel Café. https://www.pexels.com/photo/coffee-latte-on-white-ceramic-cup-6048537/ |
| tortita.webp | Judy Lai8692638 | Porción ilustrativa de torta y detalle del hero. https://www.pexels.com/photo/hand-holding-a-slice-of-cheesecake-on-white-ceramic-plate-8692638/ |
| brownie.webp | Tiberiu5773862 | Brownie con nuez. https://www.pexels.com/photo/a-stack-of-brownies-5773862/ |
| carrot-cake.webp | Regina Ferraz6133475 | Carrot cake y panel Tortitas. https://www.pexels.com/photo/homemade-carrot-cake-and-maple-syrup-on-white-small-cup-6133475/ |
| torta-entera.webp | Regina Ferraz6133474 | Torta entera por encargo. https://www.pexels.com/photo/close-up-photo-of-homemade-carrot-cake-6133474/ |
| smoothie-verde.webp | Lisa Fotios17890559 | Verde detox. https://www.pexels.com/photo/glass-of-green-smoothie-with-straw-17890559/ |
| smoothie-frutos.webp | Daniel Ruiz9251276 | Frutos rojos y panel Smoothies. https://www.pexels.com/photo/a-glass-of-smoothie-9251276/ |
| smoothie-mango.webp | Юлия Зяблова8813997 | Mango y maracuyá. https://www.pexels.com/photo/a-glass-of-fruit-shake-8813997/ |
| smoothie-recorte.webp | Lisa Fotios6435266 | Smoothie que asoma del hero, con fondo recortado. https://www.pexels.com/photo/hand-holding-a-smoothie-in-a-glass-6435266/ |
| tortita-recorte.webp | Judy Lai8692638 | Porción en plato que asoma del hero, con fondo recortado. https://www.pexels.com/photo/hand-holding-a-slice-of-cheesecake-on-white-ceramic-plate-8692638/ |
| cocina.webp | Klaus Nielsen6287583 | Historia de la cocina. https://www.pexels.com/photo/woman-cooking-dough-on-table-with-eggs-and-flour-6287583/ |

Las fotos son ilustrativas: no verifican ingredientes, recetas ni personas
reales de Mora. Los dos detalles del hero derivan de las fotos indicadas,
con el fondo retirado mediante edición asistida y transparencia alfa real.
El resto conserva la fotografía de origen, solo convertida a WebP.

Los 16 archivos fotográficos proceden de 15 fuentes. Los recortes son derivados
editados de las fotografías indicadas, no píxeles originales sin modificación
ni fotos propias de Mora. El favicon propio es una «m» Fraunces sobre cuadrado
mora. Los 17 rasters, incluido el favicon, conservan prompt o procedencia en
metadatos embebidos o sidecars; los dos recortes incluyen el prompt de edición.

## Do's and Don'ts

### Do:
- **Do** conservar paleta y Fraunces/Manrope fijados por Tomas, con menta solo en Smoothies.
- **Do** conservar etiqueta del hero, itálica mora, tarjetas, filtros en pills, proceso numerado y cierre translúcido: son decisiones expresas del brief.
- **Do** priorizar fotos, nombres, precios y Pedir; mantener objetivos táctiles de 44px mínimo y foco visible.
- **Do** mantener los 11 productos más el combo, sus precios del brief y 48 h de anticipación para tortas enteras.
- **Do** mantener CTA del hero en una línea, anclas despejadas, filas táctiles y pie libre del flotante.
- **Do** mantener fotos locales de Pexels, alt en español y disclosure de los dos recortes editados.
- **Do** mantener lang es-AR, favicon propio, noindex/nofollow y «Vidriera de demostración de Nexvia IA · Marca, personas y datos ficticios.».
- **Do** mantener navegación, FAQ y enlaces usables sin librerías y respetar prefers-reduced-motion.

### Don't:
- **Don't** inventar testimonios, ratings, cifras de clientes o evidencia de un negocio real.
- **Don't** agregar autoplay, video de fondo o movimiento obligatorio.
- **Don't** agregar CTA de WhatsApp al header ni alterar el placeholder 5491100000000.
- **Don't** activar cobros, checkout o cuenta de pago a partir de la mención ficticia en FAQ.
- **Don't** convertir avisos genéricos de estilo en rediseños que contradigan decisiones expresas de este brief.
- **Don't** heredar tracking inferior a -0.04em; la marca final respeta ese límite y conserva legibilidad.
