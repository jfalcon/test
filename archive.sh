#!/bin/bash

# check for argument
if [ -z "$1" ]; then
  echo "Usage: $0 output_filename"
  exit 1
fi

OUT_FILE="$1.zip"
CURRENT_DIR="$(dirname "$(realpath "$0")")"

cd "$PARENT_DIR" > /dev/null 2>&1

# ensure the output file doesn't already exist
if [ -f "$OUT_FILE" ]; then
  echo "Error: File '$OUT_FILE' already exists. Please choose a different name."
  cd - > /dev/null 2>&1
  exit 1
fi

# avoid including zip files (if rerun)
zip -r "$OUT_FILE" . -x "**/*.zip" "**/.git/*" "**/.vscode/*" "**/dist/*" "**/node_modules/*"
cd - > /dev/null 2>&1
