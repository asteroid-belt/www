export const Footer = () => (
  <footer className="bg-black px-6 py-16">
    <div className="mx-auto max-w-6xl space-y-4 text-center">
      <div className="flex justify-center gap-6 text-sm text-gray-400">
        <a
          href="mailto:adam@asteroidbelt.co"
          className="transition-colors hover:text-white"
        >
          adam@asteroidbelt.co
        </a>
        <a
          href="https://www.linkedin.com/in/adamgcobb"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} Asteroid Belt. All rights reserved.</p>
    </div>
  </footer>
)
