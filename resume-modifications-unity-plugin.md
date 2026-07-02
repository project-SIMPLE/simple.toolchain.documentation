# Resume factuel des modifications du SIMPLE Unity Plugin

Ce fichier resume la serie de commits faite sur le depot
`project-SIMPLE/SIMPLE-Unity-Plugin`, principalement sur la branche :

```text
fix/playmode-launch-appearance-sync
```

Le sujet principal etait la synchronisation entre :

- la preview statique generee depuis GAMA dans Unity ;
- le Play Mode Unity connecte a `simple.webplatform` ;
- les overrides d'apparence des especes : couleur, echelle, prefab, offsets,
  rotation et visibilite.

## Commits principaux

| Commit | Sujet | Modification factuelle |
|---|---|---|
| `19c9d0c` | Play Mode launch + runtime appearance refresh | Correction du lancement de l'experiment depuis Unity Play Mode et ajout du refresh des apparences runtime sur les agents deja crees. |
| `fae89c7` | Runtime overrides without preview context | Les overrides runtime peuvent etre appliques meme si la preview statique n'est pas disponible comme contexte actif. |
| `af5e8be` | Transient Play Mode overrides | Les modifications faites pendant le Play Mode restent temporaires et ne sont plus reutilisees automatiquement dans la preview suivante. |
| `2003852` | Stale player state | Ignorance des anciens etats de player Unity pour eviter de reutiliser une session Play Mode precedente. |
| `d7d91e1` | Reconnect + override context | Stabilisation du reconnect Play Mode et du contexte utilise pour appliquer les overrides d'especes. |
| `d607a82` | Play exit pause + preview completion | Stabilisation de la pause de l'experiment a la fermeture du Play Mode et de la fin de capture preview. |
| `b5560ca` | Polygon scaling anchors | Recentrage du scaling des polygones autour de l'ancre de geometrie au lieu d'un pivot incoherent. |
| `377cfd2` | Edit preview polygon scaling | Stabilisation de l'echelle des polygones dans la preview Editor. |
| `95bee5d` | Parent scale spread | Prevention de l'etirement d'un nuage d'agents quand l'echelle etait appliquee au parent commun. |
| `a95a451` | Dynamic preview position trails | Suppression des traces/positions residuelles lors des previews dynamiques successives. |
| `4ec5ea4` | Prey/predator preview cache | Remplacement plus strict du cache preview pour `prey` et `predator`, afin d'eviter de reutiliser une ancienne geometrie. |
| `ae4d141` | Preview spread diagnostics | Ajout de logs de diagnostic pour mesurer l'etendue attendue et l'etendue visible des especes en preview. |
| `4525dc6` | Active spread diagnostics | Execution des diagnostics de spread quand les overrides actifs sont reappliques. |
| `6bdbdca` | Fallback anchors on agent roots | Les fallbacks preview sont ancres sur la racine de chaque agent au lieu de placer le visuel enfant a une position decalee. |
| `d823172` | Runtime fallback scaling | Alignement du comportement des fallbacks runtime avec celui de la preview. |
| `1567c26` | Preview fallback scale on roots | Application de l'echelle des fallbacks preview sur la racine agent, pas une deuxieme fois sur l'enfant `Visual`. |

## Fichiers principalement touches

```text
Editor/GamaEditorFirstTickCapture.cs
Editor/GamaEditorMiddlewareOrchestrator.cs
Editor/GamaEditorPreviewCapture.cs
Editor/GamaEditorPreviewOverrideApplier.cs
Editor/GamaEditorPreviewWorldAccumulator.cs
Editor/GamaEditorStaticPreviewFromJson.cs
Editor/GamaPanelWindow.cs
Editor/GamaPreviewPlayModeGuard.cs
Editor/GamaSpeciesWizardEditor.cs
Editor/SimulationManagerInspector.cs
Runtime/Connection/ConnectionManager.cs
Runtime/Connection/StaticInformation.cs
Runtime/Connection/WebSocketConnector.cs
Runtime/Preview/GamaPreviewObject.cs
Runtime/Preview/GamaRuntimePreviewOverrideApplier.cs
Runtime/Preview/GamaSpeciesWizard.cs
Runtime/Simulation/SimulationManager.cs
```

## Changements par zone

### Play Mode

- Ajout d'une identification plus fiable du player runtime Unity.
- Rejet des anciens etats de player quand ils ne correspondent plus a la session
  courante.
- Stabilisation du reconnect entre Unity, `simple.webplatform` et GAMA.
- Pause plus fiable de l'experiment GAMA quand Unity quitte le Play Mode.
- Les objets runtime sont regroupes sous :

```text
[GAMA] Runtime Live Agents
```

### Overrides d'apparence runtime

- Les changements faits dans le Game Manager pendant le Play Mode sont reappliques
  aux agents deja presents.
- Les proprietes concernees sont :
  - couleur ;
  - echelle ;
  - prefab override ;
  - position offset ;
  - rotation offset ;
  - visibilite.
- Les modifications faites en Play Mode restent transitoires.
- Elles ne deviennent pas automatiquement des valeurs sauvegardees pour la preview
  suivante.

### Preview statique

- La capture preview nettoie mieux les anciennes donnees avant de reconstruire la
  scene preview.
- Les objets preview sont regroupes sous :

```text
[GAMA] Static Experiment Preview
```

- Les settings d'especes peuvent etre edites depuis le GAMA Panel ou le Simulation
  Manager Inspector.
- Les changements faits en Edit Mode restent sauvegardes comme overrides de preview.

### Scaling des agents et des polygones

- Les polygones sont recentres autour de leur ancre de geometrie avant scaling.
- L'echelle ne doit plus deplacer ou etirer le nuage d'agents.
- Le scale doit s'appliquer agent par agent.
- Correction du cas ou une espece semblait correcte en Play Mode mais pas en preview,
  ou inversement.

### Fallbacks capsules/cubes

Probleme corrige :

- Certains agents non polygonaux ou avec geometrie degeneree utilisent des capsules
  ou cubes fallback.
- L'ancien comportement pouvait mettre la position sur l'enfant `Visual` au lieu de la
  racine agent.
- Dans ce cas, appliquer un scale pouvait etirer le nuage ou donner une taille
  differente entre preview et Play Mode.

Regle actuelle :

- la racine de chaque agent porte l'ancre GAMA ;
- l'enfant fallback `Visual` reste en local `(0, 0, 0)` ;
- le scale d'espece est applique sur la racine agent ;
- le fallback garde une taille locale stable ;
- preview et Play Mode utilisent la meme logique.

### Diagnostics

Ajout de logs pour detecter les cas ou le rendu visible ne correspond pas a la
position des racines Unity.

Prefixes :

```text
[GAMA][PREVIEW][SPREAD]
[GAMA][PREVIEW][SPREAD][ACTIVE]
```

Ces logs mesurent les `Renderer.bounds`, pas seulement les `Transform.position`, afin
de detecter les enfants visuels decales.

## Comportement attendu apres ces commits

Cas de test typique :

```text
prey = 3
predator = 3
vegetation_cell = 1
```

Attendu :

- la preview Editor et le Play Mode donnent la meme taille apparente ;
- `prey` et `predator` grossissent autour de leur propre position ;
- le nuage d'agents ne s'etire pas quand l'echelle change ;
- `vegetation_cell` garde la taille de grille attendue ;
- les edits faits en Play Mode ne polluent pas la prochaine preview ;
- les edits faits en Edit Mode restent sauvegardes.

## Verification effectuee cote documentation

Le site Docusaurus compile correctement avec :

```bash
npm run build
```

