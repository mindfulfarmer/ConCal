# ConCal v2

<div align="center">
  <img src="ConCal_logo.png" alt="ConCal Logo" width="120" height="120">
  <br>
  <strong>Calculator and Convertor, Simplified!</strong>
</div>

<br>

<div align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#customization">Customization</a>
</div>

---

## 📖 Overview

**ConCal** (Contextual Calculator) is a sophisticated, mobile-first web application that bridges the gap between calculation and conversion. Unlike traditional calculators, ConCal allows users to perform arithmetic while simultaneously converting the result into different units (Length, Mass, Temperature, etc.) in real-time.

Built with vanilla HTML, CSS, and JavaScript, it features a highly polished "Glassmorphism" UI, haptic feedback, and a responsive design that feels like a native iOS/Android application.

## ✨ Key Features

### 🧮 Advanced Calculation
* **Dual Modes:** Switch seamlessly between **Simple** (basic arithmetic) and **Scientific** (Trig, Log, Pi, Exponents) keypads.
* **History Tape:** View and recall previous calculations from a slide-up history modal.
* **Fraction Support:** Auto-convert decimal results into mixed fractions (e.g., `1.5` → `1 ½`).
* **Smart Formatting:** Input formatting using the Indian Numbering System (commas) for better readability.

### 🔄 Contextual Conversion
* **Live Mirroring:** As you calculate, the result is instantly converted to a secondary unit.
* **Multiple Categories:** Support for:
    * 📏 Length (cm, in, ft, m, km, miles, etc.)
    * ⚖️ Mass (kg, lb, oz, g, etc.)
    * 🌡️ Temperature (C, F, K)
    * 📐 Area (m², ft², acres, hectares)
    * 🚀 Speed (km/h, mph, knots)
    * 💧 Volume & Flow
* **Expandable Interface:** Collapse the converter view for a distraction-free calculator experience.

### 🎨 Personalization
* **Theming:** Three distinct, high-fidelity themes:
    * **Graphite:** (Default) Dark solid, amber accents.
    * **Vitality:** Dark glass, neon green accents.
    * **Slate:** Deep blue, royal blue accents.
* **Typography:** Switch between **Inter**, **Chivo Mono**, and **Fira Mono** to suit your style.
* **Haptics:** Integrated vibration feedback (Web Vibration API & Capacitor Haptics support).

## 📱 Screenshots

> *Add screenshots of your app here. Recommended: One showing the "Graphite" theme, one showing "Scientific Mode", and one showing the "Settings Modal".*

| Graphite Theme | Scientific Mode | Settings & Themes |
|:---:|:---:|:---:|
| ![Graphite](path/to/screenshot1.png) | ![Scientific](path/to/screenshot2.png) | ![Settings](path/to/screenshot3.png) |

## 🛠️ Installation & Setup

ConCal is a static web application. It does not require a build process (Webpack/Vite) to run locally, though it relies on specific directory structures for fonts.

### Prerequisites
To get the full styling experience, you need the font files referenced in the CSS.

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/ConCal.git](https://github.com/yourusername/ConCal.git)
cd ConCal
