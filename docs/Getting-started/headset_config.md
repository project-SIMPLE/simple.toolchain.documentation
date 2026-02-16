# Configurating the headsets
-- --
The web platform uses the headsets IP to determine what color they are, and which one to use for the icons in the simulation control page and the border surrounding the video streams.
Therefore, these IP must be fixed.

## configuration of the network settings

Go to settings → arrow to the right of your wifi → edit → advanced 

- set IP to static <br/>
- set ```private mac``` to no, ```proxy``` to no, ```hidden network``` to no <br/>
- set the IP to ```192.168.68.x``` choose x by referring to [the headsets_color constant](docs\Technical\constants.md) in the constants file page to choose a specific color. the application will render a gray border by default if the IP is not contained in headsets_colors.<br/>
- set the gateway to ```192.168.68.1```<br/>
- set the network prefix length to ```24```

- set the dns 1 to ```1.1.1.1 dns```  <br/>
- set the dns 2 to```1.0.0.1```<br/>

-- --

:::tip
If you encounter issues such as your headset disconnecting from your network, check out the page dedicated to trouble shooting [here](docs\Tools\MetaQuest\troubleshooting.md)
:::

## Enabling wireless ADB

In order for the web platform to be able to directly interact with the headsets over the wifi, you will need to enable wireless ADB.

To do this, you can use the application Oculus Wireless ADB, available at [this link](https://github.com/thedroidgeek/oculus-wireless-ADB/releases/tag/1.3).

### installing Oculus Wireless ADB on the headset

download the ```.apk``` file on your computer, then connect your headset to your computer. 

If you do not have ADB properly configured, refer to [the instructions on this page](01-getting_started.md#ADB-installation-instructions)

If you have ADB installed and properly configured:

- plug your headset into your computer via USB
- open a terminal in the same folder as where you downloaded the ```.apk``` file
- use the following command to install the application into your headset:
```
adb install tdg.oculuswirelessADB-1.3.apk
```
```
adb shell pm grant tdg.oculuswirelessadb android.permission.WRITE_SECURE_SETTINGS
```

These commands will install the application on your headset, and give it permissions to open the android debug bridge on the headset.

:::tip
While not required, you can also open port 5555 of your headset to speed up its connection process to the web platform by using the following command:
```
adb tcpip 5555
```
:::

## Using Wireless ADB for the first time

:::warning
Before proceeding, make sure that only one headset is connected to your computer.
You can check if this is the case by using the command
```
adb devices
```
in your terminal.
If you see multiple devices, you can use the following command to disconnect every devices.
```
adb disconnect
```
Note that it will not break the usb connection.
:::

Once the installation is done, you can turn on your headset, and open the application.
You can find the application in
```Library → unknown sources → Oculus Wireless ADB```

Toggle the tcpip mode on, then turn on Wireless ADB by clicking on the main switch.

Congrats ! The application can now connect to the headset remotely.

:::tip 
If you want the application to automatically connect to your headset faster, add the IP address you set in the `HEADSETS_IPS` variable of the ```.env```configuration file.
more information on [this page](../Technical/env_reference.md#Headset_ips)
:::