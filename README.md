# ColorWords

This app takes in a word as input and shows you associated colors of the object that the word represents.

# Basic info:-

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. using Node version 14.
- The UI components were styled with [And Design](https://ant.design/)

# Notes about the methodology:-

- When you enter the word, we fetch a few images from Google images
- These images are fed to imagga's Color API which scans the images and presents us with 5 colors associated with each image
- Finally based on the colors shown, we present a masonry grid where the size of a color tile represents the frequency of the color's occurence in the images
