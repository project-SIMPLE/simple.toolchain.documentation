# Configurating the headset
-- --
The web platform uses the headsets IP to determine what color they are, and which one to use for the icons in the simulation control page and the border surrounding the video streams.
Therefore, these IP must be fixed.

## configuration of the network settings

Go to settings → arrow to the right of your wifi → edit → advanced 

- set IP to static <br/>
- set ```private mac``` to no ```proxy``` to no ```hidden network``` to no <br/>
- set the IP to ```192.168.68.x``` choose x by referring to [the headsets_color constant](docs\Technical\constants.md) in the constants file page to choose a specific color. <br/>
- set the gateway to ```192.168.68.1```<br/>
- set the network prefix length to ```24```

- set the dns 1 to ```1.1.1.1 dns```  <br/>
- set the dns 2 to```1.0.0.1```<br/>

-- --

## Enabling wireless ADB

In order for the web platform to be able to directly interact with the headsets over the wifi, you will need to enable wireless ADB.

To do this, you can use the application Oculus Wireless ADB, available at [this link](https://github.com/thedroidgeek/oculus-wireless-ADB/releases/tag/1.3).

### downloading Oculus Wireless ADB

download the ```.apk``` file, then connect your headset to your computer. 

If you do not have ADB properly configured, refer to [the instructions on this page](01-getting_started.md#ADB-installation-instructions)

If you have ADB installed and properly configured:

- plug your headset into your computer via USB
- open a terminal in the same folder as where you downloaded the ```.apk``` file
- use the following command to install the application into your headset:
```
ADB install tdg.oculuswirelessADB-1.3.apk
```

:::tip
While you still have your headset connected to your computer, use the command 
```
ADB tcpip 5555
```
This command opens the port 5555 on your headset when ADB is enabled, making connection the we web application much faster.
:::

## Using Wireless ADB for the first time

Once the installation is done, you can turn on your headset, and open the application.
You can find the application in
```Library → unknown sources → Oculus Wireless ADB```

Toggle the tcpip mode on, then turn on Wireless ADB by clicking on the main switch.

Congrats ! The application can now connect to the headset remotely.

:::tip 

If you want the application to automatically connect to your headset faster, add the IP address you set in the ```HEADSETS_IPS``` variable of the ```.env```configuration file.
more information on [this page](../Technical/02-env_reference.md#Headset_ips)