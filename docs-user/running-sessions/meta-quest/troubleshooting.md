---
sidebar_position: 5
---

# Troubleshooting

Meta Quest headsets run on Android, so many issues are similar to Android smartphone problems.

## Headsets Keep Going to Sleep

If headsets keep going to sleep:

1. Go to **Settings** on the headset
2. Navigate to **General → Power**
3. Set **Display off** to 4 hours
4. Set **Sleep mode** to 4 hours

<!-- TODO: Add screenshot of headset power settings -->
<!-- Screenshot description: Meta Quest headset Settings → General → Power screen showing "Display off" and "Sleep mode" options set to 4 hours. -->

:::note
You can still manually turn off the headset screen by briefly pressing the power button.
:::

## Headsets Keep Disconnecting from WiFi

By default, headsets check for internet connectivity and captive portals. On isolated school networks without internet, this causes disconnection issues.

:::tip
The SIMPLE web platform automatically applies these WiFi settings every time it connects to a headset via ADB. It also corrects any settings that have been changed back, ensuring the headset stays connected to your isolated network.
:::

### Quick Fix (One Command)

Run this single command to apply all WiFi fixes:

```bash
adb shell "settings put global captive_portal_detection_enabled 0" && adb shell "settings put global captive_portal_server localhost" && adb shell "settings put global captive_portal_https_url https://localhost" && adb shell "settings put global captive_portal_http_url http://localhost" && adb shell "settings put global captive_portal_mode 0" && adb shell "settings put global wifi_watchdog_on 0" && adb shell "settings put global wifi_watchdog_poor_network_test_enabled 0" && adb shell "settings put global network_recommendations_enabled 0" && adb shell "settings put global network_avoid_bad_wifi 0" && adb shell "settings put global wifi_passpoint_enabled 0" && adb shell "settings put global wifi_sleep_policy 2" && adb shell "settings put global stay_on_while_plugged_in 3" && adb shell "settings put global wifi_enhance_network_while_sleeping 0" && adb shell "settings put global ota_disable_automatic_update 1"
```

Then restart the headset:
```bash
adb reboot
```

### What This Fixes

| Issue | Setting |
|-------|---------|
| Captive portal probing | Disabled |
| WiFi network switching | Disabled |
| Background network checks | Disabled |
| Auto-updates | Disabled |
| WiFi sleep policy | Stay connected |

<!-- TODO: Add screenshot of headset network settings -->
<!-- Screenshot description: Meta Quest headset WiFi settings showing the configured network with IP address 192.168.68.xx -->

### Verify Settings

After applying, verify with:

```bash
adb shell "settings get global captive_portal_detection_enabled"
```

Expected output: `0`

### Manual Configuration (Detailed)

<details>
<summary>Show individual commands</summary>

If you need to configure settings individually:

**Disable captive portal detection:**
```bash
adb shell "settings put global captive_portal_detection_enabled 0"
```

**Set probing URLs to localhost:**
```bash
adb shell "settings put global captive_portal_server localhost"
adb shell "settings put global captive_portal_https_url https://localhost"
adb shell "settings put global captive_portal_http_url http://localhost"
```

**Disable WiFi watchdog:**
```bash
adb shell "settings put global wifi_watchdog_on 0"
adb shell "settings put global wifi_watchdog_poor_network_test_enabled 0"
```

**Disable network recommendations:**
```bash
adb shell "settings put global network_recommendations_enabled 0"
```

**Prevent automatic network switching:**
```bash
adb shell "settings put global network_avoid_bad_wifi 0"
```

**Disable Passpoint:**
```bash
adb shell "settings put global wifi_passpoint_enabled 0"
```

**Keep WiFi connected:**
```bash
adb shell "settings put global wifi_sleep_policy 2"
adb shell "settings put global stay_on_while_plugged_in 3"
```

**Disable automatic updates:**
```bash
adb shell "settings put global ota_disable_automatic_update 1"
```

</details>
