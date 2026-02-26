import { StarsContainer } from './ui/StarsContainer'

const Marketing = () => (
  <>
    <Hero />
    <WhatWeAreBuilding />
  </>
)

export default Marketing

const Hero = () => (
  <StarsContainer>
    <div className="relative z-20 flex h-full justify-center px-6 pt-[50%] md:items-center md:pt-0">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl leading-tight font-light md:text-5xl">
          Open Source tools for AI belts
        </h1>
      </div>
    </div>
  </StarsContainer>
)

const WhatWeAreBuilding = () => {
  return (
    <section className="bg-space-purple px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">What We&apos;re Building</h2>
        <div className="grid gap-8 text-center md:grid-cols-2 md:text-left">
          <ProductInfo
            title="Skulto"
            description="An offline-first tool for discovering, syncing and managing AI agent skills so teams can use AI with consistency and predictability."
            installations={[
              {
                type: 'homebrew',
                value: 'asteroid-belt/tap/skulto',
              },
              {
                type: 'github',
                value: 'https://github.com/asteroid-belt/skulto',
              },
            ]}
            learnMoreLink="/skulto"
          />
        </div>
      </div>
    </section>
  )
}

const getProductInstallation = (type: 'github' | 'homebrew', value: string) => {
  switch (type) {
    case 'github':
      return (
        <div>
          <a
            key={value}
            href={value}
            className="text-medium mt-2 block text-gray-200 underline transition-colors hover:text-white"
          >
            Build from source
          </a>
        </div>
      )
    case 'homebrew':
      return <code>brew install {value}</code>
    default:
      throw new Error(`Unknown installation type: ${type}`)
  }
}

const ProductInfo = ({
  title,
  description,
  installations,
  learnMoreLink,
}: {
  title: string
  description: string
  installations: { type: 'github' | 'homebrew'; value: string }[]
  learnMoreLink: string
}) => (
  <div>
    <h3 className="mx-auto mb-4 max-w-[200px] border-b-3 border-gray-600 pb-3 text-lg font-semibold md:mx-0 md:max-w-full">
      {title}
    </h3>
    <p className="text-sm text-gray-300">
      {description}
      <span>
        {' '}
        <a
          href={learnMoreLink}
          className="text-gray-200 underline transition-colors hover:text-white"
        >
          Learn More
        </a>
      </span>
      .
    </p>
    <nav>
      {installations.map(({ value, type }) => (
        <li key={value} className="list-none first:pt-2">
          {getProductInstallation(type, value)}
        </li>
      ))}
    </nav>
  </div>
)
