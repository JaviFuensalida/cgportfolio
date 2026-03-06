# Carlotta Gambato - Photography Portfolio

Portfolio web de fotografía inspirado en carlottag.com

## 🚀 Características

- Diseño minimalista y elegante
- Responsive (adaptable a móviles y tablets)
- Galería de proyectos fotográficos
- Navegación fluida y animaciones suaves
- Optimización de imágenes con lazy loading
- Menú hamburguesa para navegación móvil

## 📁 Estructura del Proyecto

```
cg/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   └── main.js           # JavaScript para interactividad
├── images/               # Carpeta para imágenes
│   └── (agregar tus fotos aquí)
├── pages/
│   ├── wenu.html         # Proyecto Wenu
│   ├── ikigai.html       # Proyecto Ikigai
│   ├── dialoghi.html     # Proyecto Dialoghi
│   ├── chrysalis.html    # Proyecto Chrysalis
│   ├── portrait.html     # Portfolio de retratos
│   ├── interior.html     # Interior y Arquitectura
│   └── about.html        # Página About
├── package.json          # Configuración del proyecto
└── README.md            # Este archivo

```

## 🖼️ Imágenes Necesarias

Para que la web funcione correctamente, necesitas agregar las siguientes imágenes en la carpeta `images/`:

**Página Principal (index.html):**

- wenu-cover.jpg
- ikigai-cover.jpg
- dialoghi-cover.jpg
- chrysalis-cover.jpg
- portrait-cover.jpg
- interior-cover.jpg

**Páginas de Proyectos:**

- wenu-1.jpg, wenu-2.jpg, wenu-3.jpg, wenu-4.jpg, wenu-5.jpg
- ikigai-1.jpg, ikigai-2.jpg, ikigai-3.jpg, ikigai-4.jpg
- dialoghi-1.jpg, dialoghi-2.jpg, dialoghi-3.jpg, dialoghi-4.jpg, dialoghi-5.jpg
- chrysalis-1.jpg, chrysalis-2.jpg, chrysalis-3.jpg, chrysalis-4.jpg
- portrait-1.jpg hasta portrait-6.jpg
- interior-1.jpg hasta interior-5.jpg
- about-photo.jpg

**Nota:** Las imágenes mostrarán un placeholder si no están disponibles.

## 🚀 Cómo Lanzar el Proyecto

### Opción 1: Servidor Python (Recomendado)

```bash
# Navega al directorio del proyecto
cd cg

# Lanza el servidor con Python 3
python3 -m http.server 8000

# O usa el script npm
npm start
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Servidor Node.js

```bash
# Instala http-server globalmente (solo la primera vez)
npm install -g http-server

# Navega al directorio del proyecto
cd cg

# Lanza el servidor
http-server -p 8000
```

### Opción 3: Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 4: Abrir directamente

Simplemente abre el archivo `index.html` en tu navegador (puede que algunas funcionalidades no funcionen correctamente sin un servidor).

## 🎨 Personalización

### Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
  --primary-color: #000;
  --secondary-color: #fff;
  --accent-color: #333;
  --text-color: #222;
  --bg-color: #fafafa;
}
```

### Tipografía

La web usa la fuente 'Raleway' de Google Fonts. Puedes cambiarla editando el link en los archivos HTML.

### Contenido

- **Textos:** Edita directamente en los archivos HTML
- **Proyectos:** Añade o elimina proyectos modificando `index.html` y creando nuevas páginas en `pages/`

## 📱 Responsive

La web es completamente responsive y se adapta a:

- Móviles (< 768px)
- Tablets (768px - 1024px)
- Escritorio (> 1024px)

## ✨ Funcionalidades

- **Menú Hamburguesa:** Navegación en móviles
- **Lazy Loading:** Carga optimizada de imágenes
- **Animaciones:** Efectos de fade-in y hover
- **Navegación Anterior/Siguiente:** Navega entre proyectos
- **Compartir:** Función para compartir la página
- **Parallax:** Efecto parallax sutil en imágenes

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (Vanilla)
- Google Fonts (Raleway)

## 📝 Licencia

MIT License - Siéntete libre de usar y modificar este proyecto.

## 📧 Contacto

Para más información, visita [Instagram](https://www.instagram.com/carlotta.gambato/)

---

**¡Disfruta de tu nuevo portfolio!** 📸
