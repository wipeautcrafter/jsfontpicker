#!/usr/bin/env bash

RESET="\033[0m"
PURPLE="\033[1;95m"
GREEN="\033[1;92m"
RED="\033[1;91m"
ERROR=""

log_step() { echo -ne "$PURPLE$1$RESET"; }
log_done() { echo -e "${GREEN}DONE$RESET"; }
log_error() {
  echo -e "${RED}ERROR$RESET"
  echo $ERROR
  exit $?
}

# Clear build directory
rm -f dist/*

# Generate types
log_step "🔗 Generating types... "
ERROR=$(npm run tsc 2>&1 >/dev/null) || log_error
log_done

# Build source
log_step "🔨 Building source...  "
ERROR=$(npm run build 2>&1 >/dev/null) || log_error
log_done

# Minify files
log_step "⚡️ Minifying files...  "
cd dist
shopt -s nullglob
for file in *.{js,css}; do
  name=${file%.*}
  ext=${file##*.}
  ERROR=$(esbuild $file --minify --outfile="$name.min.$ext" 2>&1 >/dev/null) || log_error
done
log_done
shopt -u nullglob

