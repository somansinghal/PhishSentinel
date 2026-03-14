# 🛡️ PhishSentinel
**AI‑Powered Phishing URL Detection System**

PhishSentinel is a cybersecurity tool designed to detect **phishing URLs and malicious links using machine learning techniques**.  
It analyzes URL patterns and structural features to determine whether a link is **safe or potentially harmful**, helping users avoid phishing attacks and online fraud.

Phishing attacks are one of the most common cybersecurity threats where attackers imitate trusted websites to steal credentials, banking information, or personal data.  
PhishSentinel helps users quickly analyze suspicious URLs and identify threats before interacting with them.

---

# 🚀 Live Demo
🔗 https://phish-sentinel-ai9b57.vercel.app

---

# 📸 Screenshots

(Add screenshots of your project UI here for better presentation)

Example:

![Homepage Screenshot](screenshots/homepage.png)

![Detection Result](screenshots/result.png)

---

# 🎯 Problem

Phishing websites are designed to look identical to legitimate services like:

- Google
- PayPal
- Banking portals
- Social media login pages

Example:

https://google.com  
https://g00gle-login-secure.com

Most users cannot easily detect the difference between these URLs.

This project was built to help users **identify suspicious URLs using machine learning analysis.**

---

# 💡 Solution

PhishSentinel extracts multiple features from URLs and feeds them into a trained machine learning model that predicts whether a link is phishing or legitimate.

Process:

1️⃣ User submits a URL  
2️⃣ URL features are extracted  
3️⃣ Machine learning model evaluates the features  
4️⃣ The system returns a result

Result:

SAFE  
or  

⚠️ PHISHING

---

# 🧠 How It Works

User URL Input
        │
        ▼
Feature Extraction
(URL length, symbols, domain patterns)
        │
        ▼
Machine Learning Model
        │
        ▼
Prediction Result
(Safe / Phishing)

---

# 🧰 Tech Stack

### Programming
Python

### Machine Learning
Scikit‑Learn  
Pandas  
NumPy

### Frontend
HTML  
CSS  
JavaScript

### Deployment
Vercel

---

# ✨ Features

✔ Detect suspicious URLs  
✔ Machine learning based phishing detection  
✔ Fast analysis and prediction  
✔ Clean and simple UI  
✔ Educational cybersecurity tool

---

# 📂 Project Structure

PhishSentinel
│
├── dataset
│
├── model
│   ├── training.py
│   └── model.pkl
│
├── web
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── app.py
│
└── README.md

---

# ⚙️ Installation

Clone the repository

git clone https://github.com/somansinghal/PhishSentinel

Navigate to project folder

cd PhishSentinel

Install dependencies

pip install -r requirements.txt

Run the application

python app.py

---

# 🧪 Example Usage

Input URL

https://paypal-secure-login-check.com

Output

⚠️ Warning: Potential Phishing Website

---

# 📊 Future Improvements

• Browser extension for real‑time phishing detection  
• Deep learning based detection models  
• URL reputation database integration  
• Email phishing detection  
• Chrome security plugin

---

# 📚 What I Learned

Through this project I gained experience in:

• Cybersecurity fundamentals  
• Phishing attack detection methods  
• Feature engineering for ML models  
• Model training and evaluation  
• Building real‑world security tools using Python

---

# 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Soman Singhal**

Cybersecurity & AI Enthusiast

GitHub  
https://github.com/somansinghal

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository  
🍴 Fork it  
📢 Share it
