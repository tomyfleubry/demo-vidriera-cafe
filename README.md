# Mora — vidriera de café

Página de demostración de Nexvia IA para un emprendimiento casero ficticio.
Marca, persona, zona, horarios, precios y contactos son datos de muestra.

Publicación: https://tomyfleubry.github.io/demo-vidriera-cafe/

## Contenido
- Café: Espresso, Latte, Capuchino y Flat white.
- Tortitas: ricota, brownie con nuez, carrot cake y torta entera por encargo.
- Smoothies: Verde detox, Frutos rojos y Mango y maracuyá.
- Combo Merienda para dos: dos cafés y dos porciones a elección.
- Pedidos por WhatsApp placeholder, favoritos filtrables y preguntas frecuentes.

## Archivos
- `index.html`: HTML, CSS y JavaScript. No requiere compilación.
- `assets/`: fotos WebP locales, recortes con alfa, favicon y procedencia.
- `DESIGN.md`: sistema de diseño y lista completa de fotos con sus fuentes.
- `PRODUCT.md`: alcance y datos ficticios del brief.
- `robots.txt`: bloqueo de rastreo; el HTML también incluye noindex,nofollow.

## Imágenes
Todas las fotografías de base provienen de Pexels, bajo su licencia gratuita.
Las fuentes y autores están en DESIGN.md. Los dos detalles que asoman del hero
son ediciones de esas fotografías con el fondo retirado mediante un editor
asistido; el origen y el pedido de edición quedan registrados junto a los
archivos. El favicon fue dibujado con la letra m de Fraunces cargada.

## Interacción
Los enlaces de pedido tienen el número ficticio5491100000000 y un mensaje
prellenado para cada producto. No hay backend, checkout ni integración de
pagos: transferencia y Mercado Pago solo se nombran en una FAQ ficticia.
El Instagram de muestra se muestra como texto, sin enlazar una cuenta real.

GSAP, ScrollTrigger y Lenis se cargan desde CDN. Sin esas librerías, el menú,
los enlaces y las preguntas frecuentes siguen disponibles. El modo de
movimiento reducido mantiene el contenido y desactiva las animaciones.
