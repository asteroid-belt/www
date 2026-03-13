import { StarsContainer } from './ui/StarsContainer'
import { LOGO, CTA_LINK_CLASSES } from './ui/constants'

const Skulto = () => (
  <>
    <Hero />
    <Demo />
    <Features />
    <Platforms />
    <Install />
  </>
)

export default Skulto

const Hero = () => (
  <StarsContainer>
    <div className="relative z-20 mx-auto flex h-full flex-col justify-center pt-20 md:items-center">
      <div className="bg-gray-800/80 py-4 text-center text-xs md:px-10 md:py-8 md:text-lg">
        <pre className="text-amber-300">{LOGO}</pre>
        <p className="mt-4 px-4 text-lg text-white md:text-xl">
          Scan AI agent skills for prompt injection before you install them
        </p>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:flex-row">
        <a href="https://github.com/asteroid-belt/skulto" className={CTA_LINK_CLASSES}>
          GitHub
        </a>
        <a href="https://listenlabs.ai/s/3Q78n32D" className={CTA_LINK_CLASSES}>
          Give Feedback
        </a>
      </div>
      <code className="mt-6 bg-basically-black px-6 py-3 text-sm text-gray-300">
        brew install asteroid-belt/tap/skulto
      </code>
    </div>
  </StarsContainer>
)

const Demo = () => (
  <section className="bg-basically-black px-6 py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-8 text-sm text-gray-400">
        Interactive TUI with full-text search, one-command install, and security
        scanning
      </p>
      <img
        src="/skulto/demo.gif"
        alt="Skulto demo: interactive TUI"
        className="w-full rounded-lg border border-gray-800"
        loading="lazy"
      />
    </div>
  </section>
)

const features = [
  {
    title: 'Search Skills',
    description:
      'SQLite FTS5-powered full-text search across all indexed skills with BM25 ranking. ~50ms latency.',
    gif: '/skulto/search-small.gif',
    alt: 'Skulto search demo',
  },
  {
    title: 'Install Skills',
    description:
      'Install from repositories or by name. Multi-select skills, choose platforms and scope (global or project). Already-installed skills can be skipped, extended to new locations, or skipped in bulk.',
    gif: '/skulto/install.gif',
    alt: 'Skulto install demo',
  },
  {
    title: 'Security Scanning',
    description:
      'Detect prompt injection, dangerous code patterns, and suspicious frontmatter before skills reach your agents. Reports CRITICAL, HIGH, MEDIUM, and LOW threat levels.',
    gif: '/skulto/scan.gif',
    alt: 'Skulto security scan demo',
  },
  {
    title: 'Repository Management',
    description:
      'Add skill repositories and sync them with git-based pull. Track changes and scan new or updated skills automatically.',
    gif: '/skulto/add-small.gif',
    alt: 'Skulto add repository demo',
  },
  {
    title: 'Update & Sync',
    description:
      'Pull all repositories, reconcile installed skills, and scan for threats in a single command. See what changed since your last sync.',
    gif: '/skulto/skulto-update-small.gif',
    alt: 'Skulto update demo',
  },
  {
    title: 'Manage Locations',
    description:
      'Add or remove skill installations across any combination of platforms and scopes. See where each skill is installed at a glance.',
    gif: '/skulto/manage-small.gif',
    alt: 'Skulto manage skill locations demo',
  },
  {
    title: 'Create Skills',
    description:
      'Author new skills with metadata, tags, and platform targeting. Publish to repositories for your team to discover and install.',
    gif: '/skulto/skill-create-small.gif',
    alt: 'Skulto skill creation demo',
  },
  {
    title: 'MCP Server',
    description:
      'Expose skills to AI assistants programmatically via Model Context Protocol. Search, install, and manage skills from Claude Code or any MCP-compatible client.',
    gif: '/skulto/mcp-install-small.gif',
    alt: 'Skulto MCP server demo',
  },
] as const

const Features = () => (
  <section className="bg-space-purple px-6 py-16 text-white">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-16 text-center text-3xl font-bold">How It Works</h2>
      <div className="space-y-24">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center gap-8 md:flex-row ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {feature.description}
              </p>
            </div>
            <div className="flex-1">
              <img
                src={feature.gif}
                alt={feature.alt}
                className="w-full rounded-lg border border-gray-700"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const platforms = [
  'Claude Code', 'Cursor', 'Windsurf', 'GitHub Copilot',
  'OpenAI Codex', 'OpenCode', 'Cline', 'Roo Code',
  'Gemini CLI', 'Kiro CLI', 'Amp', 'Continue',
  'Goose', 'Junie', 'Kilo Code', 'Trae',
  'Qwen Code', 'Kimi Code CLI', 'CodeBuddy', 'Command Code',
  'Crush', 'Droid', 'Kode', 'MCPJam',
  'Mux', 'OpenHands', 'Pi', 'Qoder',
  'Zencoder', 'Neovate', 'Pochi', 'Antigravity',
  'Moltbot',
]

const Platforms = () => (
  <section className="bg-basically-black px-6 py-16 text-white">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="mb-4 text-3xl font-bold">33 Platforms Supported</h2>
      <p className="mb-12 text-sm text-gray-400">
        Install skills to any of these AI coding tools
      </p>
      <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {platforms.map((name) => (
          <div
            key={name}
            className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-gray-300"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Install = () => (
  <section id="installation" className="bg-black px-6 py-16 text-center text-white">
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-8 text-3xl font-bold">Get Started</h2>
      <code className="block rounded-lg bg-gray-900 px-6 py-4 text-lg text-gray-200">
        brew install asteroid-belt/tap/skulto
      </code>
      <p className="mt-6 text-sm text-gray-500">
        Then run <code className="text-gray-400">skulto</code> to launch the
        interactive TUI
      </p>
    </div>
  </section>
)
