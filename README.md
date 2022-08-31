# Word to Colors Generator

This app takes in a word (or a phrase) as input and shows you associated colors of the object that the word or phrase represents.

Link to app UI deployed on cloud - https://ragav-word-colors.netlify.app

Link to the API deployed on the cloud - https://word-colors-api.herokuapp.com

Link to API code - https://github.com/ryarasi/word-colors-api

# Basic info

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. using Node version v14.17.0.
- The project is built for deployment as a static site for network optimization using [Scully](https://scully.io/docs/learn/overview/)
- This project is integrated into CI via Netlify
- This project has been hosted on the cloud via Netlify at the link listed above
- This code repo is configured to automatically update the deployment via [Netlify's CI service](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
- For a closer look at the method used to achieve the backend functionality, visit the [API repo](https://github.com/ryarasi/word-colors-api)

# Notable packages

- [Scully](https://scully.io/docs/learn/overview/) - used for converting our Angular app into a static site, needed to deploy our Angular app to the cloud using JAMstack
- [Angular Material](https://material.angular.io/) - Used for tooltips and clipboard feature
- [ngneat/hot-toast](https://ngneat.github.io/hot-toast/) - Used to show the toast messages when color codes are copied to clipboard

# Methodology

- When you enter the word, we send a GET request to the [API](https://github.com/ryarasi/word-colors-api) with the search term, and in the response we get an array of upto 10 image urls along with an array of dominant colors for each of those images.
- The API has means to access the Google Custom Search API, which it uses to search for images for the query.
- When the images return, we use the [Ximilar API](https://www.ximilar.com/all-services/) package to get an array of dominant colors as hex codes.
- The API then neatly organizes the image links and the dominant colors for each image into a JSON and sends it back.
- Finally based on the response, we present a masonry grid with the first dominant color in the array overlaid on top of the image.
- The user has the additional option to click on the "Not satisfied?" option to switch to a possible secondary color chosen as the dominant color, although the first color tends to be the most accurate most often.
- The user also has the means to toggle the images on, to see which image the suggested color was obtained from.
- Note that safe search is activated, so any NSFW terms may potentially not lead to any results

# How to run this app on your local machine

- Download the code of this repository to your local machine
- Make sure you've got Node v14 installed. Use the specific version above to avoid potential compatibility issues. [Instructions](https://nodejs.org/en/download/)
- Install Angular CLI globally [Instructions](https://nodejs.org/en/download/)
- Open the terminal and change directory into the code directory and type `npm install` to install all the necessary dependencies
- Once all the dependencies are installed, type `npm start` to run the project locally. The application will be served at http://localhost:4200/ by default.
- Make sure to also run the API application in your local machine for it to work properly.

# How to deploy this to the cloud via Netlify

- Create your [Netlify](https://www.netlify.com/) account if you don't have one already
- Sign into your account and create a new project. You can either upload your fields directly or connect your Git account (GitHub or GitLab). The latter is preferred.
- Once you connect your account, select the repo of this project. You must have already pushed this repo to your account.
- While setting up the repo, you will be asked to set the `publish directory`and `build command`. Use `dist/static/` and `build:production` respectively.
- Once this is set, you can either manually trigger deploys or alter the settings to enable automatic deployments when changes are pushed to a specific branch.[Detailed instructions](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
