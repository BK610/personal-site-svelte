# Build the project
build:
    pnpm build

# Commit all edited files
commit: lint-fix format
    git add .
    cz c

# Commit some files
commitf *files: lint-fix format
    git add {{ files }}
    cz c

# List all just commands
[default]
default:
    just --list

# DANGEROUS: Deploy the project
deploy: format lint-fix build
    pnpm gen
    npx wrangler deploy

# Run the development server
dev:
    pnpm dev

# Run the formatter
format:
    pnpm format

# Run knip to check for unused dependencies and code
knip:
    pnpm knip

# Run the linter
lint:
    pnpm lint

# Run the linter and fix safe issues
lint-fix:
    pnpm lint:fix

# Run the tests
test:
    pnpm test

# Run the unit tests
test-unit:
    pnpm test:unit

# Run the end-to-end tests
test-e2e:
    pnpm test:e2e
