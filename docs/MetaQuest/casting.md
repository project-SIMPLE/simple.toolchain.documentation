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

This 

Allow adb 

https://www.virtu-al.net/wp-content/uploads/2019/11/com.oculus.vrshell-20191111-141155-768x768.jpg

### Meta Quest 2

```
scrcpy --tcpip=<IPv4.ADDRESS.OF.HEADSET> --crop <CROP:VALUE:TO:DISPLAY> --stay-awake --disable-screensaver --no-audio --video-codec=h265 --max-fps=30
```

Crop

-> round view

-> (cutted) Full screen
1632:1220:100:320

### Meta Quest 3

```
scrcpy --tcpip=<IP.ADDRESS> --crop 2064:2208:2064:0 --stay-awake --disable-screensaver --no-audio --video-codec=h265 --max-fps=30
```

:::info
If you're running system on Linux, by default scrcpy is running on `x11`. To enable wayland support, you should set the envrionment variable `SDL_VIDEODRIVER=wayland`
:::