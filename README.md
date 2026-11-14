# MIX_Animadome

Les **mix** de l'outil [ANIMADÔME](https://github.com/vicbess/ANIMADOME) : pour chaque mix audio, le scénario lumineux du dôme (descriptif, réglages des effets, positions des events) et l'analyse du son qui sert à le caler.

> Ce dépôt ne contient **jamais l'audio**. Les collaborateurs s'échangent les fichiers audio directement entre eux.

## Contenu

| Mix | Durée | État |
|---|---|---|
| `pyrobeats/` | 49:37 | scénario complet : 35 phases, ~40 events |
| `sylvasonic/` | — | squelette (analyse du son seulement) |

## Utiliser ces mix

Ce dépôt se clone **dans le dossier `dome-preview/mixes` de l'outil** (il y est ignoré par le dépôt de l'outil) :

```bash
git clone git@github.com:vicbess/ANIMADOME.git
cd ANIMADOME
git clone git@github.com:vicbess/MIX_Animadome.git dome-preview/mixes
```

Ajouter ensuite l'audio de chaque mix dans son dossier (voir « Fichiers audio » ci-dessous), puis lancer l'outil (`dome-preview/lancer-apercu.bat`).

## Structure d'un mix

```
mixes/
└─ <nom-du-mix>/
   ├─ mix.json                  nom, fichier audio, nom du descriptif
   ├─ descriptif-<nom>.txt      le scénario écrit : phases, texte technique, events *mm:ss*
   ├─ descriptif.json           version lue par la page (régénérée automatiquement)
   ├─ fxmap.js                  réglages des effets de chaque phase et de chaque event
   ├─ events-timing.json        positions, durées et copies d'events posés sur la timeline
   ├─ stems.js  beats.js  features.js  gut.js     analyse du son (calculée, ne pas éditer)
   ├─ clean/                    rapports de nettoyage de phase
   └─ audio/                    NON versionné : l'audio du mix (voir plus bas)
```

- `descriptif-<nom>.txt` est la source principale ; sa syntaxe est expliquée en tête du fichier de Pyrobeats : `[mm:ss => mm:ss] Titre` ouvre une phase, `*mm:ss*` un event, le gras est la partie technique, l'italique la partie son.
- `events-timing.json` est géré par la page : ne pas le modifier à la main pendant qu'elle est ouverte.
- Les fichiers d'analyse (`stems.js`, `beats.js`, `features.js`, `gut.js`) évitent à chacun de séparer les stems : l'audio et ces fichiers suffisent pour travailler.

## Fichiers audio

Chaque mix déclare son fichier audio dans `mix.json` (champ `audio`, relatif au dossier du mix), par exemple :

- `pyrobeats` → `audio/pyrobeats_128k.mp3`
- `sylvasonic` → `audio.mp3`

À placer à cet endroit, à la main. Ils sont exclus du dépôt (`.gitignore`) : **ne jamais les ajouter à Git**.

## Ce qui reste local

Ne sont pas versionnés : l'audio, l'historique des prompts de chacun (`prompts.jsonl`, `prompts-done.json`), les sauvegardes de nettoyage (`clean/backups/`) et les copies de secours (`*.bak.txt`).

## Travailler à plusieurs (prévu)

Chaque mix est découpé en phases. À venir : publier toutes les phases d'un mix en une fois (avec une version par phase) et pouvoir récupérer **une seule phase** à la fois depuis le fichier publié par un collaborateur, y compris son timing dans le mix. Les bornes des phases sont fixées par la personne qui démarre le mix.

## Licence

Les textes, réglages et fichiers d'analyse de ce dépôt sont sous licence [MIT](LICENSE). Les droits sur les musiques restent à leurs auteurs.
