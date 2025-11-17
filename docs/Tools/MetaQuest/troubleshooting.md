# Troubleshooting

By design, Meta Quest headsets are based on Android systems. Therefore, the headsets mimic the behavior of a typical Android smartphone, and most of the issues you encounter may stem from this.

## Headsets Keep Disconnecting from Wi-Fi

By default, headsets probe new networks they connect to by sending a ping and trying to detect a captive portal if there is one.

In the SIMPLE project, we're using dedicated private Wi-Fi that is disconnected from the internet, which causes the probing system to fail and prevents auto-connection of the headsets to these networks.

Luckily for us, it's possible to disable this behavior with the following commands:

```bash
#
# Probing
# 

# Disable captive portal probing
$ adb shell "settings put global captive_portal_detection_enabled 0" 

# Set the probing URL to localhost to always get a positive response (in case it gets re-activated)
$ adb shell "settings put global captive_portal_server localhost"
$ adb shell "settings put global captive_portal_https_url https://localhost"
$ adb shell "settings put global captive_portal_http_url http://localhost"

# Disable captive portal mode
$ adb shell "settings put global captive_portal_mode 0"

#
# Chosing WiFi
# 

# Increase WiFi RSSI polling interval (less aggressive)
# Another layer to disable WiFi monitoring that might cause disconnections
$ adb shell "settings put global wifi_watchdog_on 0"

# Disables the WiFi watchdog that monitors poor network quality
$ adb shell "settings put global wifi_watchdog_poor_network_test_enabled 0"

# Disable network recommendations
$ adb shell "settings put global network_recommendations_enabled 0" 

# Disable automatic network switching
$ adb shell "settings put global network_avoid_bad_wifi 0"

# Disable hotspot 2.0 (Passpoint)
# Disables automatic connection to Passpoint networks (carrier WiFi networks)
$ adb shell "settings put global wifi_passpoint_enabled 0"

#
# Stay connected
# 

# Prevent WiFi to disconnect when the screen is off
$ adb shell "settings put global wifi_sleep_policy 2" 

# Keeps the screen on while charging
$ adb shell "settings put global stay_on_while_plugged_in 3"

# Disable background data restriction enforcement
$ adb shell "settings put global wifi_enhance_network_while_sleeping 0"

# 
# Misc
# 

# Disable automatic system updates
$ adb shell "settings put global ota_disable_automatic_update 1"

# Restart headset (recommended)
$ adb reboot
```
