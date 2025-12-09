# 🔲 Generador de Códigos QR

Una aplicación React + TypeScript para generar códigos QR con funcionalidad de exportación a PNG y JPEG.

🌐 **[Ver demo en vivo](https://guillermors39.github.io/qr-generator/)**

## ✨ Características

- 📝 Interfaz intuitiva para ingresar texto
- 🔲 Generación de códigos QR en tiempo real
- 📥 Exportación en formatos PNG y JPEG
- 📱 Diseño responsive
- 🌙 Tema oscuro moderno
- ⚡ Construido con Vite para desarrollo rápido

## 🚀 Instalación y uso

### Prerrequisitos
- Node.js (versión 20.19.0 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd qr-generator
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación en modo desarrollo:
```bash
npm run dev
```

4. Abre tu navegador y navega a `http://localhost:5173`

### Construir para producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 🎯 Cómo usar

1. **Ingresar texto**: Escribe o pega el texto que quieres convertir en código QR en el área de texto
2. **Generar QR**: Haz clic en "Generar QR" para crear el código
3. **Exportar**: Una vez generado, puedes descargar el código QR en formato PNG o JPEG
4. **Limpiar**: Usa el botón "Limpiar" para reiniciar y crear un nuevo código

## 🛠️ Tecnologías utilizadas

- **React** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción y desarrollo
- **qrcode** - Biblioteca para generar códigos QR
- **CSS3** - Estilos modernos con gradientes y animaciones

## 📦 Dependencias principales

- `react` - Framework de UI
- `react-dom` - DOM virtual de React
- `qrcode` - Generación de códigos QR
- `@types/qrcode` - Tipos TypeScript para qrcode

## 🎨 Características de diseño

- Interfaz moderna con gradientes
- Animaciones suaves en botones
- Diseño responsive para móviles y desktop
- Tema oscuro para mejor experiencia visual
- Indicador de progreso durante la generación

## 📝 Notas técnicas

- Límite de 2000 caracteres para el texto de entrada
- Los códigos QR se generan con alta calidad (300px de ancho)
- Formato PNG mantiene transparencia
- Formato JPEG incluye fondo blanco automáticamente

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🚀 Despliegue

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Despliegue automático

Cada push a la rama `main` activará automáticamente el workflow de GitHub Actions que:

1. Instala las dependencias
2. Construye el proyecto
3. Despliega a GitHub Pages

### Despliegue manual

También puedes desplegar manualmente usando:

```bash
npm run deploy
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
