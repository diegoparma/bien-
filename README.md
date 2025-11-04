# +bien - Sitio Web Inmobiliaria

Sitio web moderno y responsive para **+bien**, inmobiliaria especializada en propiedades urbanas y rurales de alta calidad.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🎨 Animaciones suaves y efectos de scroll
- ⚡ Rendimiento optimizado
- 🎯 Navegación intuitiva
- 📧 Formulario de contacto funcional

## 📋 Estructura del Proyecto

```
+bien/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS modernos
├── script.js           # Interactividad JavaScript
├── presentacion.pdf    # Documento de referencia
└── README.md          # Este archivo
```

## 🎨 Secciones del Sitio

1. **Hero**: Presentación impactante con llamados a la acción
2. **Foto del Equipo**: Sección dedicada para imagen del equipo (placeholder)
3. **Quiénes Somos**: Descripción de la empresa y su enfoque
4. **Servicios**: 
   - Propiedades Exclusivas
   - Asesoramiento Personalizado
   - Proyectos con Visión Global
   - Gestión Integral
5. **Proyectos**: Showcase de desarrollos inmobiliarios
6. **Contacto**: Información de contacto y formulario

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript Vanilla (ES6+)
- Google Fonts (Poppins, Playfair Display)

## 📦 Instalación y Uso

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador favorito.

### Opción 2: Servidor local (recomendado)

**Con Python 3:**
```bash
python3 -m http.server 8000
```
Luego visita: http://localhost:8000

**Con Node.js (http-server):**
```bash
npx http-server
```

**Con VS Code:**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

## 🎯 Próximos Pasos

### Para personalizar el sitio:

1. **Agregar foto del equipo:**
   - Reemplaza el placeholder en la sección `.team-photo`
   - Agrega tu imagen: `<img src="equipo.jpg" alt="Equipo +bien">`

2. **Agregar proyectos:**
   - Edita la sección `#proyectos` en `index.html`
   - Agrega imágenes y descripciones de tus desarrollos

3. **Personalizar colores:**
   - Modifica las variables CSS en `styles.css` (líneas 10-20)
   ```css
   --primary-color: #2C3E50;
   --secondary-color: #E67E22;
   --accent-color: #3498DB;
   ```

4. **Agregar más contenido:**
   - Testimonios de clientes
   - Galería de propiedades
   - Blog inmobiliario
   - Calculadora de hipotecas

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🎨 Paleta de Colores

- **Primary**: #2C3E50 (Azul oscuro)
- **Secondary**: #E67E22 (Naranja)
- **Accent**: #3498DB (Azul claro)
- **Background**: #FFFFFF (Blanco)
- **Gray**: #F5F5F5 (Gris claro)

## ✨ Funcionalidades JavaScript

- Menú móvil hamburguesa
- Scroll suave entre secciones
- Animaciones al hacer scroll (reveal)
- Efecto parallax en hero
- Validación de formulario
- Botón "volver arriba"
- Navegación activa según sección

## 📧 Configuración del Formulario

El formulario actualmente abre el cliente de correo por defecto. Para integrar un servicio de envío de emails:

**Opciones:**
- FormSpree: https://formspree.io/
- EmailJS: https://www.emailjs.com/
- Netlify Forms (si hospedas en Netlify)
- Backend propio con Node.js/PHP

## 🌐 Hosting Sugerido

- **Netlify** (Gratis, fácil): https://www.netlify.com/
- **Vercel** (Gratis): https://vercel.com/
- **GitHub Pages** (Gratis): https://pages.github.com/
- **Hostinger** (Pago, completo)

## 📝 SEO Básico Incluido

- Meta tags configurados
- Estructura semántica HTML5
- Descripción de la página
- Texto alternativo en íconos

## 🔧 Optimizaciones Futuras

- [ ] Agregar imágenes reales
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar Google Analytics
- [ ] Integrar WhatsApp Business
- [ ] Agregar mapa de Google Maps
- [ ] Implementar sistema de propiedades dinámico
- [ ] Agregar versión en inglés
- [ ] Optimizar para PWA

## 📞 Información de Contacto

**+bien Inmobiliaria**
- 📍 Chacras Park Oficina 202, Av. San Martin Sur 6995, Luján de Cuyo
- 📧 inmobiliariaurbanarural@gmail.com
- 🏛️ Matrícula: 1782 | Martillera: 1855

---

**Desarrollado con ❤️ para +bien Inmobiliaria**