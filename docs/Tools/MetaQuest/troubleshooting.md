# Troubleshooting

By design, Meta Quest headsets are based on Android systems. Therefore, the headsets mimic the behavior of a typical Android smartphone, and most of the issues you encounter may stem from this.

## Headsets Keep Disconnecting from Wi-Fi

By default, headsets probe new networks they connect to by sending a ping and trying to detect a captive portal if there is one.

In the SIMPLE project, we're using dedicated private Wi-Fi that is disconnected from the internet, which causes the probing system to fail and prevents auto-connection of the headsets to these networks.

Luckily for us, it's possible to disable this behavior with the following commands:

```bash
# Disable captive portal probing
adb shell "settings put global captive_portal_detection_enabled 0"

# Set the probing URL to localhost to always get a positive response (in case it gets re-activated)
adb shell "settings put global captive_portal_server localhost"

# Disable captive portal mode
adb shell "settings put global captive_portal_mode 0"

# Restart headset (recommended)
adb reboot
```