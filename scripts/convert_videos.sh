#!/usr/bin/env bash
# Generate multiple resolutions for a video using FFmpeg
# Usage: ./scripts/convert_videos.sh path/to/video.mp4

set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 <video>" >&2
  exit 1
fi

input="$1"
filename=$(basename "$input")
name="${filename%.*}"

mkdir -p dist

# 1080p
ffmpeg -i "$input" -vf "scale=-2:1080" -c:a copy "dist/${name}-1080p.mp4"

# 720p
ffmpeg -i "$input" -vf "scale=-2:720" -c:a copy "dist/${name}-720p.mp4"

# 480p
ffmpeg -i "$input" -vf "scale=-2:480" -c:a copy "dist/${name}-480p.mp4"
