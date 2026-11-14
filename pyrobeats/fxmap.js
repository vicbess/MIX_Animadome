// ASSOCIATION PHASES / ÉVÈNEMENTS -> EFFETS  (le TEXTE vient de descriptif-pyrobeats.txt via descriptif.json)
// Clé = début de la phase "mm:ss" (ou instant de l'évènement). ok:true = effet validé par l'utilisateur (✓ dans l'interface).
// Tout le reste est une proposition. Les fondus entre phases sont calculés automatiquement d'après le son.
// Convention de gravité : la lave qui CHEMINE / s'écoule va du HAUT (centre) vers le BAS (bord) ; quand elle JAILLIT / EXPLOSE / REMONTE, c'est l'inverse (bord -> centre).
// Paramètre dir:'up' sur 'Tunnels de lave' et 'Pulsation audio' = la lave remonte (sinon elle chemine vers le bas).
// beat:0..1 sur "Pulsation audio" = part de la luminosité calée EXACTEMENT sur les kicks détectés (beats.js).
window.FXMAP = {
  // Dominante de couleur : rouge dominant jusqu'à la fin de la phase 3 (4:40), puis bascule graduellement vers l'orange pendant le début de la phase 4 (4:40 -> 5:40).
  hueGrade: [[0,1],[14,0.42],[120,0.42],[280,0.55],[340,1]],
  phases: {
    "00:00": { palette:'violet', fx:[{ n:'Terre violette' }] },
    "00:14": { palette:'ember',  fx:[{ n:'Terre violette', level:1.4, fadeStart:125, fadeEnd:160 }, { n:'Braises', mode:'wake', t0:17, t1:51, core:true, small:true }, { n:'Battement', t0:14, t1:135, a0:0.03, a1:0.4, onset:51, aOn:0.35 }] },
    "02:15": { palette:'lava',   fx:[{ n:'Terre violette', level:1.4, fadeStart:125, fadeEnd:160 }, { n:'Braises', mode:'steady', core:true, small:true, bassPulse:0.85, dieFrom:235.8, dieDur:6 }, { n:'Tunnels de lave', dir:'up', more:true, snake:true, fronts:44, glitchBoost:0.6, t0:135, t1:250, centerFrom:235.8, centerFade:4, jerk:[[162,175],[177,181],[183,189],[220,247,230]] }, { n:'Battement', t0:135, t1:135, a0:0.4, a1:0.4, minS:2, gap:0.17, tau:0.09, minW:0.35, spread:0.5 }, { n:'Halo violet', t0:189.5, t1:215.2, fadeIn:7, fadeOut:14, level:1.44, tun0:135, tun1:250 }, { n:'Trou de lave', offUntil:162.0, noteFrom:196.6, noteTo:220.3, noteZ:1.8, keepHue:true }] },
    "04:40": { palette:'ember',  fx:[{ n:'Braises', mode:'steady', core:true, small:true, slow:true }, { n:'Tunnels de lave', t0:135, t1:250, slow:true }, { n:'Pulsation audio', dir:'up', pal:'ember', level:0.55, slow:true }, { n:'Jaillissement de lave', gut:{ from:283, to:345, thr:2.2, gap:0.25 }, rise:0.55, tail:0.4, amp:0.65 }] },
    "05:45": { palette:'lava',   fx:[{ n:'Braises', mode:'steady', core:true, small:true }, { n:'Tunnels de lave', dir:'up', t0:0, t1:1 }, { n:'Pulsation audio', dir:'up', pal:'lava', level:0.85, beat:0.6 }, { n:'Battement', t0:345, t1:432, a0:0.08, a1:0.12, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "07:12": { palette:'lava',   fx:[{ n:'Tunnels de lave', dir:'up', t0:0, t1:1 }, { n:'Pulsation audio', dir:'up', pal:'lava', level:0.9, beat:0.7, src:'drums+other' }, { n:'Étincelles', pal:'fire', amount:0.4 }, { n:'Battement', t0:432, t1:484, a0:0.12, a1:0.16, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "08:04": { palette:'fire',   fx:[{ n:'Pulsation audio', dir:'up', pal:'fire', level:0.9, beat:0.8, src:'drums' }, { n:'Battement', t0:484, t1:545, a0:0.14, a1:0.18, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "09:05": { palette:'ember',  fx:[{ n:'Braises', mode:'steady' }, { n:'Pulsation audio', dir:'up', pal:'ember', level:0.6, beat:0.5, src:'drums+other' }, { n:'Battement', t0:545, t1:610, a0:0.05, a1:0.22, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "10:10": { palette:'fire',   fx:[{ n:'Jaillissement de lave', t0:610, rise:1.2, tail:2.5 }, { n:'Pulsation audio', dir:'up', pal:'fire', level:1, beat:0.35, src:'other' }, { n:'Étincelles', pal:'fire', amount:1 }, { n:'Comètes', t0:617.5, t1:670, rate:1.6 }] },
    "10:24": { palette:'fire',   fx:[{ n:'Pulsation audio', dir:'up', pal:'fire', level:1, beat:0.6, src:'drums+other' }, { n:'Étincelles', pal:'fire', amount:1 }, { n:'Battement', t0:624, t1:670, a0:0.12, a1:0.16, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }, { n:'Comètes', t0:617.5, t1:670, rate:1.6 }] },
    "11:10": { palette:'ember',  fx:[{ n:'Pulsation audio', pal:'lava', level:0.35 }, { n:'Éclairs', rate:0.4 }, { n:'Étincelles', pal:'violet', amount:0.25 }] },
    "13:21": { palette:'fire',   fx:[{ n:'Coulées', mode:'both', level:0.9, soft:1, slow:true }, { n:'Étincelles', pal:'fire', amount:0.35 }] },
    "15:09": { palette:'ember',  fx:[{ n:'Pulsation audio', pal:'lava', level:0.3 }, { n:'Éclairs', rate:0.5 }] },
    "15:40": { palette:'fire',   fx:[{ n:'Coulées', mode:'both', level:1 }, { n:'Étincelles', pal:'fire', amount:0.3 }, { n:'Battement', t0:940, t1:1007, a0:0.1, a1:0.1, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "16:47": { palette:'ember',  fx:[{ n:'Pulsation audio', pal:'ember', level:0.3 }, { n:'Éclairs', rate:0.4 }] },
    "17:20": { palette:'fire',   fx:[{ n:'Failles', level:1, minS:4 }, { n:'Pulsation audio', dir:'up', pal:'ember', level:0.4, beat:0.75, src:'drums' }, { n:'Étincelles', pal:'fire', amount:0.6 }] },
    "18:56": { palette:'ember',  fx:[{ n:'Failles', level:0.7, minS:6 }, { n:'Pulsation audio', pal:'ember', level:0.45 }] },
    "19:20": { palette:'lava',   fx:[{ n:'Braises', mode:'steady' }, { n:'Pulsation audio', dir:'up', pal:'lava', level:0.7, beat:0.4, src:'drums+other' }] },
    "20:34": { palette:'ember',  fx:[{ n:'Pulsation audio', dir:'up', pal:'ember', level:0.5 }, { n:'Étincelles', pal:'violet', amount:0.3 }] },
    "21:21": { palette:'lava',   fx:[{ n:'Pulsation audio', dir:'up', pal:'lava', level:0.9, beat:0.8, src:'drums' }, { n:'Battement', t0:1281, t1:1322, a0:0.14, a1:0.18, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "22:02": { palette:'ember',  fx:[{ n:'Pulsation audio', pal:'lava', level:0.4 }, { n:'Étincelles', pal:'fire', amount:1.4, band:'mid', trail:8 }, { n:'Éclairs', rate:0.25 }] },
    "23:34": { palette:'fire',   fx:[{ n:'Tourbillon', level:1, win:[[1414,1440,3],[1506,1529,3]] }, { n:'Tourbillon', level:0.4, win:[[1440,1506,6]] }, { n:'Coulées', mode:'both', level:0.8, soft:1, slow:true, win:[[1437,1464,4]] }, { n:'Flammes', level:0.7, speed:0.9, debrisMinS:6, win:[[1460,1487,4]] }, { n:'Failles', level:0.9, minS:4, win:[[1483,1510,3]] }, { n:'Pulsation audio', pal:'fire', level:0.3, beat:0.8 }] },
    "25:29": { palette:'lava',   fx:[{ n:'Braises', mode:'steady' }, { n:'Tunnels de lave', dir:'up', t0:0, t1:1 }, { n:'Pulsation audio', dir:'up', pal:'lava', level:0.9, beat:0.7 }, { n:'Battement', t0:1529, t1:1752, a0:0.06, a1:0.24, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "29:12": { palette:'ember',  fx:[{ n:'Braises', mode:'steady' }, { n:'Pulsation audio', pal:'ember', level:0.8, beat:0.5 }] },
    "32:12": { palette:'fire',   fx:[{ n:'Jaillissement de lave', t0:1932, rise:1.2, tail:2.5 }, { n:'Pulsation audio', dir:'up', pal:'fire', level:1, beat:0.8, src:'drums+other' }, { n:'Battement', t0:1932, t1:1960, a0:0.18, a1:0.22, minS:3, gap:0.22, tau:0.13, minW:0.5, spread:0.5 }] },
    "32:40": { palette:'fire',   fx:[{ n:'Flammes', level:1, debrisMinS:6 }, { n:'Étincelles', pal:'fire', amount:0.5 }] },
    "35:08": { palette:'fire',   fx:[{ n:'Flammes', level:1.1, speed:1.5, debrisMinS:5, src:'drums+other' }, { n:'Étincelles', pal:'fire', amount:1 }] },
    "36:50": { palette:'ember',  fx:[{ n:'Braises', mode:'steady' }, { n:'Flammes', level:0.35, speed:0.6, debrisMinS:9 }, { n:'Pulsation audio', pal:'ember', level:0.5, beat:0.25 }] },
    "37:48": { palette:'ember',  fx:[{ n:'Pulsation audio', pal:'ember', level:0.45 }] },
    "39:00": { palette:'blue',   fx:[{ n:'Braises', mode:'steady' }, { n:'Pulsation audio', pal:'ocean', level:0.5, beat:0.35 }, { n:'Vagues', level:0.4 }] },
    "41:25": { palette:'blue',   fx:[{ n:'Vagues', level:0.9 }, { n:'Collision lave-eau', t0:2485, repeats:5, period:22, spread:20, reach:0.78, fade:12, seepEvery:5, tips:1.8, gain:1.1 }, { n:'Pulsation audio', pal:'ocean', level:0.4 }] },
    "43:15": { palette:'blue',   fx:[{ n:'Vagues', level:1 }, { n:'Collision lave-eau', t0:2595, repeats:4, period:26, spread:22, reach:0.7, fade:12, seepEvery:6.5, tips:1.4, gain:1 }, { n:'Pulsation audio', pal:'ocean', level:0.22, beat:0.35, src:'drums' }] },
    "45:00": { palette:'blue',   fx:[{ n:'Vagues', level:1 }, { n:'Collision lave-eau', t0:2700, repeats:4, period:32, spread:26, reach:0.62, fade:12 }, { n:'Étincelles', pal:'ocean', amount:0.5 }, { n:'Pulsation audio', pal:'ocean', level:0.22, beat:0.4, src:'drums' }] },
    "47:15": { palette:'blue',   fx:[{ n:'Vagues', level:1, clear:1, dimT0:2850, dimT1:2955 }, { n:'Braises', mode:'sleep', t0:2850, t1:2955, core:true, small:true }] },
    "49:24": { palette:'dark',   fx:[] },
  },
  // Évènements ponctuels : durée visible (s) + effet
  // Descriptions GÉNÉRIQUES des types d'events (EVENT BANK) : aucune indication de temps, pour pouvoir les invoquer n'importe où.
  // Effets de PHASE à garder dans l'aperçu de la banque d'events pour les events qui en dépendent (les autres sont rendus seuls) : liste de noms d'effets, ou '*' (tout) pour les events qui modulent la luminosité de l'existant.
  eventNeeds: { 'LavaSpeed':['Tunnels de lave','Braises'], 'Ruée':['Tunnels de lave','Braises','Battement'], 'Vibration':'*', 'FadeMinus':'*', 'FadePlus':'*' },
  // Catégories de l'EVENT BANK (menus déroulants). Un nom d'event doit rester UNIQUE (les animations de la bibliothèque s'appellent dans un prompt par leur nom). Sans entrée : Basics.
  eventCategory: { 'Gerbes':'Volcano', 'Éruption':'Volcano', 'EvilPenta':'Volcano', 'LavaSpeed':'Volcano', 'SlowLava':'Volcano', 'SlowLavaBlanc':'Volcano', 'Ruée':'Volcano', 'Jaillissement':'Volcano', 'Vibration':'Volcano', 'Lave bruitée':'Volcano', 'TriGlitch':'Geometric', 'CrossGlitch':'Geometric', 'PentaCircle':'Geometric', 'LineAPulse':'Geometric', 'CirclesDanse':'Geometric', 'CirclesFlash':'Geometric', 'GerbeEtincelles':'Volcano', 'Rotation':'Geometric', 'Hélice':'Geometric', 'Spirale':'Geometric', 'Balayage':'Geometric', 'Vague diagonale':'Geometric', 'Onde sortante':'Geometric', 'Onde entrante':'Geometric', 'Course de barres':'Geometric', 'Damier de barres':'Geometric', 'Rien':'Basics', 'FadeMinus':'Basics', 'FadePlus':'Basics', 'PulseSlow':'Basics', 'Flash pulsé':'Basics', 'Stroboscope':'Basics', 'Montée':'Basics', 'Descente':'Basics', 'Étincelles':'Basics' },
  // Events de bibliothèque « génériques » (pas dans la banque d'animations BANK) : types disponibles dans l'EVENT BANK sans occurrence sur la timeline ; ajoutés avec « + Ajouter ».
  eventLib: {
    'FadeMinus': { d:"Prend l'animation de base en cours (sans les effets des events) et la fait passer au noir en fondu, dans le timing défini par la zone de l'event ; l'animation de base reste noire ensuite (jusqu'à un FadePlus). Les events ne sont pas touchés.", span:2, fx:{ n:'Fade', dir:-1 } },
    'FadePlus': { d:"Rallume l'animation de base (sans les effets des events, inchangés) en fondu, dans le timing défini par la zone de l'event ; elle reste allumée ensuite.", span:2, fx:{ n:'Fade', dir:1 } },
  },  eventLabels: { 'EvilPenta':'Evil' },   // nom court affiché sous la barre de l'event sur la timeline (la banque garde le nom complet)
  eventTypes: {
    'EvilPenta': "Flash bref sur tout le dôme, calé sur l'attaque d'un son bref, et la forme StarsA anneau 1 a un flash très bref ; le flash large s'efface ensuite doucement.",
    'Ruée': "Pulsations et avancées de lave temporairement très rapides et très saccadées (la lumière ne descend jamais jusqu'à l'extinction) ; flash à l'attaque.",
    'LavaSpeed': "La lave rush, accélère et emplit plus de chemins en montant vers le centre ; elle s'ajoute aux autres effets sans les modifier ; entrée en montée de puissance progressive, sortie assez rapide.",
    'Rien': "Extinction totale du dôme (tout noir, environ 0,25 s) puis rallumage rapide ; event très court.",
    'Vibration': "Pour des basses vibrantes et longues : le dôme vibre en luminosité (petits flashs très très rapides) jusqu'à la fin de l'effet.",
    'Gerbes': "Jaillissements de lave (2) calés en rythme sur les poussées de dubstep : à chaque poussée, la lave jaillit du bas du dôme jusqu'en haut dans chacun des trois tiers en poussant des étincelles devant elle ; elle retombe vite pour laisser revenir l'animation de base, tandis que les étincelles retombent lentement.",
    'Éruption': "Explosion de volcan : un flash sur tout le dôme, un grand jaillissement de lave du bord vers le sommet, puis des gerbes successives calées sur les poussées dont les étincelles retombent lentement, une volée d'étincelles crépitantes jaillissant de bas en haut à chaque montée de lave et restant 2 à 3 s avant de disparaître, et pour finir une phase aveuglante où les triangles du haut clignotent et vibrent en alternance, avec des comètes qui retombent du centre vers l'extérieur en lignes droites.",
    'TriGlitch': "Des triangles au hasard s'allument et s'éteignent en glitch, calés en rythme sur les notes de synthé et de guitare (piste Aigus).",
    'CrossGlitch': "Quelques éléments des listes Cross (flocons), tirés au hasard, s'allument brièvement à chaque kick.",
    'PentaCircle': "Les éléments de la liste Pentas s'allument circulairement l'un après l'autre, en fondu doux (sans glitch), avec un démarrage rapide qui ralentit jusqu'à la fin.",
    'LineAPulse': "Toutes les lignes de la liste LinesA et le cercle extérieur (Circles, anneau 4), avec un halo doux autour des barres activées, s'allument en une demi-seconde, restent allumées une seconde, puis s'éteignent en deux glitchs juste après, le dernier illuminant environ 80 % du dôme.",
    'CirclesDanse': "Les cercles concentriques de la liste Circles tournent en sens alternés (un horaire, le suivant antihoraire, etc.) en steps : à chaque note de synthé ou kick, chaque cercle avance d'une barre en laissant une longue traînée dont la dernière barre est éteinte ; le cercle extérieur porte deux serpents ; la couleur dépend de la hauteur ; la barre de tête de chaque serpent brille plus.",
    'CirclesFlash': "Flash uniforme de tous les cercles de la liste Circles, qui s'estompe doucement (3 secondes), dans les mêmes couleurs que CirclesDanse.",
    'GerbeEtincelles': "Des étincelles aléatoires s'ajoutent par-dessus les autres animations : elles descendent du haut vers le bas du dôme en lignes droites, avec une traînée qui grésille, puis s'éteignent rapidement.",
    'SlowLava': "Montée en puissance de lave : des canaux partent du dernier cercle du dôme les uns après les autres (un, puis deux, puis trois...), à des vitesses un peu différentes, sans jamais s'éteindre (leur tête est la partie la plus lumineuse tant qu'ils progressent), et finissent par remplir tout le dôme au bout d'environ 8,5 secondes ; une calotte lumineuse grandit en haut à mesure que des canaux arrivent puis, au-delà, se répand du sommet vers le bas, uniquement sur les canaux, de plus en plus vite, jusqu'à couvrir tout le dôme à la fin ; tout pulse sur les kicks, de plus en plus fort au fil de l'event ; à l'arrêt, tout retombe vers le bas en environ 2,5 secondes, chaque canal à sa vitesse ; aucune autre animation n'est visible pendant l'event, sauf TriGlitch et Éruption qui prévalent.",
    'SlowLavaBlanc': "Variante de SlowLava, par-dessus le reste (les autres animations restent visibles) : les canaux de lave partent du dernier cercle du dôme et montent un à un, mais ils ont dès leur départ la couleur indiquée par le nom de l'event et pulsent plus fort que ceux d'un SlowLava normal ; à l'arrêt, tout retombe rapidement vers le bas.",
    'Jaillissement': "La lave a un sursaut : un front de lave jaillit du bord vers le centre, avec une courte traînée.",
  },
  events: {
    "02:21": { at:140.1, dur:4.5, fx:[ { n:'Flash', hue:280, sat:0.9, level:0.3, tau:1.4 }, { n:'ListeFlash', list:'StarsA', ring:1, hue:0, sat:1, level:1, tau:0.18 } ] },   // at = attaque réelle du cri dans le son (1500-6000 Hz) ; fondu au noir ~1,4 s
    "02:36": { at:156.9, span:5.1, dur:6.0, fx:{ n:'LavaSpeed', span:5.1, out:0.7 } },   // LavaSpeed : la lave rush, accélère, emplit plus de chemins en montant vers le centre (s'ajoute à l'existant)
    "02:40": { at:160.1, span:1.7, dur:1.7, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "02:49": { at:169.8, span:2.6, dur:3.4, fx:{ n:'Gerbes', span:2.6, count:1 } },   // Gerbes à 1 seul jaillissement
    "02:56": { at:176.9, span:0.5, dur:0.8, fx:{ n:'Noir', hold:0.25, back:0.2 } },   // Rien : extinction totale du dôme puis rallumage (très court)
    "03:07": { at:187.0, span:2.3, dur:2.3, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },   // ruée : pulsations et avancées de lave très rapides et saccadées + flash rouge à l'attaque
    "03:35": { at:215.1, span:4.9, dur:5.8, fx:{ n:'LavaSpeed', span:4.9, out:0.7 } },
    "03:38": { at:218.5, span:2.0, dur:2.0, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "03:40": { at:220.4, span:2.6, dur:4.4, fx:{ n:'Gerbes', span:2.6, count:2 } },   // Gerbes : 2 jaillissements de lave calés sur les poussées de basse, étincelles qui retombent lentement
    "03:53": { at:233.7, span:1.4, dur:1.4, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "03:56": { at:236.6, span:1.2, dur:1.2, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "03:58": { at:238.1, span:3.4, dur:3.4, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "04:03": { at:243.1, span:4.7, dur:4.7, rush:1, fx:{ n:'Flash', hue:0, sat:1, level:0.5, tau:0.3 } },
    "04:08": { at:248.0, span:11.4, dur:11.4, fx:{ n:'Vibration', hz:18, amp:0.4 } },   // basses vibrantes et longues (4:08 -> ~4:19,4) : le dôme vibre en luminosité
    "04:30": { at:270.8, span:9.0, dur:9.8, fx:{ n:'LavaSpeed', span:9.0, out:0.7, level:1.2, fill:0.5, startFrac:0.75, runFrac:0.4, inFrac:1.0, inPow:1.2, h0:54, h1:30 } },
    "04:40": { at:280.1, span:3.5, dur:3.8, fx:{ n:'GeoCircle', lists:['Pentas'], laps:3, span:3.5, hue:290, sat:0.8, fade:true, peak:0.95 } },   // PentaCircle : les Pentas s'allument en cercle (glitch), départ rapide puis amorti
    "04:41": { dur:5, fx:{ n:'Jaillissement de lave', rise:1.5, tail:3.2 } },
    "05:04": { at:304.0, span:1.8, dur:2.1, fx:{ n:'GeoPulse', lists:['LinesA'], extra:[{ list:'Circles', ring:4 }], halo:10, rise:0.5, hold:1, flash:0.8, span:1.8 } },   // LineAPulse : toutes les lignes de LinesA s'allument en 0,5 s, restent allumées 1 s, puis s'éteignent en deux glitchs
    "05:27": { at:327.6, span:2.5, dur:2.7, fx:{ n:'GerbeEtincelles', sparks:60, span:2.5 } },   // GerbeEtincelles : étincelles blanches aléatoires du haut vers le bas, traînée qui grésille, par-dessus les autres anims
    "07:46": { at:466.3, span:1.0, dur:1.3, fx:{ n:'Noir', keepSlow:true, hold:0.95, back:0.05 } },    // Rien : noir 1 s avant le SlowLava de 7:47,3
    "07:47": { at:467.3, span:8.4,  dur:11.2,  fx:{ n:'SlowLava', span:8.4 } },    // SlowLava : montée de lave lente
    "07:57": { at:477.5, span:1.0, dur:1.3, fx:{ n:'Noir', keepSlow:true, hold:0.95, back:0.05 } },    // Rien : noir 1 s avant le SlowLava de 7:58,5
    "07:58": { at:478.5, span:20.8, dur:23.6, fx:{ n:'SlowLava', span:20.8 } },
    "08:41": { at:521.1, span:2.6, dur:4.4, fx:{ n:'Gerbes', span:2.6, count:2 } },   // Gerbes : geysers de la phase 7
    "09:14": { at:554.7, span:1.0, dur:1.3, fx:{ n:'Noir', keepSlow:true, hold:0.95, back:0.05 } },    // Rien : noir 1 s avant le SlowLava de 9:15,7
    "09:15": { at:555.7, span:10.7, dur:13.5, fx:{ n:'SlowLava', span:10.7 } },
    "09:26": { at:566.7, span:0.5, dur:0.8, fx:{ n:'Noir', keepSlow:true, hold:0.45, back:0.05 } },    // Rien : noir une demi-seconde avant le SlowLava de 9:27,2
    "09:27": { at:567.2, span:21.3, dur:24.1, fx:{ n:'SlowLava', span:21.3 } },
    "09:49": { at:589.5, span:0.9, dur:1.2, fx:{ n:'Noir', keepSlow:true, hold:0.85, back:0.05 } },    // Rien : noir 0,9 s avant le SlowLava de 9:50,4
    "09:50": { at:590.4, span:19.0, dur:21.8, fx:{ n:'SlowLava', span:19.0 } },
    "10:09": { at:609.55, span:0.7, dur:1.0, fx:{ n:'Noir', hold:0.6, back:0.05 } },   // Rien : noir bref juste avant l'éruption (10:10)
    "10:10": { at:610.2, span:3.6, dur:13.5, fx:[ { n:'Jaillissement de lave', rise:1.4, tail:3.2 }, { n:'Flash', hue:24, sat:0.5, level:0.5, tau:0.7 }, { n:'Gerbes', span:3.6, count:3 }, { n:'Volée', count:3, sparks:45 }, { n:'Aveuglement', delay:3.4, dur:4, rate:10, comets:20 } ] },   // Éruption : explosion du volcan, finale aveuglante + comètes
    "10:23": { at:623.8, span:1.5, dur:1.8, fx:{ n:'TriGlitch', span:1.5, noteZ:1.5 } },   // TriGlitch : triangles au hasard qui s'allument/s'éteignent sur les notes de synthé/guitare (piste Aigus)
    "10:25": { at:625.7, span:9.6, dur:9.9, fx:{ n:'GeoGlitch', lists:['CrossA','CrossB'], count:2, life:0.2, minS:2, span:9.6 } },   // CrossGlitch : quelques géos des listes Cross s'allument en blanc sur les kicks (10:25,7 -> 10:35,3)
    "10:40": { at:640.9, span:4.0, dur:6.8, fx:{ n:'SlowLava', span:4.0, white:true, overlay:true } },   // SlowLavaBlanc : canaux entièrement blancs, par-dessus le reste
    "10:51": { at:651.0, span:2.6, dur:3.4, fx:{ n:'Gerbes', span:2.6, count:1 } },   // Gerbes : un jaillissement dans les grandes explosions
    "11:04": { at:664.4, span:2.5, dur:5.3, fx:{ n:'SlowLava', span:2.5, white:true, overlay:true } },
    "20:36": { at:1236.9, span:3, dur:3.1, fx:{ n:'GeoFlash', lists:['Circles'], grad:'#7a2bd6@0>#d4285f@0.3>#ff3a1e@0.55>#8a2be2@0.85', span:3 } },   // CirclesFlash : flash uniforme des cercles (même couleur que CirclesDanse)
    "20:58": { at:1258.7, span:4, dur:4.1, fx:{ n:'GeoSpin', lists:['Circles'], steps:true, trail:5, snakes:{ 4:2 }, minS:2, noteZ:1.5, grad:'#7a2bd6@0>#d4285f@0.3>#ff3a1e@0.55>#8a2be2@0.85', span:4 } },   // CirclesDanse : les cercles tournent en sens alternés (horaire / antihoraire)
  },
};
