# Troubleshooting

By design, Meta Quest headsets are based on Android systems. Therefore, the headsets mimic the behavior of a typical Android smartphone, and most of the issues you encounter may stem from this.

## Headsets Keep Going to Sleep

If the headsets keep going to sleep, you may go into the **settings** of the headset.
Go into **Settings app** → **General** → **Power**, and set **Display off** to 4 hours, and **sleep mode** to 4 hours. 

This will prevent the headsets from going to sleep. 
:::note
You may still manually turn off the screen of the headset by briefly pressing the "**power**" button on its side.
:::


## Headsets Keep Disconnecting from Wi-Fi

By default, headsets probe new networks they connect to by sending a ping and trying to detect a captive portal if there is one.

In the SIMPLE project, we're using dedicated private Wi-Fi that is disconnected from the internet, which causes the probing system to fail and prevents auto-connection of the headsets to these networks.

Luckily for us, it's possible to disable this behavior with the following commands:

<details>
<summary> **All in one command** </summary>

You can use the following command in your terminal to apply all the settings simultaneously:

```bash
adb shell "settings put global captive_portal_detection_enabled 0" && adb shell "settings put global captive_portal_server localhost" && adb shell "settings put global captive_portal_https_url https://localhost" && adb shell "settings put global captive_portal_http_url http://localhost" && adb shell "settings put global captive_portal_mode 0" && adb shell "settings put global wifi_watchdog_on 0"  && adb shell "settings put global wifi_watchdog_poor_network_test_enabled 0" && adb shell "settings put global network_recommendations_enabled 0" && adb shell "settings put global network_avoid_bad_wifi 0" && adb shell "settings put global wifi_passpoint_enabled 0" && adb shell "settings put global wifi_sleep_policy 2"  && adb shell "settings put global stay_on_while_plugged_in 3" && adb shell "settings put global wifi_enhance_network_while_sleeping 0" && adb shell "settings put global ota_disable_automatic_update 1"
```
</details>





### Probing
--- ---
<br/>

#### Disable captive portal probing
```bash
adb shell "settings put global captive_portal_detection_enabled 0" 
```
<br/>

#### Set the probing URL to localhost to always get a positive response (in case it gets re-activated)

```bash
adb shell "settings put global captive_portal_server localhost"
```
```bash
adb shell "settings put global captive_portal_https_url https://localhost"
```
```bash
adb shell "settings put global captive_portal_http_url http://localhost"
```
:::tip 
you can use this command to apply all of these at once:
```bash
adb shell "settings get global captive_portal_server" && adb shell "settings get global captive_portal_https_url" &&  adb shell "settings get global captive_portal_http_url" 
```
:::

#### Disable captive portal mode
```bash
adb shell "settings put global captive_portal_mode 0"
```

### Choosing WiFi

--- ---
#### Increase WiFi RSSI polling interval (less aggressive)
```bash
adb shell "settings put global wifi_watchdog_on 0"
```

#### Disables the WiFi watchdog that monitors poor network quality
```bash
adb shell "settings put global wifi_watchdog_poor_network_test_enabled 0"
```
#### Disable network recommendations
```bash
adb shell "settings put global network_recommendations_enabled 0" 
```

#### Disable automatic network switching
```bash
adb shell "settings put global network_avoid_bad_wifi 0"
```


###   Disable hotspot 2.0 (Passpoint) 
#### Disables automatic connection to Passpoint networks (carrier WiFi networks)
```bash
adb shell "settings put global wifi_passpoint_enabled 0"
```

### Staying connected
 

#### Prevent WiFi from disconnecting when the screen is turned off
```bash
adb shell "settings put global wifi_sleep_policy 2" 
```
#### Keep the screen on while charging
```bash
adb shell "settings put global stay_on_while_plugged_in 3"
```

#### Disable background data restriction enforcement

```bash
adb shell "settings put global wifi_enhance_network_while_sleeping 0"
```

### Verification of the settings
To check if the settings are correctly applied to the headset, use the following command:

```bash

adb shell "settings get global captive_portal_detection_enabled" && adb shell "settings get global captive_portal_server " && adb shell "settings get global captive_portal_https_url" && adb shell "settings get global captive_portal_http_url" && adb shell "settings get global captive_portal_mode" && adb shell "settings get global wifi_watchdog_on" && adb shell "settings get global wifi_watchdog_poor_network_test_enabled" && adb shell "settings get global network_recommendations_enabled" && adb shell "settings get global network_avoid_bad_wifi" && adb shell "settings get global wifi_passpoint_enabled" && adb shell "settings get global wifi_sleep_policy"  && adb shell "settings get global stay_on_while_plugged_in" && adb shell "settings get global wifi_enhance_network_while_sleeping" && adb shell "settings get global ota_disable_automatic_update"

```
The output of this command must be:
```bash
0
localhost
https://localhost
http://localhost
0
0
0
0
0
0
2
3
0
1
```


### Misc


#### Disable automatic system updates
```bash
adb shell "settings put global ota_disable_automatic_update 1"
```
#### Restart headset (recommended)
```bash
adb reboot
```