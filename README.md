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
   ├─ CONTEXT.md                contexte du mix pour Claude (publié avec les phases)
   ├─ clean/                    rapports de nettoyage de phase
   ├─ publish/                  phases publiées : un fichier par utilisateur, nommé <utilisateur>_phases.json
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

## Contexte du mix (CONTEXT.md)

Chaque mix contient un fichier **CONTEXT.md** : le contexte à donner à une session Claude (intention artistique, palette, règles de l'auteur, vocabulaire, décisions durables). Claude le lit au début de chaque session et le tient à jour. Il est **publié avec « publish phases »** s'il a changé, et la page affiche **« ● contexte mis à jour : récupérer »** quand un autre utilisateur en a publié une nouvelle version. Chacun note ses propres décisions sous ### Notes de <utilisateur> pour éviter les conflits.

## Ce qui reste local

Ne sont pas versionnés : l'audio, l'historique des prompts de chacun (`prompts.jsonl`, `prompts-done.json`), les sauvegardes de nettoyage (`clean/backups/`) et les copies de secours (`*.bak.txt`).

## Publier ses phases

Le bouton **publish phases** (en haut de la page, à côté du choix du mix) publie **toutes les phases** du mix d'un coup dans `<mix>/publish/<utilisateur>_phases.json` puis l'envoie sur GitHub. Le nom d'utilisateur est **toujours en préfixe du fichier** : si deux personnes publient en même temps, chacune écrit dans son propre fichier et rien n'est écrasé.

Chaque phase publiée contient son texte du descriptif, ses réglages d'effets, ses events (copies comprises) et son timing dans le mix, avec un numéro de version propre : il augmente seulement quand le contenu de la phase change.

## Récupérer une phase

Sur la timeline, la barre colorée d'une phase devient **jaune striée de rouge** (numéro en jaune) quand la publication d'un **autre** utilisateur diffère de ta version. L'outil le vérifie sur GitHub toutes les 3 minutes (un simple test, sans rien télécharger ni écrire chez toi s'il n'y a rien de neuf).

Un clic sur cette barre, ou sur « PHASE X » / le titre de la phase, ouvre un menu :

- **updater phase X** : liste les versions disponibles de la phase (utilisateur, version, date, nombre d'events), lues directement sur GitHub, et remplace au choix son texte, ses réglages et ses events. Une sauvegarde est faite (`clean/backups/pull-…`) et un bouton **Annuler** restaure l'état précédent ;
- **check for updates** : force la vérification et affiche les phases à mettre à jour ;
- **publish phases** : publie toutes tes phases.

Les bornes des phases sont fixées par la personne qui démarre le mix : une version dont les bornes diffèrent des tiennes n'est pas encore récupérable.
## Licence

Les textes, réglages et fichiers d'analyse de ce dépôt sont sous licence [MIT](LICENSE). Les droits sur les musiques restent à leurs auteurs.
