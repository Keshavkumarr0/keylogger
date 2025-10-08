# 🔐 Keylogger Testing Application


A simple educational keylogger application built with HTML, CSS, and JavaScript for demonstration and learning purposes.

## ⚠️ Disclaimer

**IMPORTANT**: This project is created strictly for educational purposes to understand how keylogging works and to raise awareness about cybersecurity. 

- ❌ Do NOT use this for malicious purposes
- ❌ Do NOT use this to capture unauthorized data
- ❌ Always obtain explicit permission before testing
- ✅ Use only in controlled, ethical environments
- ✅ Follow all applicable laws and regulations

## 📋 Features

- 🎯 Real-time keystroke capture
- 💾 Display captured keystrokes in a textarea
- 🎨 Clean and minimal user interface
- 🖥️ Fully client-side implementation
- 📱 Responsive design

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and design
- **JavaScript** - Keystroke detection and logging functionality

## 🚀 Getting Started

### Prerequisites

No special requirements needed! Just a modern web browser.

### Installation

1. Clone the repository
```bash
git clone https://github.com/keshavkumarr0/keylogger.git
```

2. Navigate to the project directory
```bash
cd keylogger
```

3. Open the HTML file in your browser
```bash
# On Windows
start college.html

# On macOS
open college.html

# On Linux
xdg-open college.html
```

Or simply drag and drop the `college.html` file into your browser.

## 💻 Usage

1. Open the application in your web browser
2. Type in the input field labeled "Input Text"
3. Click the "Check" button or continue typing
4. View the captured keystrokes in the text area below

## 📁 Project Structure

```
keylogger/
│
├── college.html        # Main HTML file with embedded CSS and JS
└── README.md          # Project documentation
```

## 🔧 How It Works

The application uses JavaScript event listeners to capture keyboard events:

1. **Event Listening**: Attaches `keydown` or `keyup` event listeners to the input field
2. **Key Capture**: Records each keystroke with timestamp
3. **Display**: Shows captured data in the textarea
4. **Storage**: Keeps data in memory during the session (no persistent storage)

## 🎓 Educational Value

This project helps understand:

- JavaScript event handling
- DOM manipulation
- User input capture
- Basic web security concepts
- Cybersecurity awareness

## 🔒 Security & Privacy

- All data processing happens client-side
- No data is sent to external servers
- No persistent storage is used
- Session data is cleared on page reload

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:


## 🙏 Acknowledgments

- Built for educational and awareness purposes
- Inspired by cybersecurity research
- Thanks to the web development community

---

**Remember**: With great power comes great responsibility. Use this knowledge ethically! 🛡️
