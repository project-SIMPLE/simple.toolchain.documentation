# Resume des modifications SIMPLE Unity Plugin

## Branche de documentation

- Depot : `project-SIMPLE/simple.toolchain.documentation`
- Branche utilisee : `simple-unity-plugin`
- La branche `main` n'a pas ete modifiee pour ce resume.

## Objectif general

La documentation a ete adaptee pour decrire le SIMPLE Unity Plugin comme un package
Unity Package Manager, et non plus comme un projet Unity complet a telecharger.

Le workflow cible est maintenant :

1. Creer ou ouvrir un projet Unity.
2. Installer le SIMPLE Unity Plugin depuis Unity Package Manager.
3. Lancer GAMA et `simple.webplatform` separement.
4. Utiliser le GAMA Panel dans Unity pour configurer la scene.
5. Generer une preview depuis GAMA.
6. Lancer le Play Mode avec les memes reglages visuels.

## Modifications principales de la documentation Unity

### Workflow remplace

Le workflow historique :

```text
telecharger un projet Unity complet -> ouvrir le projet dans Unity Hub
```

a ete remplace par :

```text
creer ou ouvrir un projet Unity -> installer le package SIMPLE Unity Plugin
```

L'URL d'installation documentee est :

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

### Setup Unity

La page de setup Unity documente maintenant le setup fourni par le package :

```text
GAMA > GAMA Panel > Default Setup
```

Les objets crees par le setup sont documentes :

- `Directional Light`
- `Teleport Area/Ground`
- `FPSPlayer`
- `ManagersSolo/Connection Manager`
- `ManagersSolo/Game Manager`

### Reference package

La reference Unity a ete transformee en reference du package :

- `Runtime/` : code compile dans le player Unity.
- `Editor/` : outils Editor, GAMA Panel, inspectors, preview, import helpers.
- `Samples~/` : scenes et contenus optionnels importables depuis Package Manager.
- `Documentation~/` : documentation locale du package.

### Clarification GAMA / WebPlatform / Unity

La documentation explique maintenant que :

- GAMA est lance separement.
- `simple.webplatform` est lance separement.
- Unity ne se connecte pas directement a GAMA Server.
- Unity se connecte au middleware via WebSocket.

### Pages ajoutees ou ajustees

- Workflow de preview Unity :
  - `Generate Preview from GAMA`
  - configuration des especes
  - prefabs
  - couleurs
  - scale
  - offsets
  - visibilite
- Couleurs dynamiques pilotees par les attributs envoyes par GAMA.
- Role du package :
  ajouter l'integration GAMA/WebPlatform a un projet Unity existant ou vide.
- Version Unity de reference harmonisee en `Unity 6000.3.2f1`.

## Travail recent sur le SIMPLE Unity Plugin

### Objectif technique

Rendre coherent le comportement entre :

- la preview statique generee depuis GAMA dans l'Editor Unity ;
- le Play Mode connecte a `simple.webplatform` ;
- les reglages d'apparence faits depuis le GAMA Panel ;
- les reglages d'apparence faits depuis le Game Manager.

L'objectif concret est qu'une valeur d'apparence configuree une fois produise le meme
rendu en preview et en Play Mode.

## Problemes traites cote plugin

### 1. Lancement Play Mode

Probleme observe :

- Le Play Mode pouvait demarrer l'experiment GAMA de maniere instable.
- Unity pouvait reutiliser un ancien etat de player.
- Une ancienne selection ou un ancien player runtime pouvait polluer une nouvelle
  session.

Corrections :

- Identification plus claire du player runtime Unity.
- Ignorance des anciens etats Play Mode quand ils ne correspondent plus a la session
  courante.
- Stabilisation du reconnect Play Mode.
- Meilleure mise en pause de l'experiment quand Unity quitte le Play Mode.

### 2. Application directe des reglages d'apparence

Probleme observe :

- En Play Mode, modifier une espece depuis le Game Manager ne mettait pas toujours a
  jour les agents deja presents.
- Les agents gardaient parfois leur ancienne couleur, ancienne echelle ou ancienne
  visibilite.

Corrections :

- Refresh runtime immediat des agents existants quand une espece change.
- Reapplication de :
  - couleur ;
  - scale ;
  - prefab override ;
  - position offset ;
  - rotation offset ;
  - visibilite.

### 3. Separation entre edits runtime et preview sauvegardee

Probleme observe :

- Les modifications faites pendant le Play Mode pouvaient etre reutilisees dans la
  preview suivante.
- Cela rendait les previews suivantes incoherentes, car les donnees GAMA ne sont pas
  toujours lues exactement de la meme maniere d'une session a l'autre.

Corrections :

- Les changements faits en Play Mode restent temporaires.
- Ils ne deviennent pas automatiquement des defaults de preview.
- Les reglages Editor restent sauvegardes quand ils sont faits en Edit Mode.

### 4. Baseline d'import et bouton Reset

Probleme observe :

- Le bouton Reset pouvait restaurer un etat temporaire au lieu de revenir a l'etat
  importe depuis GAMA.

Corrections :

- Conservation d'une baseline stable au premier import.
- Reset vers l'apparence importee depuis GAMA :
  - couleur ;
  - scale ;
  - offsets ;
  - visibilite.

### 5. Etirement des nuages d'agents

Probleme observe :

- Certaines especes, par exemple `prey` ou `predator`, utilisent des capsules fallback
  quand la geometrie GAMA est trop petite, degeneree ou non exploitable comme polygone.
- L'ancien comportement pouvait placer le visuel dans un enfant decale, avec un parent
  place ailleurs.
- Quand l'echelle etait appliquee au mauvais niveau, Unity etirait tout le nuage
  d'agents au lieu d'agrandir chaque agent autour de sa propre position.

Regle mise en place :

- Chaque agent root est place sur l'ancre GAMA de l'agent.
- Les visuels fallback sont des enfants locaux places en :

  ```text
  (0, 0, 0)
  ```

- Le scale d'espece est applique a la racine de chaque agent.
- Le visuel fallback garde une taille locale de base stable.
- La preview Editor et le Play Mode suivent le meme modele.

### 6. Coherence des scales Preview / Play Mode

Probleme observe :

- Une meme valeur de scale pouvait donner deux tailles differentes entre la preview et
  le Play Mode.
- Dans certains cas, la preview appliquait l'echelle une fois sur l'agent root puis une
  deuxieme fois sur le fallback `Visual`.

Comportement attendu :

```text
prey = 3
predator = 3
vegetation_cell = 1
```

Ces valeurs doivent donner le meme rendu dans :

- la preview statique ;
- le Play Mode.

Correction :

- Application du scale au meme niveau dans les deux chemins.
- Alignement de la taille de base des fallbacks.
- Recalcul des fallbacks runtime quand les overrides changent pendant le Play Mode.

### 7. Diagnostics de spread

Des logs de diagnostic ont ete ajoutes pour comparer l'etendue attendue depuis les
coordonnees GAMA avec l'etendue visible dans Unity.

Prefixes utiles :

```text
[GAMA][PREVIEW][SPREAD]
[GAMA][PREVIEW][SPREAD][ACTIVE]
```

Ces diagnostics utilisent les `Renderer.bounds`, pas seulement les positions des
parents. Cela permet de detecter les cas ou les parents semblent corrects, mais ou les
objets visibles sont decales dans des enfants Unity.

## Checklist de validation conseillee

- Generer une preview depuis GAMA.
- Verifier que les agents apparaissent sous :

  ```text
  [GAMA] Static Experiment Preview
  ```

- Regler `prey` a `3`.
- Verifier que chaque prey grossit sans etirer tout le nuage.
- Regler `predator` a `3`.
- Verifier que chaque predator grossit sans etirer tout le nuage.
- Garder `vegetation_cell` a `1`.
- Verifier que la grille garde sa taille attendue.
- Lancer le Play Mode.
- Verifier que les agents runtime apparaissent sous :

  ```text
  [GAMA] Runtime Live Agents
  ```

- Comparer preview et Play Mode avec les memes valeurs de scale.
- Arreter le Play Mode.
- Regenerer une preview.
- Verifier que les modifications temporaires du Play Mode n'ont pas ete reutilisees
  comme defaults.

## Branche et commits cote plugin Unity

Branche de travail principale :

```text
fix/playmode-launch-appearance-sync
```

Cette branche a ensuite ete alignee avec `main` cote depot `SIMPLE-Unity-Plugin`.

Travaux inclus dans cette sequence :

- Fix du lancement Play Mode et du refresh runtime des apparences.
- Ignorance des anciens etats de player Play Mode.
- Overrides Play Mode rendus transitoires.
- Stabilisation du reconnect Play Mode et de la pause a la fermeture.
- Stabilisation de la completion de preview.
- Remplacement propre du cache preview pour `prey` / `predator`.
- Stabilisation du scaling des polygones en preview edit mode.
- Correction de l'etirement lie au scale des parents.
- Ajout de diagnostics de spread.
- Ancrage des fallbacks preview sur les racines agents.
- Alignement du scale fallback runtime avec la preview.
- Application du scale fallback preview sur les racines agents.

## Verification

Le site Docusaurus compile correctement avec :

```bash
npm run build
```

