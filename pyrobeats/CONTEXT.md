# Contexte du mix PYROBEATS

Ce fichier donne à une session Claude (la tienne ou celle d'un collaborateur) le contexte propre à ce mix. **Lis-le au début de chaque session. Mets-le à jour** dès que l'auteur donne une consigne durable, puis publie-le avec « publish phases » (il part dans le même envoi). Le détail phase par phase est dans `descriptif-pyrobeats.txt` et `fxmap.js` : ce fichier ne les recopie pas, il garde ce qui n'y est pas.

## Intention
Un mix de 49:37 qui raconte une éruption volcanique : terre aride, braises qui dorment, lave qui remonte, éruption, déferlantes, forêt qui brûle, puis la lave rencontre l'océan et le feu s'éteint sous l'eau (phases 31 à 34). Les animations sont **ajoutées par couches** (par addition) sans que le dôme devienne de toutes les couleurs.

## Palette et mouvements
- Palette du show : rouge / orange / jaune (lave, explosions), violet par touches, bleus pour la rencontre lave-océan.
- Dominante rouge jusqu'à la fin de la phase 3, puis bascule progressive vers l'orange (phase 4).
- **Sens de la lave** : quand elle chemine ou s'écoule, elle va du haut du dôme (centre) vers le bas (bord) ; quand elle jaillit, explose ou remonte, c'est l'inverse (du bord vers le centre).
- Pas plus de **3 familles de couleurs par phase**, sauf intention contraire (ex. la collision lave-océan).

## Règles posées par l'auteur
- **Rythme (valable pour toutes les animations du mix)** : le mix est majoritairement de la drum & bass, menée par la batterie et la caisse claire. **Chaque kick ou coup de batterie doit donner une pulsation générale du dôme** ; **chaque variation de dubstep (wobble de basse, synthés) doit chaîner un effet** (anim secondaire) ; **chaque accélération, ralentissement ou montée de la musique doit se ressentir dans l'animation** (ex. phase 11, 12:51,4 → 12:59,8 : montée avec un bruit de bouilloire juste avant le drop). Une anim de base qui ne pulse pas avec le rythme est refusée, même dans une phase « calme ».
- En cas de contradiction entre deux consignes, **la plus récente gagne** ; on ne supprime jamais en silence ce qui a été demandé (on le signale).
- Le texte du descriptif doit toujours décrire ce que fait vraiment l'animation (jamais de texte périmé).
- **Events** : un event est invoqué par son nom, qui reste **unique** (18 caractères max). Catégories de la banque : Volcano, Geometric, Basics, Nature, Water. Les descriptions de la banque ne contiennent **ni timing ni couleur**.
- Vocabulaire à connaître : *Rien* = extinction totale du dôme ; *Evil* (nom complet EvilPenta) = flash sur le cri de corbeau ; *PulseSlow* ; *LavaSpeed* ; *SlowLava* (canaux de lave, tête blanche, calotte blanche qui s'étend) ; *Gerbes*, *Éruption* ; events géométriques *PentaCircle*, *LineAPulse*, *CirclesDanse*, *CirclesFlash*, *CrossGlitch*, *TriGlitch* ; *FadeMinus* / *FadePlus*.
- **Fondus** : un `FadeMinus` éteint l'animation de base jusqu'à un `FadePlus`. S'il en reste un sans `FadePlus`, ajouter un `FadePlus` de 2 s au début de la phase suivante, par sécurité.
- Les phases 26 et 27 sont particulièrement appréciées : ne pas les dénaturer.
- Le nom d'un event que l'auteur a posé sur la timeline (déplacé, copié, étiré) fait foi sur les heures écrites dans le texte : recaler le texte, pas l'inverse.

## Couches d'animation (outil 1.3)
- Trois couches activables dans le journal : **Anim base layer** (l'effet de fond de la phase, qui suit le tempo principal), **Anim secondaire** (variations chaînées : intensité, accélération, contraste du rythme, couleur) et **Events**. Tout ce qui est ajouté automatiquement est marqué « auto », désactivable un par un (⏻) ; supprimer `layers.js` annule toute la passe automatique.
- `layers.js` est généré par `tools/auto-layers.py` d'après l'analyse v2 ; `events-plan.json` liste les events choisis à la main (avec la raison de chacun) et est fusionné dans `layers.js`. Les phases 1 à 4, 19 et certaines parties des phases 6 à 8 (dont l'éruption) n'ont volontairement reçu aucun event ajouté ; les phases 26 et 27 n'en ont reçu que peu.
- Les couleurs des variations et des events gardent la palette de la phase sauf raison créative (descriptif ou interprétation musicale) ; pas de bazar colorimétrique. Le tempo suit les changements de tempo à l'intérieur d'une phase.
- Nouveaux events de la banque (1.3) : *OndeDeChoc*, *Spirale*, *Balayage* (Geometric / Basics), *Marée*, *Bulles* (Water), *Cendres* (Volcano). Les détails ponctuels (étincelles, etc.) doivent devenir des events de la banque, sans doublon.
- *Vibration* : à utiliser avec parcimonie (flashs rapides, photosensibilité).
## Phase 11 refaite (test, novembre 2026)
- La phase 11 va de **11:10 à 13:55** (et non 13:21). Consigne de l'auteur : les passages lents suivent « Recul sur la montagne : majesté calme, éclairs » (lueurs lentes rouge sombre et orange, touches inhabituelles violet / rose / bleu, éclairs blancs-bleutés ponctuels) ; les passages rapides suivent l'esprit de la phase 12 (« coulées rapides du sommet vers la base ») ; **dans l'ensemble, privilégier la majesté calme**. Il y a beaucoup de voix sur cette phase.
- Les pistes exportées sont **muettes de 11:31 à 13:21 et de 13:44 à 13:51** alors que le mix joue : `tools/fill-gaps.py` analyse le mix lui-même sur ces trous (kicks, temps, départs de sons) et complète l'analyse. À relancer après toute nouvelle analyse du mix.
- Base : *Montagne* (cratère, flancs, touches de couleur liées à la voix) + *Coulées* seulement dans les passages rapides (fenêtres `win` dans `fxmap.js`). Variations et events de la phase : `layers-plan.json` et `events-plan.json` (calés à la main sur les frappes réelles, `snap:false`).
- Nouveaux events de la banque : *Foudre*, *Aurore*, *ÉchoCristal* (Nature), *Panache* (Volcano).
- Retour arrière : `clean/backups/avant-refonte-phase11/` contient tous les fichiers d'avant.
## Travail en cours / à ne pas faire
- Pas d'export TouchDesigner / sACN / DMX pour le moment (un ami s'en chargera plus tard).
- Pas d'animations « globales » sans raison musicale.
- Le mix Sylvasonic est en attente : ne rien y modifier sans demande.

## Notes de collaborateurs
Chaque collaborateur ajoute ses propres notes durables sous un titre `### Notes de <utilisateur>` pour éviter les conflits d'édition ; la partie ci-dessus est tenue par le propriétaire du mix.
