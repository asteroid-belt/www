import { StarsContainer } from './ui/StarsContainer'
import { LOGO, CTA_LINK_CLASSES } from './ui/constants'

const Skulto = () => (
  <>
    <Hero />
    <Installation />
  </>
)

export default Skulto

const Hero = () => (
  <StarsContainer>
    <div className="relative z-20 mx-auto flex h-full flex-col justify-center md:items-center">
      <div className="bg-gray-800/80 py-4 text-center text-xs md:px-10 md:py-8 md:text-lg">
        <pre className="text-amber-300">{LOGO}</pre>
        <p className="mt-4 px-4 text-white">
          Offline-first tool for securely managing and syncing agent skills
        </p>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:flex-row">
        <a href="#installation" className={CTA_LINK_CLASSES}>
          Install Notes
        </a>
        <a href="https://github.com/asteroid-belt/skulto" className={CTA_LINK_CLASSES}>
          GitHub
        </a>
        <a href="https://listenlabs.ai/s/3Q78n32D" className={CTA_LINK_CLASSES}>
          Give Feedback
        </a>
      </div>
    </div>
  </StarsContainer>
)

const Installation = () => (
  <div
    id="installation"
    className="bg-white px-2 py-6 text-center text-wrap text-black md:px-10 md:py-20 md:text-left"
  >
    <h2 className="text-3xl font-bold">Installation</h2>
    <h3 className="my-4 mt-10 text-lg font-semibold underline">Homebrew</h3>
    <code className="mt-4 p-3 text-black">brew install asteroid-belt/tap/skulto</code>
    <h3 className="my-4 mt-6 text-lg font-semibold underline">Build from source</h3>
    <pre className="mt-4 flex flex-col p-3 text-black">
      {[
        '# Clone the repository',
        'git clone https://github.com/asteroid-belt/skulto.git',
        ' ',
        '# Change into the directory',
        'cd skulto',
        ' ',
        '# Install dependencies',
        'make deps',
        ' ',
        '# Build (outputs to ./build/)',
        'make build-all',
        ' ',
        '# Run',
        './build/skulto',
      ].map((line, index) => (
        <code key={index} className="text-wrap">
          {line}
        </code>
      ))}
    </pre>
  </div>
)
