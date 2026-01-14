<div align="center">
<img width="1200" height="475" alt="X-Threader Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🧵 X-Threader: YouTube to Thread

### Transform YouTube videos into engaging X (Twitter) threads with AI

[![Made with Gemini](https://img.shields.io/badge/Powered%20by-Gemini%203%20Pro-blue?style=flat-square)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

[View Demo](https://ai.studio/apps/drive/1Ze-I3aXpG2fh_Cm0dKTCmylfPwP-xT1g) • [Report Bug](https://github.com/3x3zxosint4mx6/one-shot-youtube-threader/issues) • [Request Feature](https://github.com/3x3zxosint4mx6/one-shot-youtube-threader/issues)

</div>

---

## 📖 About The Project

**X-Threader** is an AI-powered web application that automatically converts YouTube video content into well-structured, engaging X (formerly Twitter) threads. Simply paste a YouTube URL, and let Google's Gemini 3 Pro AI analyze the video content and generate a compelling thread with:

- 🎯 **Attention-grabbing hooks** that stop the scroll
- 📝 **Well-structured posts** breaking down key points
- 🔍 **Google Search Grounding** for accurate, fact-checked content
- 🎨 **Visual appeal** with strategic emoji usage
- ✨ **Call-to-action** endings for maximum engagement

### Built With

- **Frontend**: React 19.2.3 with TypeScript
- **Build Tool**: Vite 6.2
- **AI Engine**: Google Gemini 3 Pro Preview
- **Styling**: TailwindCSS (utility-first CSS)
- **API**: Google GenAI SDK

---

## ✨ Features

- ⚡ **One-Click Generation**: Paste URL and generate threads instantly
- 🤖 **AI-Powered Analysis**: Uses Gemini 3 Pro with Google Search grounding
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 📋 **Easy Copy**: Copy individual posts or entire thread
- 🔗 **Source Citations**: Includes grounding sources for transparency
- 🎨 **Modern UI**: Clean, dark-mode interface with smooth animations
- 📊 **Thread Summary**: Get a brief overview before diving into posts
- 🌐 **Real-time Processing**: Live status updates during generation

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Gemini API Key** - [Get one free](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/3x3zxosint4mx6/one-shot-youtube-threader.git
   cd one-shot-youtube-threader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   > ⚠️ **Important**: Use `VITE_` prefix for environment variables in Vite projects

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

---

## 📱 Usage

1. **Paste YouTube URL**: Copy any YouTube video URL and paste it into the input field
2. **Click Generate**: Hit the "Generate Thread" button
3. **Wait for AI**: The app will analyze the video content using Gemini AI
4. **Review Thread**: Browse through the generated posts
5. **Copy Content**: Use "Copy Entire Thread" or copy individual posts
6. **Post on X**: Share your thread on X (Twitter)!

### Example URLs to Try

- Educational videos
- Tech tutorials
- Product reviews
- Conference talks
- Documentaries

---

## 🛠️ Troubleshooting

### Common Issues

#### **Issue**: "Failed to generate thread" error

**Solutions**:
- ✅ Verify your Gemini API key is correct in `.env.local`
- ✅ Check that you're using `VITE_GEMINI_API_KEY` (not just `GEMINI_API_KEY`)
- ✅ Ensure the YouTube URL is valid and accessible
- ✅ Check your internet connection
- ✅ Verify you haven't exceeded API quota limits

#### **Issue**: "Could not find root element" error

**Solutions**:
- ✅ Clear browser cache and reload
- ✅ Check that `index.html` has `<div id="root"></div>`
- ✅ Run `npm install` again to ensure all dependencies are installed

#### **Issue**: Styles not loading properly

**Solutions**:
- ✅ Ensure TailwindCSS is properly configured
- ✅ Check that `index.css` imports Tailwind directives
- ✅ Clear build cache: `rm -rf node_modules/.vite`

#### **Issue**: Environment variables not working

**Solutions**:
- ✅ Restart the dev server after changing `.env.local`
- ✅ Use `VITE_` prefix for all environment variables
- ✅ Access variables with `import.meta.env.VITE_VARIABLE_NAME`

### Getting Help

If you encounter issues not listed here:
1. Check existing [GitHub Issues](https://github.com/3x3zxosint4mx6/one-shot-youtube-threader/issues)
2. Search [Gemini API Documentation](https://ai.google.dev/docs)
3. Create a [new issue](https://github.com/3x3zxosint4mx6/one-shot-youtube-threader/issues/new) with:
   - Detailed description of the problem
   - Steps to reproduce
   - Screenshots (if applicable)
   - Browser and OS information

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
   
   Click the "Fork" button at the top right of this repository

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your Changes**
   
   Follow the existing code style and conventions:
   - Use TypeScript for type safety
   - Follow React best practices
   - Add comments for complex logic
   - Keep components modular and reusable

4. **Test your Changes**
   ```bash
   npm run dev  # Test locally
   npm run build  # Ensure it builds successfully
   ```

5. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
   
   Use conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting
   - `refactor:` for code restructuring
   - `test:` for adding tests
   - `chore:` for maintenance

6. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   
   Go to the original repository and click "New Pull Request"

### Contribution Ideas

- 🎨 Add dark/light mode toggle
- 📊 Add character counter for each post
- 💾 Implement thread history with local storage
- 🔄 Add thread editing capabilities
- 📤 Add export to different formats (JSON, Markdown, PDF)
- 🌍 Add multi-language support
- ✅ Add input validation for YouTube URLs
- 📝 Add more customization options (thread length, tone, etc.)
- 🧪 Add unit and integration tests
- 📱 Improve mobile responsiveness

### Code of Conduct

Please note that this project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Google Gemini](https://ai.google.dev/) for providing the powerful AI model
- [React](https://react.dev/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Google AI Studio](https://aistudio.google.com/) for the development platform
- All contributors who help improve this project

---

## 📞 Contact & Support

**Project Link**: [https://github.com/3x3zxosint4mx6/one-shot-youtube-threader](https://github.com/3x3zxosint4mx6/one-shot-youtube-threader)

**Live Demo**: [https://ai.studio/apps/drive/1Ze-I3aXpG2fh_Cm0dKTCmylfPwP-xT1g](https://ai.studio/apps/drive/1Ze-I3aXpG2fh_Cm0dKTCmylfPwP-xT1g)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by [3x3zxosint4mx6](https://github.com/3x3zxosint4mx6)

**Powered by Google Gemini 3 Pro** | **Built with React & TypeScript**

</div>
