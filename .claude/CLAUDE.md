# kommit-frontend

Frontend de Kommit : une SPA React 19 + TypeScript 6 (Vite, Tailwind v4, shadcn sur Base UI, TanStack Query) qui consomme l'API de `kommit-backend`.

## Arborescence

```
kommit-frontend/
├── .claude/
│   ├── CLAUDE.md         # ce fichier
│   ├── rules/            # les conventions du repo, à suivre partout
│   └── skills/           # les skills du projet
├── public/               # fichiers servis tels quels (favicon)
├── src/
│   ├── main.tsx          # point d'entrée : monte l'app dans le DOM
│   ├── App.tsx           # assemblage : providers et routes
│   ├── index.css         # feuille de style globale (Tailwind + tokens shadcn)
│   ├── components/
│   │   ├── ui/           # composants génériques, dont ceux générés par shadcn
│   │   └── pages/        # un dossier par écran, avec ses morceaux spécifiques
│   ├── logic/            # logique métier pure, sans React ni réseau
│   ├── lib/              # couche infra (utils.ts de shadcn, config des libs)
│   │   └── api/          # le seul endroit qui connaît le réseau
│   ├── data/             # contenu statique des écrans
│   ├── types/            # contrat d'API partagé avec le backend
│   └── assets/           # images utilisées au runtime
├── components.json       # configuration de la CLI shadcn
├── index.html
├── vite.config.ts
├── tsconfig.json         # + tsconfig.app.json (src) et tsconfig.node.json (config Vite)
└── package.json          # pnpm uniquement
```

Les dossiers de `src/` se créent au fur et à mesure qu'un ticket en a besoin. Le rôle de chacun et le sens des dépendances sont détaillés dans `rules/architecture-frontend.md`.
