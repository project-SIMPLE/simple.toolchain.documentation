# Installation and configuration of the web platform

With all dependencies downloaded, you are now ready to install the web platfom.

## Obtaining the web platform

There are two main ways of obtaining the web platform:

<details>
  <summary>**Method 1: Release Download (Recommended)**</summary>

Navigate to the SIMPLE web platform repository by following [this link](https://github.com/project-SIMPLE/simple.webplatform)<br/>
Click on "Releases" in the right sidebar<br/>
Download the latest stable release ZIP file<br/>



</details>


<details>
  <summary>**Method 2: Direct Repository Download**</summary>

1.Go to the repository homepage by following [this link](https://github.com/project-SIMPLE/simple.webplatform)<br/>
2.Click the green "Code" button <br/>
3.Select "Download ZIP" <br/>
:::warning
Ensure the "main" branch is selected before downloading <br/>
:::

</details>


## .env file
Before starting the application, make a copy of the .env.example file and rename it .env
This can be done manually by copy-pasting the file and reremoving the last extension, or by either of these commands:

<details>
<summary>macOS or Linux</summary>
```
cp .env.example .env
```
</details>
<details>
<summary>Windows</summary>
```
copy .env.example .env
```
</details>

:::tip
For more information on the .env file, check out the dedicated page by following [this link](docs\Technical\env_reference.md)
:::
-- --
# Initializing the application

For the application to work, you must download all of its modules. <br/>
To do this, open a terminal, and move to the root of the project, being the folder simple.webplatform

Then, enter the command:  

```bash
npm install
```
to install all the dependencies. This may take a while depending on your network's speed.

# Starting the application

Before starting the application, make sure that the Gama server is open and running.

Then, use the command:
```bash
npm start
```

You can then open your web browser of choice, and go to the address written written in your terminal.
by default, it should be ```localhost:8000``` 

You can now access the web platform, and control Virtual Universes directly from the web platform !