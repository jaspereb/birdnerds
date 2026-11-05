# Trystero 0.26.0 (vendored)

Used by live play (`tools/pwa/game.js`) to connect two phones directly over WebRTC. Public WebTorrent trackers
(openwebtorrent.com, webtorrent.dev, btorrent.xyz, files.fm) only introduce the phones; Google and Cloudflare STUN
servers help them find a direct route. Game messages then go phone to phone, encrypted.

- `torrent.mjs` is `@trystero-p2p/torrent@0.26.0` `dist/index.mjs`
- `core/*.mjs` is `@trystero-p2p/core@0.26.0` `dist/*.mjs`
- Fetched from registry.npmjs.org on 2026-11-04; tarball sha512 integrity matched the registry's.
- Only changes: `from "@trystero-p2p/core"` in `torrent.mjs` points at `./core/index.mjs` (browsers can't resolve
  package names), and the `//# sourceMappingURL` lines are removed.
- MIT licence (`LICENSE`), shipped alongside the files.

To upgrade, repeat the above for the new version into a new `trystero-<version>/` folder and update `LIVE_LIB` in
`tools/make_pwa.py`. The versioned folder name keeps phones from mixing a cached old copy with the new one.
