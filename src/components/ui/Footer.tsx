import { ContactForm } from './ContactForm'

export const Footer = () => (
  <footer className="bg-black px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-12 md:grid-cols-2">
        <ContactForm />
        <div>
          <h3 className="mb-4 text-2xl font-bold">Contact</h3>
          <p className="mb-2 text-gray-400">Curious collaborator?</p>
          <p className="text-gray-400">
            Email us at{' '}
            <a
              href="mailto:hello@asteroidbelt.co"
              className="underline transition-colors hover:text-white"
            >
              hello@asteroidbelt.co
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 flex gap-6 border-t border-gray-800 pt-8 text-sm text-gray-400">
        {/* <a href="/privacy" className="transition-colors hover:text-white">
          Privacy Policy
        </a> */}
        <p>© {new Date().getFullYear()} Asteroid Belt. All rights reserved.</p>
      </div>
    </div>
  </footer>
)
