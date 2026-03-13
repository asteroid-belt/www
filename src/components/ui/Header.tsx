import logoSVG from '../../assets/logo.svg'
import { CTA_LINK_CLASSES } from '../ui/constants'

export const Header = () => {
  return (
    <header className="absolute z-30 min-w-full bg-gradient-to-b from-slate-900/80 to-transparent p-6 md:fixed md:p-4">
      <nav className="flex flex-col flex-wrap md:flex-row md:items-center md:justify-between">
        <a href="/" className="hover:text-gray-300">
          <div className="md:bg-basically-black flex items-center justify-center gap-2 md:justify-start md:p-2">
            <div className="flex size-[30px] items-center justify-center rounded-full bg-gray-400 md:size-[25px]">
              <img src={logoSVG.src} alt="logo" className="w-full" />
            </div>
            <span className="text-2xl tracking-widest md:text-2xl">
              {'Asteroid Belt'.toUpperCase()}
            </span>
          </div>
        </a>
        <div className="hidden md:flex justify-center gap-4 pt-6 md:pt-0">
          <a href="https://github.com/orgs/asteroid-belt/repositories" className={CTA_LINK_CLASSES}>
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
