# Casting headset

Here are the two main ways to display the live headset video on another screen.

In the context of SIMPLE, we recommend the **Offline casting** solution. Since the project is supposed to run offline in schools, it is the primary method. This approach is not affected by unstable internet connections and generally provides better streaming quality performance.

## Online casting

(this steps order is important to respect and follow)

1. Ensure the VR headset and the computer are on the same network
2. On the computer, open the website : https://oculus.com/casting
3. In the headset, enable the screen casting
  - In the sub menu, choose cast to `Computer`

## Offline casting

This method use the [scrcpy](https://github.com/Genymobile/scrcpy) project which can get video stream from ADB (Android Debug Bridge). Therefore, it's a little more complex to prepare, but allow offline and better quality stream.

### Activate Wireless ADB

The classical way is to plug a computer to the headset, allow USB connection inside the headset and run the command `adb tcpip 5555`.

![ADB enable screenshot](https://www.virtu-al.net/wp-content/uploads/2019/11/com.oculus.vrshell-20191111-141155-768x768.jpg)

Otherwise, a simplier way is to use a tool developed for this particular need and available as an APK to install inside the headset : [https://github.com/thedroidgeek/oculus-wireless-adb](https://github.com/thedroidgeek/oculus-wireless-adb/releases/tag/1.2)


### Start scrcpy stream

#### scrcpy v2.X

<details>
 <summary>Deprecated method, please prefer scrcpy v3</summary>

##### Meta Quest 2

```
scrcpy --tcpip=<IPv4.ADDRESS.OF.HEADSET> --crop <CROP:VALUE:TO:DISPLAY> --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --display-buffer=200 --video-codec=h265 --max-fps=20
```

Crop

-> round view

-> (cut) Full screen
```1632:1220:100:320```

##### Meta Quest 3

```
scrcpy --tcpip=<IP.ADDRESS> --crop 2064:2208:2064:0 --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --display-buffer=200 --video-codec=h265 --max-fps=20
```

:::info
If you're running system on Linux, by default scrcpy is running on `x11`. To enable wayland support, you should set the envrionment variable `SDL_VIDEODRIVER=wayland`
:::

</details>

#### scrcpy v3.X

This new major release introduced a new feature to angled the point of view in the headset. Therefore it's possible to use this command to achieve a almost similar view as the online streaming :

```
scrcpy --tcpip=<IP.ADDRESS> --angle 20 --crop 1508:1708:300:200 --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --video-buffer=200 --video-codec=h265 --max-fps=20
```
