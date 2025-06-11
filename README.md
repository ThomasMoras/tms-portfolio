# TMS Portfolio

A modern, responsive portfolio website built with Next.js 15 and TypeScript. This portfolio showcases professional experience, skills, projects, and GitHub contributions in an interactive and visually appealing way.

## Features

### Core Features

- Multi-language support using Next.js Internationalization (next-intl)
- Modern, responsive UI with smooth animations using Framer Motion
- Dark/Light theme support using next-themes
- Interactive sections with scroll-based animations
- GitHub contributions and activity display
- Career timeline visualization
- Project showcase with filtering capabilities

### Technical Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Components**: Radix UI (for accessible components)
- **Styling**: Tailwind CSS with animations
- **State Management**: React Context (for active section tracking)
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Theme Management**: next-themes

## Project Structure

```
tms-portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       └── page.tsx          # Main page component
│   ├── components/
│   │   ├── sections/            # Main sections of the portfolio
│   │   │   ├── home/            # Home section components
│   │   │   ├── skills/          # Skills section components
│   │   │   ├── projects/        # Projects section components
│   │   │   └── contributions/   # GitHub contributions section
│   │   ├── shared/              # Reusable components
│   │   └── navigation/          # Navigation components
│   ├── contexts/               # React Context providers
│   └── styles/                 # Global styles and utilities
├── public/                     # Static assets
├── messages/                   # Internationalization messages
└── config/                     # Configuration files
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The project uses environment variables for configuration. Create a `.env` file with the following variables:

```env
NEXT_PUBLIC_BASE_URL=your-base-url
NEXT_PUBLIC_GITHUB_TOKEN=your-github-token
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Form Handling**: React Hook Form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js and TypeScript
- Uses Radix UI for accessible components
- Styled with Tailwind CSS
- Animated with Framer Motion
- Internationalization by next-intl
- Theme switching with next-themes
