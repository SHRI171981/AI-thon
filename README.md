# AI Accessibility Assistant

A Vue.js application designed to help visually impaired users understand images, text, and audio through advanced AI technology.

## 📋 Overview

AI Accessibility Assistant is a web application built with Vue 3 and Vite that provides accessibility features for visually impaired users. The application allows users to:

- Upload images for AI processing and description
- Input text for audio conversion
- Process and read content aloud
- Access results in multiple formats (copy, download)

## 🚀 Features

- **Image Processing**: Upload images to get AI-generated descriptions
- **Text-to-Speech**: Convert text to spoken audio
- **Voice Input**: Use microphone for voice commands
- **Accessible Interface**: Designed with accessibility in mind
- **Result Management**: Save, copy, and download processed content

## 🛠️ Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Routing**: Vue Router
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue
- **Build Tool**: Vite

## 📥 Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/ai-accessibility-assistant.git
   cd ai-accessibility-assistant
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to the local development server (typically http://localhost:5173)

## 🏗️ Build for Production

```
npm run build
```

The built files will be in the `dist` directory and can be deployed to your web server.

## 🧪 Linting and Formatting

- Run ESLint:

  ```
  npm run lint
  ```

- Run Prettier:
  ```
  npm run format
  ```

## 📁 Project Structure

```
ai-accessibility-assistant/
├── public/               # Static assets
├── src/
│   ├── assets/           # CSS and other assets
│   ├── components/       # Vue components
│   │   └── nav/          # Navigation components
│   ├── router/           # Vue Router configuration
│   ├── stores/           # Pinia stores
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 📄 Pages

- **Home**: Introduction and getting started
- **Upload**: Interface for uploading images or entering text
- **Results**: View processed content with options to read aloud, copy, or download
- **Settings**: Configure application preferences
- **About**: Information about the application and how it works

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

Need help? Contact our support team at support@example.com.

## 📜 License

[MIT License](LICENSE)
