# AI Prompts Collection CLI

A powerful and interactive command-line tool for browsing, customizing, and copying AI prompts directly to your clipboard. Perfect for developers, prompt engineers, and anyone working with AI models!

---

## 🚀 Features

- **Interactive Prompt Selection:** Browse a curated collection of AI prompts from a simple CLI menu.
- **Dynamic Variable Replacement:** Fill in custom values for any placeholders (e.g., `{{subject}}`, `{{code}}`) in your selected prompt.
- **Clipboard Integration:** Instantly copy your customized prompt to the clipboard for easy pasting anywhere.
- **User-Friendly Interface:** Clean, emoji-enhanced CLI experience.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/timeoutguy/prompt-collection.git
cd prompts-collection
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🛠️ Usage

Start the CLI tool with:

```bash
npm start
```

Or, if you prefer using `node` directly:

```bash
node index.js
```

---

## 📝 How It Works

1. **Prompt Selection:**  
   The tool loads prompts from `collection.json` and lets you select one interactively.

2. **Variable Input:**  
   For each placeholder in the prompt (e.g., `{{framework}}`), you’ll be asked to provide a value.

3. **Prompt Generation:**  
   The tool replaces all placeholders with your input and displays the final prompt.

4. **Clipboard Copy:**  
   Your customized prompt is automatically copied to your clipboard for immediate use.

---

## 📁 Prompt Collection Format

Your `collection.json` should look like this:

```json
[
  {
    "name": "Explain Code",
    "prompt": "Explain what this {{language}} code does: {{code}}",
    "replaceable": ["language", "code"]
  },
  {
    "name": "Summarize Article",
    "prompt": "Summarize the following article: {{article_text}}",
    "replaceable": ["article_text"]
  }
]
```

---

## 🧩 Dependencies

- [`@inquirer/prompts`](https://www.npmjs.com/package/@inquirer/prompts) – For interactive CLI prompts
- [`clipboardy`](https://www.npmjs.com/package/clipboardy) – For clipboard access

Install them automatically with `npm install`, or manually:

```bash
npm install @inquirer/prompts clipboardy
```

---

## ✨ Example Session

```shell
🌟 ===============================
📚 Welcome to the IA Prompts Collection!
🤖 Your One-Stop Shop for AI Magic ✨
🎯 Here you'll find carefully curated prompts
🔮 Ready to unleash AI's potential
🌟 ===============================

📝 Please select a prompt:
> Explain Code

Prompt selected: Explain what this {{language}} code does: {{code}}

Enter the value for language: JavaScript
Enter the value for code: for(let i=0;i<10;i++){console.log(i);}

🌟Your final prompt was copied to your clipboard🌟

Explain what this JavaScript code does: for(let i=0;i<10;i++){console.log(i);}
```

---

## 🛡️ License

MIT

---

## 🤝 Contributing

Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

## 📬 Contact

For questions or suggestions, open an issue or contact [marcus.dev@protonmail.com](mailto:marcus.dev@protonmail.com).

---

Happy prompting! 🚀