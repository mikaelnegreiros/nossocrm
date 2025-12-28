# Quickstart: Validate Mobile-Comparable + PWA

**Feature**: `001-mobile-shell-pwa`  
**Date**: 2025-12-28

## Run locally

1) Install dependencies and start dev server:

```bash
npm install
npm run dev
```

2) Open the app and use device emulation:
- iPhone: 390×844 (Safari/Chrome)
- Android: 360×800
- iPad: 768×1024 and 1024×768

## Validate “golden tasks”

- Mobile navigation: switch Inbox/Boards/Contatos/Atividades without overlap
- Deal flow: open deal → move stage → mark won/lost
- Activity: create + complete an activity without keyboard hiding CTA
- PWA: install prompt appears (eligible browsers) and app launches from home screen

## PWA notes

- PWA installation requires:
  - valid manifest
  - served over HTTPS (production/staging)
- iOS behavior differs:
  - no standard `beforeinstallprompt`
  - user installs via “Share → Add to Home Screen”
