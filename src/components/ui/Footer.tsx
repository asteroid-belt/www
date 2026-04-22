import { useState } from 'react'

const EMAIL = 'hello@asteroidbelt.co'

const CopyEmail = () => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white"
    >
      {copied ? 'Copied!' : EMAIL}
    </button>
  )
}

export const Footer = () => (
  <footer className="bg-black px-6 py-16">
    <div className="mx-auto max-w-6xl space-y-4 text-center">
      <div className="flex items-center justify-center gap-4">
        <CopyEmail />
        <span className="text-gray-600">·</span>
        <a
          href="https://github.com/orgs/asteroid-belt/repositories"
          className="text-sm text-gray-400 transition-colors hover:text-white"
        >
          GitHub
        </a>
      </div>
      <p>© {new Date().getFullYear()} Asteroid Belt. All rights reserved.</p>
    </div>
  </footer>
)
