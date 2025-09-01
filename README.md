# video-agency-website_sam
Responsive web platform for a video and advertising production studio.

## Video processing

Use FFmpeg to create multiple resolutions for a single source file:

```bash
./scripts/convert_videos.sh path/to/video.mp4
```

The script outputs `-1080p`, `-720p` and `-480p` versions inside the `dist/` folder.

## Embedding

Include the generated files with multiple `<source>` tags so that browsers can choose the best quality. The player only preloads metadata and shows a poster image until playback begins:

```html
<video controls preload="metadata" poster="assets/poster.png">
  <source src="dist/video-1080p.mp4" type="video/mp4">
  <source src="dist/video-720p.mp4" type="video/mp4">
  <source src="dist/video-480p.mp4" type="video/mp4">
</video>
```

