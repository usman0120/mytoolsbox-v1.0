# Project Details
# 📦 Toolbox Web

**Toolbox Web** is a collection of multiple daily-use tools, organized into categories for easy access.  
It’s built using **HTML**, **CSS**, **Tailwind CSS**, and **JavaScript**, with free APIs (no sign-up required).  
This project is designed to be **lightweight, user-friendly, and fully functional offline** (except API-based tools).

---

## 🌟 Features

- 🧪 **Daily-use tools** for various purposes.
- 🎨 **Design tools** like pixel art maker, color palette generator, etc.
- 📐 Calculators, converters, and study tools.
- 📁 File management tools.
- 🖼 Image and media tools.
- 🎯 Simple, modern UI with Tailwind CSS.
- 📱 Responsive design for mobile, tablet, and desktop.
- 💡 Works with **100% free APIs** (no account or payment required).
- 🛡 Error handling and user feedback for better usability.

---

## 📂 Folder Structure

TOOLBOXWEB/
│
├── dist/                  # Compiled and production-ready CSS
│   └── style.css
│
├── node\_modules/          # Installed dependencies (ignored in .gitignore)
│
├── src/
│   ├── js/                # JavaScript logic
│   ├── sections/          # Shared UI sections like header/footer
│   │   └── index.css
│   └── tools/             # Tools grouped by category
│       ├── ai-tools/
│       ├── calculator-tools/
│       ├── design-tools/
│       ├── file-tools/
│       ├── image-tools/
│       ├── media-tools/
│       ├── misc-tools/
│       ├── study-tools/
│       ├── time-tools/
│       └── writing-tools/
│
├── index.html              # Homepage
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation

---

## 🚀 Installation & Usage

1. **Clone the repository**
   git clone https://github.com/usman0120/MyTolBox.git
   cd toolboxweb

2. **Install dependencies**

   npm install

3. **Run development server**

   npx tailwindcss -i ./src/sections/index.css -o ./dist/style.css --watch

4. **Open in browser**
   Simply open `index.html` in your browser or use a local server like:

   npx live-server
---

## 🛠 Built With

* **HTML5**
* **CSS3**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Free Public APIs**

---

## 🤝 Contributing

Contributions are welcome!
Please fork this repository, create a new branch, and submit a pull request.

---

## © Copyright

© 2025 **Usman**. All rights reserved.
This project and its source code are protected under the **Copyright Act 1976** and applicable international laws.
No part of this repository, including files, code, and design, may be reproduced, distributed, or transmitted without prior written permission, except for personal, educational, and open-source use as allowed under the license.

---

## 📧 Contact

For inquiries or suggestions: usman-portfolio-silk.vercel.app/contact
