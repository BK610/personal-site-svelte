# Build the project
build:
    pnpm run build

# Commit all edited files
commit: lint-fix format
    git add .
    cz c

# Commit some files
commitf *files:
    lint-fix
    format
    git add {files}
    cz c

# List all just commands
[default]
default:
    just --list

# DANGEROUS: Deploy the project
deploy: format lint-fix build
    pnpm run gen
    npx wrangler deploy

# Run the development server
dev:
    pnpm run dev

# Run the formatter
format:
    pnpm run format

# Run the linter
lint:
    pnpm run lint

# Run the linter and fix safe issues
lint-fix:
    pnpm run lint:fix

# Run the tests
test:
    pnpm run test

# Run the unit tests
test-unit:
    pnpm run test:unit

# Run the end-to-end tests
test-e2e:
    pnpm run test:e2e