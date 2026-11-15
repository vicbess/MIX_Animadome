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
- En cas de contradiction entre deux consignes, **la plus récente gagne** ; on ne supprime jamais en silence ce qui a été demandé (on le signale).
- Le texte du descriptif doit toujours décrire ce que fait vraiment l'animation (jamais de texte périmé).
- **Events** : un event est invoqué par son nom, qui reste **unique** (18 caractères max). Catégories de la banque : Volcano, Geometric, Basics. Les descriptions de la banque ne contiennent **ni timing ni couleur**.
- Vocabulaire à connaître : *Rien* = extinction totale du dôme ; *Evil* (nom complet EvilPenta) = flash sur le cri de corbeau ; *PulseSlow* ; *LavaSpeed* ; *SlowLava* (canaux de lave, tête blanche, calotte blanche qui s'étend) ; *Gerbes*, *Éruption* ; events géométriques *PentaCircle*, *LineAPulse*, *CirclesDanse*, *CirclesFlash*, *CrossGlitch*, *TriGlitch* ; *FadeMinus* / *FadePlus*.
- **Fondus** : un `FadeMinus` éteint l'animation de base jusqu'à un `FadePlus`. S'il en reste un sans `FadePlus`, ajouter un `FadePlus` de 2 s au début de la phase suivante, par sécurité.
- Les phases 26 et 27 sont particulièrement appréciées : ne pas les dénaturer.
- Le nom d'un event que l'auteur a posé sur la timeline (déplacé, copié, étiré) fait foi sur les heures écrites dans le texte : recaler le texte, pas l'inverse.

## Travail en cours / à ne pas faire
- Pas d'export TouchDesigner / sACN / DMX pour le moment (un ami s'en chargera plus tard).
- Pas d'animations « globales » sans raison musicale.
- Le mix Sylvasonic est en attente : ne rien y modifier sans demande.

## Notes de collaborateurs
Chaque collaborateur ajoute ses propres notes durables sous un titre `### Notes de <utilisateur>` pour éviter les conflits d'édition ; la partie ci-dessus est tenue par le propriétaire du mix.
