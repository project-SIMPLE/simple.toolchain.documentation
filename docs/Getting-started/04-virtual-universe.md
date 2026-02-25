---
sidebar_position: 4
---

# Install a Virtual Universe

Virtual Universes are 3D simulations that run on the GAMA platform. This guide explains how to install them.

## Download a Virtual Universe

1. Visit the [SIMPLE GitHub organization](https://github.com/project-SIMPLE)
2. Find a Virtual Universe repository
3. Download using either:
   - **Release** (recommended) - Pre-built stable version
   - **Direct Download** - Latest code from the main branch

## Install the Virtual Universe

1. Extract the downloaded ZIP file
2. Move the folder to your **learning package directory**

The default location is: `simple.webplatform/learning-packages`

:::info
This path is configured by `LEARNING_PACKAGE_PATH` in your `.env` file. See the [.env reference](docs/Technical/For-Developers/env_reference.md) for details.
:::

## Expected Structure

```
simple.webplatform/
├── learning-packages/
│   ├── virtual-universe-1/
│   │   └── settings.json
│   ├── virtual-universe-2/
│   │   └── settings.json
│   └── ...
├── .env
├── package.json
└── ...
```

<!-- TODO: Add screenshot of the learning-packages folder in a file explorer -->
<!-- Screenshot description: A file explorer (e.g. Windows Explorer or macOS Finder) showing the `learning-packages` directory inside the `simple.webplatform` folder, with two or three Virtual Universe sub-folders visible, each containing a settings.json file. -->

Each Virtual Universe must have a `settings.json` file in its root folder.

## Verify Installation

1. Start the web platform
2. Navigate to the Virtual Universe selector
3. Your installed Virtual Universes should appear in the list

<!-- TODO: Add screenshot of Virtual Universe selector -->
<!-- Screenshot description: The web platform's Virtual Universe selector dropdown or list showing 2-3 installed Virtual Universes (e.g., "Rac-VR", "Mekong Delta"). -->

## Troubleshooting

- **Virtual Universe not appearing?** Check that the folder contains `settings.json`
- **Wrong path?** Verify `LEARNING_PACKAGE_PATH` in your `.env` file

## Next Steps

- [Configure your VR headset](docs/Tools/MetaQuest/headset-config.md) for immersive viewing
- [Set up GAMA](docs/Tools/Gama.md) for advanced control
