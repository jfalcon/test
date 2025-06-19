#!/bin/bash

# check for argument
if [ -z "$1" ]; then
  echo "Usage: $0 output_filename"
  exit 1
fi

OUT_FILE="$1.zip"
PARENT_DIR="$(dirname "$(dirname "$(realpath "$0")")")"

# ensure the output file doesn't already exist
if [ -f "$OUT_FILE" ]; then
  echo "Error: File '$OUT_FILE' already exists. Please choose a different name."
  exit 2
fi

# avoid including zip files (if rerun)
cd "$PARENT_DIR" > /dev/null 2>&1
zip -r "$OUT_FILE" . -x "./*.zip" "./.git/*" "./.vscode/*" "./dist/*" "./node_modules/*"
cd - > /dev/null 2>&1
