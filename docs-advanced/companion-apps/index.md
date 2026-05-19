---
title: Companion Apps
sidebar_label: Overview
sidebar_position: 0
description: Android apps automatically installed on Meta Quest headsets by the SIMPLE WebPlatform.
---

# Companion Apps

The WebPlatform automatically installs and maintains two Android apps on every connected Meta Quest headset. Both are managed by `HeadsetSetup` in the WebPlatform backend: the bundled APKs are pushed via ADB on each connection, version-checked, and updated automatically if outdated.

Both apps require the `android.permission.WRITE_SECURE_SETTINGS` permission, which is granted via `pm grant` over ADB — it cannot be self-granted.

| App | Package | Purpose |
|---|---|---|
| [Oculus Wireless ADB](./oculus-wireless-adb.md) | `tdg.oculuswirelessadb` | In-headset GUI for toggling wireless ADB on/off |
| [ADB Auto-Enable](./adb-auto-enable.md) | `eu.project_simple.adbautoenable` | Watchdog service that keeps wireless ADB enabled persistently across reboots, sleep, and network changes |

The APK files are stored in the `toolkit/` directory alongside the WebPlatform executable.

:::note
One package is actively removed if found: `com.tpn.adbautoenable` conflicts with `eu.project_simple.adbautoenable` and is uninstalled automatically.
:::
