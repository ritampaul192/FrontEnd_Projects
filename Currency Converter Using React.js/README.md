
# 💱 Currency Converter Using React.js

A modern, responsive currency converter built using **React.js + Vite**.  
This project was built as part of my learning journey to master **React Hooks**, **Custom Hooks**, and component-based UI design.

---

## 📌 Purpose

- Practice and understand **React fundamentals**
- Implement reusable **custom hooks**
- Build reusable components with **props and state**
- Work with public APIs to fetch **live currency data**

---

## 🛠️ Tech Stack

- ⚛️ React.js (with Vite)
- 🎣 React Hooks: `useState`, `useEffect`
- 🧠 Custom Hooks: `useCurrencyInfo`, `useCurrencyFname`
- 💅 Tailwind CSS (if used)
- 🌐 Fawaz Currency API (`@fawazahmed0/currency-api`)

---

## 🧠 Custom Hooks

| Hook Name            | Purpose                                        |
|----------------------|------------------------------------------------|
| `useCurrencyInfo.js` | Fetches real-time currency exchange rates      |
| `useCurrencyFname.js`| Resolves full names for currency short codes   |

---

## 📂 Folder Structure
Currency Converter Using React.js/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ └── InputBox.jsx # Reusable input component
│ ├── hooks/
│ │ ├── useCurrencyInfo.js # Custom hook to fetch rates
│ │ └── useCurrencyFname.js # Custom hook for currency names
│ ├── App.jsx # Main App logic
│ ├── App.css
│ ├── index.css
│ └── main.jsx # Entry point
├── .gitignore
├── vite.config.js
├── package.json
└── README.md

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ritampaul192/FrontEnd_Projects.git
cd FrontEnd_Projects/Currency_Converter
```

### 2. Install Dependencies
npm install

### 3. Start the Development Server
npm run dev

App will run at: http://localhost:5173

## 📦 Features

- 🔄 Live currency conversion  
- 🌐 Exchange rate data from Fawaz API  
- 🎣 Custom hooks for fetching and formatting data  
- 💡 Reusable components with props and hooks  
- 📱 Fully responsive layout (desktop & mobile)  

---

## 📸 Screenshots

_Add screenshots here of the working converter UI._  
![image](https://github.com/user-attachments/assets/82c0733c-e538-4ba8-9029-f2fb5415726c)

---

## 🔗 Live Demo

🌐 [Click here to use the live Currency Converter](https://curcal01.vercel.app)

---

## 🧑‍💻 Author

**Ritam Paul**  
📧 [ritampaul192@gmail.com](mailto:ritampaul192@gmail.com)   
🐙 [GitHub - ritampaul192](https://github.com/ritampaul192)

---

> ⭐ Feel free to fork the repo, use the custom hooks, and build your own version!

