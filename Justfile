set dotenv-load

@default:
  just --list

install:
	pnpm install

build:
	pnpm run build

dev:
	pnpm run dev

lint:
	pnpm run lint

format:
	pnpm run format

start: build
	pnpm run preview

watch:
	pnpm run watch

ensure_cloudflare_page_exists:
	chmod +x ./scripts/cloudflare/ensure-cloudflare-pages-exists.sh
	./scripts/cloudflare/ensure-cloudflare-pages-exists.sh "asteroidbelt-www"

ensure_cloudflare_infra_exists: ensure_cloudflare_page_exists

deploy: install lint build ensure_cloudflare_infra_exists
	chmod +x ./scripts/cloudflare/cloudflare-pages-deploy.sh
	./scripts/cloudflare/cloudflare-pages-deploy.sh "asteroidbelt-www" "./dist"

ship_it: lint
	if git diff --exit-code; then \
		git push; \
	else \
		@echo "\nError: unstaged files found..."; \
	fi

clean:
	rm -rf dist/ .astro/
