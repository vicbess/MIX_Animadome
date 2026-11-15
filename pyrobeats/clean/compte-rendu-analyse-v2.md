# Compte rendu : analyse v2 de Pyrobeats (15/11/2026)

## Ce qui a été fait
- Pistes analysées : BRUITAGES_ONLY, ECHO_ONLY, MUSIC_ONLY (49:37). Départs de sons en 44,1 kHz (pas ≈ 6 ms, superflux librosa, seuil adaptatif + plancher absolu) : 10 003 / 2 696 / 14 188.
- Batterie de la piste musique : séparée par htdemucs_ft puis drumsep (kick, snare, toms, hh, ride, crash). Kicks : 5 611 ; frappes (snare + hh + crash) : 9 785.
- Temps et premiers temps : beat_this (6 335 temps, 1 931 premiers temps).
- Bilan par phase (niveau, densité, évolution, ruptures sonores, batterie, tempo) : `analysis2.report.md`, relu avec le descriptif.

## Ce qui change dans l'animation
- `beats.js` et `stems.js` : kicks et frappes remplacés par ceux de la batterie séparée (forces recalées sur l'ancienne échelle, donc seuils `minS` inchangés). Toutes les phases et tous tes events qui se calent sur les kicks / frappes en profitent automatiquement. fxmap.js, descriptif et events-timing.json ne sont PAS modifiés (tes events sont intacts).
- Vérification : 64 % des nouveaux kicks tombent sur une attaque réelle des graves (52 % avant) ; 55 % sont alignés sur un temps beat_this (17 % avant). Seuls 32 % des anciens kicks coïncident (±50 ms) avec les nouveaux : c'est la plus grosse différence que tu verras.

## À savoir
- Les pistes sont la vérité du mix : par ex. le « mur de synthés » de l'éruption (10:10) est dans la piste BRUITAGES, la piste MUSIC y est quasi muette.
- beat_this saute parfois du simple au double tempo (176 / 143 / 187 / 71 bpm) : les temps sont fiables, le « bpm » affiché moins.
- ride et crash séparés sont bruités (fuites) : non utilisés.
- Non fait : `tracks.js` (pistes) pas encore utilisé dans les effets ; nettoyage des anciens outils et intégration à run-analysis / README attendus après ton accord.

## Revenir en arrière
- Copie des anciens fichiers : `clean/backups/avant-analyse-v2/` (beats.js, stems.js, features.js, gut.js, tracks.js).
- Ou Git : le commit « Sauvegarde avant la nouvelle analyse » du dépôt des mix (5b134de) et de l'outil (a71a0e4).