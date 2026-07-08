---
sidebar_position: 1
title: "Tutorial Introduction"
sidebar_label: "Introduction"
description: Step-by-step tutorial for using the SIMPLE Unity Plugin with GAMA.
---

# Tutorial: From GAMA Model to Virtual Universe

This tutorial walks through building a complete VR simulation from an existing GAMA model. Starting from the prey and predator model in the GAMA library, you will generate a VR version using the SIMPLE wizard, set up the Unity scene, and add player interactions.

## What you will build

The goal is to start from an empty Unity project, run a live GAMA experiment in
Play Mode, then introduce the Unity Editor preview as a faster way to inspect
and tune the scene before running the live simulation again.

The result is a VR prey and predator simulation where a population of preys and predators navigates through a grid descretised by a food value that changes its color aspect. 

It demonstrates:

- Generating a VR GAML model from an existing model using the SIMPLE wizard
- Configuring the Unity project to receive GAMA geometry data
- Edditing  agent aspects in Unity Play and Edit mode
- Adding dynamic coloring on agents
- Adding player interactions that affect the running simulation

## Helping us by testing 

To guide your tests and evaluate the quality of the work, you can use [this Google Doc](https://docs.google.com/document/d/1fPcmjtJquJbMmZKtB6mw8tOPI5hL0mz_csZuU4jNMgs/edit?usp=sharing) as a reference throughout the tutorial. It will help ensure that everyone evaluates the code and documentation using the same criteria, while also allowing you to share your feedback and suggestions in a structured way.


## Steps
0. [Overview and requirements.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/00-Middleware%20and%20GAMA%20Requirements.md)
1. [Install the Unity package.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/01-Tutorial.md)
2. [Run the experiment in Unity Play Mode to validate the basic live workflow.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/02-Tutorial.md)
3. [Personalize agents during Play Mode.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/03-Tutorial.md)
4. [Generate an Editor preview and configure species visual parameters.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/04-Tutorial.md)
5. [Drive dynamic visual properties from GAMA runtime attributes.](https://github.com/project-SIMPLE/simple.toolchain.documentation/blob/simple-unity-plugin/docs/07-tutorials/05-Tutorial.md)
