---
sidebar_position: 2
title: Enable Developer Mode
description: Enable Developer Mode on a Meta Quest headset to allow sideloading and USB debugging.
---

# Enable Developer Mode

Developer Mode must be enabled on a Meta Quest headset before you can install the SIMPLE app via USB or wirelessly, or connect with ADB.

## Prerequisites

You need a Meta developer account. Create one for free at [developer.oculus.com](https://developer.oculus.com/).

## Steps

### 1. Create a developer organization (one time only)

1. Log in at [developer.oculus.com](https://developer.oculus.com/).
2. Go to **My Apps → Create New Organization**.
3. Accept the developer terms. The organization name does not matter.

### 2. Enable Developer Mode on the headset

**Using the Meta Quest mobile app (recommended):**

1. Install the **Meta Quest** app on your phone and pair it with your headset.
2. Open the app and tap **Menu → Devices**, then select your headset.
3. Tap **Headset Settings → Developer Mode**.
4. Toggle **Developer Mode** on.
5. Reboot the headset when prompted.

**Using the headset directly (Meta Quest 3 / Quest 3S):**

1. Put on the headset and go to **Settings → System → Developer**.
2. Toggle **USB Connection Dialog** on.

### 3. Authorize USB debugging

1. Connect the headset to your computer via USB-C.
2. Put on the headset — a dialog appears asking to allow USB debugging from this computer.
3. Tap **Allow**.

You can verify the connection is working:

```bash
adb devices
```

The headset should appear with status `device`. If it shows `unauthorized`, re-check the headset for the authorization dialog.

---

:::tip
Once Developer Mode is enabled, you can use **SideQuest** or **Meta Quest Developer Hub** to manage apps on the headset without re-entering Developer Mode. See [Useful Tools](./tools) for links.
:::

:::info
Developer Mode persists across reboots. You only need to enable it once per headset.
:::
