# Coding Train Node Demo

### Determmining your Node version (v18.18.2 is used in the tutorial)
`node --version`

## Creating a new Node project 

* Make a new Directory  
`mkdir coding-train-node-demo`

* Opening / Changing Directories    
`cd coding-train-node-demo`  - open the coding-train-node-demo directory  
`.` -  this current directory  
`..` - go back up a level  
`code .` - open up the VSC editor  

## Initializing a Node Project
`npm init`

The utility will walk you some questions--you can enter answers or just say yes.

## Node packages

[Node documentation](https://nodejs.org/docs/latest-v18.x/api/)

The [File System](https://nodejs.org/docs/latest-v18.x/api/fs.html) package can be used to access local files on your computer, and is part of node system.

## Importing packages 

* CommonJS module  
`const fs = require('fs');`

* ES module  
`import * as fs from 'fs'`

Note: to load an ES module you must edit the package.json file to set `"type": "module"`

## Finding Node Packages

* [npmjs](https://www.npmjs.com)

Some package I will be using:
* [discord.js](https://www.npmjs.com/package/discord.js)  
* [canvas](https://www.npmjs.com/package/canvas)  
* [cowsay](https://www.npmjs.com/package/cowsay)  

`npm install cowsay` or `npm i cowsay`

This will add the package to the package.json as a dependencies. It will also add a new directory called node_modules.

## Things to consider when you are looking for packages

* When was it created?
* Is it actively maintained?
* Look at Github repo - are there any recent commits?  
* [cowsay repo](https://github.com/piuccio/cowsay)

## Importing the cowsay package

* Importing everything from a package  
`import * as cowsay from 'cowsay'`

* Importing individual functions from a package  
`import { say } from 'cowsay'`

## Downloading and installing an existing Node project

[Discord-Bot-Examples](https://github.com/CodingTrain/Discord-Bot-Examples/)

You must install the dependencies for the project.  
`npm install`

## Downloading and installing the Coding Train website

[Livestream discussing installation of the Coding Train website](https://www.youtube.com/watch?v=mSDjPcHoMbg&t=1999s)

When updating the website, it is helpful to run the website locally in order to quickly see the changes made. Make sure you have Node.js version `18.x` installed and then perform the following steps:

1. Clone down the repo to your computer and `cd` into the folder
2. Run `npm install`
3. Run `npm run dev`

This will start a local server and the website will now be accessible on [localhost:8000](http://localhost:8000). Changes to most files will be auto-updated in the browser while the website is running.

**Note:** In some cases, specially when updating loaded content, you need to restart the local server with `npm run dev`.
And in some cases that may fail because of Gatsby's cache usage. If you run `npm run clean` before `npm run dev`, that should fix it.

