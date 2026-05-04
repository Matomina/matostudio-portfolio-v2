.PHONY: install dev build preview lint lint-fix format format-check typecheck check clean

install:
    npm install

dev:
    npm run dev

build:
    npm run build

preview:
    npm run preview

lint:
    npm run lint

lint-fix:
    npm run lint:fix

format:
    npm run format

format-check:
    npm run format:check

typecheck:
    npm run typecheck

check:
    npm run check

clean:
    rm -rf dist node_modules/.vite node_modules/.tmp
