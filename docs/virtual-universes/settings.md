---
title: Virtual Universe settings.json
sidebar_label: settings.json Reference
sidebar_position: 1
description: Reference for the settings.json file that describes a Virtual Universe to the WebPlatform.
---

# Virtual Universe `settings.json` Reference

Every Virtual Universe (VU) folder must contain a `settings.json` file at its root. The WebPlatform reads this file to register the VU in the simulation selector and to know which GAML model and experiment to launch.

---

## Single-model configuration

```json
{
 "type": "json_settings",
 "name": "Quang Binh Flood Simulation",
 "splashscreen": "./splash.png",
 "model_file_path": "./models/FloodingVR.gaml",
 "experiment_name": "Launch",
 "minimal_players": "1",
 "maximal_players": "6"
}
```

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Must be `"json_settings"` for a single model. |
| `name` | string | Yes | Display name shown in the simulation selector. |
| `splashscreen` | string | No | Path to a preview image (PNG recommended). Shown as a thumbnail in the selector. If omitted, a placeholder is shown. |
| `model_file_path` | string | Yes | Path to the `.gaml` file. Relative paths are resolved from the location of `settings.json`. |
| `experiment_name` | string | Yes | Name of the GAMA experiment to launch (must match the `experiment` declaration in the `.gaml` file). |
| `minimal_players` | string | Yes | Minimum headset count suggested for this simulation (informational, not enforced). |
| `maximal_players` | string | Yes | Maximum player count (informational, used for display in the admin UI). |
| `selected_monitoring` | string | No | Display mode hint. `"gama_screen"` or `"shared_screen"`. Currently unused. |

### Path resolution

All paths (`splashscreen`, `model_file_path`) are resolved relative to the `settings.json` file itself — not relative to the WebPlatform root. Absolute paths are accepted.

Example:

```
learning-packages/
└── flood-simulation/
    ├── settings.json ← "model_file_path": "./models/FloodVR.gaml"
    ├── splash.png ← "splashscreen": "./splash.png"
    ├── models/
    └── FloodVR.gaml
```

---

## Catalog configuration

When you have many simulations, a `catalog` groups them into a collapsible folder in the simulation selector. Catalogs can be nested.

```json
{
  "type": "catalog",
  "name": "Mekong Flood Scenarios",
  "splashscreen": "./catalog-splash.png",
  "entries": [
    {
      "type": "json_settings",
      "name": "Quang Binh",
      "model_file_path": "./quang-binh/models/FloodVR.gaml",
      "experiment_name": "Launch",
      "minimal_players": "1",
      "maximal_players": "6"
    },
    {
      "type": "json_settings",
      "name": "Mekong Delta",
      "model_file_path": "./mekong/models/FloodVR.gaml",
      "experiment_name": "Launch",
      "minimal_players": "2",
      "maximal_players": "6"
    }
  ]
}
```

### Catalog fields

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Must be `"catalog"`. |
| `name` | string | Yes | Display name shown as the folder label. |
| `splashscreen` | string | No | Optional thumbnail for the catalog folder. |
| `entries` | array | Yes | Array of `json_settings` objects or nested `catalog` objects. |

### Nested catalogs

```json
{
  "type": "catalog",
  "name": "All Simulations",
  "entries": [
    {
      "type": "catalog",
      "name": "Flood Scenarios",
      "entries": [ ... ]
    },
    {
      "type": "json_settings",
      "name": "Traffic Demo",
      ...
    }
  ]
}
```

---

## Scanning behavior

The WebPlatform scans the root of each directory configured in `LEARNING_PACKAGE_PATH` and `EXTRA_LEARNING_PACKAGE_PATH`. For each immediate subdirectory that contains a `settings.json`, the file is parsed. Subdirectories without a `settings.json` are ignored.

```
learning-packages/
├── flood-sim/
│   └── settings.json ← scanned
├── traffic/
│   └── settings.json ← scanned
└── archived/ ← ignored (no settings.json)
```

The scan is performed once at startup. Restart the WebPlatform to pick up newly added VUs.
