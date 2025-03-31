# Digital SAT Desmos Guide

A comprehensive resource for students preparing for the Digital SAT, focusing on effective use of the Desmos calculator to improve math scores.

## 📚 Overview

p
The Digital SAT Desmos Guide is designed to help students master the use of the Desmos calculator on the Digital SAT. Our goal is to provide detailed explanations, interactive examples, and practical strategies to improve math performance by 150-200+ points.

![Digital SAT Desmos Guide](https://place-hold.it/800x400/3eaf7c/ffffff&text=Digital%20SAT%20Desmos%20Guide&bold&fontsize=32)

## 🔍 Features

- **Comprehensive Use Cases**: Detailed examples covering Algebra, Advanced Math, Statistics, and Geometry
- **Interactive Calculators**: Embedded Desmos calculators for hands-on practice
- **Copyable Equations**: Easy-to-copy mathematical expressions
- **Floating Calculator**: Access to a Desmos calculator on every page
- **Mobile-Friendly Design**: Responsive layout for studying on any device

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/digital-sat-desmos-guide.git
   cd digital-sat-desmos-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run docs:dev
   ```

4. Open your browser and navigate to http://localhost:5173

## 📂 Project Structure

```
digital-sat-desmos-guide/
├── docs/                  # Documentation content
│   ├── .vitepress/        # VitePress configuration
│   │   ├── components/    # Vue components
│   │   ├── theme/         # Custom theme files
│   │   └── config.ts      # Site configuration
│   ├── algebra/           # Algebra section content
│   ├── advanced-math/     # Advanced Math section content
│   ├── statistics/        # Statistics section content
│   ├── geometry/          # Geometry section content
│   └── index.md           # Homepage content
└── package.json           # Project dependencies and scripts
```

## 🛠️ Development

### Adding New Content

1. Create a new Markdown file in the appropriate section directory
2. Update the sidebar in `docs/.vitepress/config.ts` to include the new page
3. Add links to the new content from related pages

### Using Components

The project includes several custom Vue components:

- `DesmosCalculator.vue`: Embeds a Desmos calculator with predefined equations
- `CopyableEquation.vue`: Creates copyable mathematical expressions
- `FloatingCalculator.vue`: Provides a toggleable floating calculator
- `AdSpace.vue`: Placeholder for advertisements

Example usage in Markdown:

```md
<script setup>
import DesmosCalculator from '../../.vitepress/components/DesmosCalculator.vue'
import CopyableEquation from '../../.vitepress/components/CopyableEquation.vue'
</script>

# Example Page

This is an equation: <CopyableEquation equation="y = mx + b" />

<DesmosCalculator 
  :equations="[
    'y=2x+1',
    'y=-x+4'
  ]"
  height="400px"
/>
```

## 🔧 Configuration

The site configuration is located in `docs/.vitepress/config.ts`. Here you can modify:

- Site metadata (title, description)
- Navigation links
- Sidebar structure
- External scripts and stylesheets

## 📦 Building for Production

To build the site for production:

```bash
npm run docs:build
```

The built files will be in `docs/.vitepress/dist/` and can be deployed to any static hosting service.

To preview the production build locally:

```bash
npm run docs:preview
```

## 👥 Contributing

We welcome contributions to improve the Digital SAT Desmos Guide! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and structure
- Add clear documentation for new features or use cases
- Test your changes locally before submitting
- Ensure your changes are responsive and work on mobile devices

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

If you have questions or suggestions, please open an issue on GitHub or contact the project maintainers directly.

---

Made with ❤️ by the Digital SAT Desmos Guide Team