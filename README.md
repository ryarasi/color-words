# ColorWords

This app takes in a word as input and shows you associated colors of the object that the word represents.

Link to project - https://ragav-word-colors.netlify.app/

# Basic info:-

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. using Node version v14.17.0
- The UI components were styled with [And Design](https://ant.design/)
- The project is built for deployment as a static site for network optimization using [Scully](https://scully.io/docs/learn/overview/)

# Notes about the methodology used:-

- When you enter the word, we fetch a few images from Google images
- These images are fed to imagga's Color API which scans the images and presents us with 5 colors associated with each image
- Finally based on the colors shown, we present a masonry grid where the size of a color tile represents the frequency of the color's occurence in the images

# How to build this app

- Download the code of this repository to your local machine
- Make sure you've got Node v14 installed. [Instructions](https://nodejs.org/en/download/)
- Install Angular CLI globally [Instructions](https://nodejs.org/en/download/)
- Open the terminal and change directory into the code directory and type `npm install` to install all the necessary dependencies
- Once all the dependencies are installed, type `npm start` to run the project locally
- This project has been hosted on the cloud via Netlify at the link listed above
- This code repo is configured to automatically update the deployment via [Netlify's CI service](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
