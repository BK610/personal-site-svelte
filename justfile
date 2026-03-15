# Build the project
build:
    npm run build

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

# Run the development server
dev:
    npm run dev

# Run the formatter
format:
    npm run format

# Run the linter
lint:
    npm run lint

# Run the linter and fix safe issues
lint-fix:
    npm run lint:fix

# Run the tests
test:
    npm run test

# Run the unit tests
test-unit:
    npm run test:unit

# Run the end-to-end tests
test-e2e:
    npm run test:e2e