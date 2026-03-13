import { StarsContainer } from './ui/StarsContainer'

const Marketing = () => (
  <>
    <Hero />
    <Products />
  </>
)

export default Marketing

const Hero = () => (
  <StarsContainer>
    <div className="relative z-20 flex h-full items-center justify-center px-6 py-20">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl leading-tight font-light md:text-5xl">
          Tools for building with AI agents
        </h1>
        <p className="text-lg text-gray-300">
          Shared context. Shared quality. Shared memory. Open source
          infrastructure for teams shipping AI-native software.
        </p>
        <a
          href="https://github.com/asteroid-belt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-basically-black px-6 py-3 text-sm transition-colors hover:text-gray-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </StarsContainer>
)

const products = [
  {
    name: 'Skulto',
    tagline: 'Security scanner and package manager for AI agent skills.',
    description: 'Detect prompt injection, sync skill repositories, and install across 33 platforms.',
    install: 'brew install asteroid-belt/tap/skulto',
    link: '/skulto',
    linkLabel: 'Learn more',
  },
  {
    name: 'Orcs',
    tagline: 'Multi-agent orchestration for shipping production software.',
    description:
      'Event-driven state machine, human-in-the-loop quality gates, institutional memory.',
    link: '/whitepaper',
    linkLabel: 'Read the whitepaper',
  },
  {
    name: 'Teach',
    tagline: 'Interactive learning for technical topics.',
    description: 'A site and mobile app that teaches through exercises, not lectures.',
    comingSoon: true,
  },
] as const

const Products = () => (
  <section className="bg-space-purple px-6 py-16 text-white">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-12 text-3xl font-bold">What We&apos;re Building</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              {'comingSoon' in product && product.comingSoon && (
                <span className="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300">
                  Coming soon
                </span>
              )}
            </div>
            <p className="text-sm text-gray-300">
              {product.tagline} {product.description}
            </p>
            {'install' in product && product.install && (
              <code className="block text-sm text-gray-400">
                {product.install}
              </code>
            )}
            {'link' in product && product.link && (
              <a
                href={product.link}
                className="inline-block text-sm text-gray-200 underline transition-colors hover:text-white"
              >
                {'linkLabel' in product ? product.linkLabel : 'Learn more'}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)
