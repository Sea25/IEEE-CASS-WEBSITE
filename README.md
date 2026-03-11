# IEEE CASS Kerala Chapter Website

A modern, highly responsive, and interactive website designed for the IEEE Circuits and Systems Society (CASS) Kerala Chapter. 

Built with an "Airy Minimalist" design language, sophisticated typography, and premium glassmorphism aesthetics, ensuring a seamless user experience across mobile, tablet, and desktop devices while strictly adhering to IEEE CASS branding guidelines.

## 🚀 Tech Stack

*   **UI Framework:** [React 18](https://reactjs.org/)
*   **Build Tool:** [Vite 5](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Hosting Deployment:** Vercel, Netlify, or GitHub Pages

## ✨ Key Features

*   **Fully Responsive Layout:** Flawless design that fluidly scales from small mobile screens to ultrawide desktops.
*   **Floating Navigation:** Adaptive pill-shaped floating top dock with smooth scroll tracking and mobile slide-out menu.
*   **Blueprint Hero Section:** Airy minimalist layout with a schematic grid background and structural stat panes.
*   **Editorial About Section:** Clean 2-column magazine layout for Vision, Mission, and Focus Areas.
*   **Interactive Events Timeline:** Vertical timeline layout that dynamically reveals embedded event posters.
*   **Filmstrip Team Component:** Horizontal expanding accordion layout built gracefully using Framer Motion.
*   **Premium Contact Footer:** 4-column glassmorphism layout with subtle glows and gradient overlays.
*   **Data-Driven Architecture:** All data is neatly stored in `src/data/dummyData.js` allowing content to be updated purely through JSON without touching UI code.

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header/     # Floating navigation top bar & mobile menu
│   ├── Hero/       # Minimalist landing section & dynamic stats
│   ├── About/      # Vision, mission & core focus areas
│   ├── Events/     # Interactive vertical timeline
│   ├── Team/       # Horizontal expanding accordion
│   └── Contact/    # Premium glassmorphism footer & info
├── data/
│   └── dummyData.js # Centralized data source (edit photos & text here!)
├── App.jsx         # Main application assembly
├── main.jsx        # React entry point
└── index.css       # Global styles & Tailwind configuration
```

## 🛠️ Local Development

Follow these steps to run the application locally on your machine:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Theme Configuration

All brand colors and typography are heavily standardized and can be adjusted within `tailwind.config.js`:
*   **Primary Green:** `#008752` (`cass-green`)
*   **Dark Panels:** `#0B132B` (`cass-dark`)
*   **Light Accents:** `#F4F7FB` (`cass-light`)
*   **Typography:** 'Poppins', sans-serif

---
*Designed by Sona Abraham for the CASS Community.*