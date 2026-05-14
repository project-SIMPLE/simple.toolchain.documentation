---
sidebar_position: 1
title: Install a Virtual Universe
description: How to download and install a Virtual Universe (VU) into the SIMPLE WebPlatform.
---

# Install a Virtual Universe

A **Virtual Universe (VU)** is a deployable simulation package. It consists of a GAML model, a `settings.json` descriptor, and (optionally) a pre-built Unity APK. The WebPlatform discovers VUs by scanning the `learning-packages/` directory for `settings.json` files.

---

## Download a Virtual Universe

1. Visit the [SIMPLE GitHub organization](https://github.com/project-SIMPLE).
2. Find a Virtual Universe repository.
3. Download the latest release ZIP or clone the repository.

---

## Install the Virtual Universe

1. Extract the ZIP (if applicable).
2. Move the folder into your learning packages directory.

The default location is `simple.webplatform/learning-packages/`.

:::info
This path is configured by `LEARNING_PACKAGE_PATH` in your `.env`. See the [.env reference](/webplatform/configuration) for details.
:::

### Expected directory structure

```
simple.webplatform/
├── learning-packages/
│ ├── flood-simulation/
│ │ ├── models/
│ │ │ └── FloodVR.gaml
│ │ ├── splash.png
│ │ └── settings.json ← required
│ ├── traffic-demo/
│ │ ├── models/
│ │ │ └── TrafficVR.gaml
│ │ └── settings.json ← required
│ └── ...
├── .env
├── package.json
└── ...
```

Each VU folder **must** contain a `settings.json` file. See [Virtual Universe settings reference](./settings) for the file format.

---

## Verify installation

1. Start (or restart) the WebPlatform.
2. Open `http://localhost:8000`.
3. The installed Virtual Universes appear in the simulation selector.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| VU not appearing | Verify the folder contains a valid `settings.json` |
| Wrong path | Check `LEARNING_PACKAGE_PATH` in `.env` |
| GAML file not found | Check `model_file_path` in `settings.json` — path is relative to the `settings.json` file |

---

## Next steps

- [Configure your VR headsets](/user/running-sessions/meta-quest/headset-config) for immersive sessions
- [Run a session](/user/running-sessions/operators) end-to-end
- [Understand the settings.json format](./settings)
