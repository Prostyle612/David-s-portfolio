Place project images (png, jpg, jpeg, webp, etc.) in this folder.

Usage in the app:
- Files placed in `public/images/` are served statically at `/images/<filename>`.
- In `Projects.tsx`, set `image: '/images/topmri.png'` (or the filename you add) instead of a remote URL.

Notes:
- Using `public/` avoids the need for TypeScript image module declarations because these are static URLs.
- If you'd prefer bundling images via imports (so Vite can fingerprint them), place them in `src/assets/` and import them into a module instead.
