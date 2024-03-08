# Useful tools

## Manage Meta Quest

### Meta Quest Developer Hub (previously called *Oculus Developer Hub*)

:::info

Meta Quest Developer Hub (MQDH) is the official desktop companion application helping to streamline development on Meta Quest devices.

[Website](https://developer.oculus.com/meta-quest-developer-hub)

:::

- [Documentation](https://developer.oculus.com/documentation/unity/ts-odh/)

### SideQuest

![SideQuest logo](https://sidequestvr.com/assets/images/branding/Full%20logo%20-%20White.png)

:::info

SideQuest is a website and software to get more apps for standalone VR headsets like Oculus Quest, it is a completely safe way to enjoy some cutting edge content in VR and expand the capability of your standalone VR headset. It is a proving ground for developers to validate their content and kick start their communities. SideQuest is completely free for users and developers and always will be and is committed to supporting the VR industry.

[Website](https://sidequestvr.com/)

:::

:::tip

It is recommanded to download and use the [**Advanced Installer**](https://sidequestvr.com/setup-howto). It will not request to use an account and give some extra tools to manage the headset

:::

## Debug Meta Quest

### OVR metrics 

![OVR logo store](https://scontent.oculuscdn.com/v/t64.5771-25/38974823_413517489432110_529797951267012608_n.jpg?stp=dst-jpg_q92_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=79b88e&_nc_ohc=bzaPjbPde1cAX8yhXat&_nc_ht=scontent.oculuscdn.com&oh=00_AfDKRHWQ3I4-O2oRatPfOAWnmm6XQyJuGdPgsctQTujanA&oe=6520E62D)

- [Download from Meta Store](https://www.meta.com/experiences/2372625889463779/?ranking_trace=0_2372625889463779_QUESTSEARCH_e1b98db6-2489-40d6-b229-03ee03de735f)
- [Download stand-alone apk](https://developer.oculus.com/downloads/package/ovr-metrics-tool/)
- [Download from SideQuest](https://sidequestvr.com/app/17261/ovr-metrics-tool)

:::info

OVR Metrics Tool is a performance monitoring tool for Meta Quest headsets that provides various performance metrics, including frame rate, heat, GPU and CPU throttling values, and the number of tears and stale frames per second. 

[Documentation](https://developer.oculus.com/documentation/unity/ts-ovrmetricstool/)

:::

Every monitors are not available out-of-box and two commands have to be ran in the headset. To do so, it is recommanded to run `adb` command using SideQuest.

#### Enable memory (RAM) profiling

```
adb shell setprop debug.oculus.enableLifeMemoryProfiling 1
```

#### Enable GPU profiling

```
adb shell ovrgpuprofiler -e
```
