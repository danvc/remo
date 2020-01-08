# Welcome to RemoAI Platofm!
This is an platform designed and implemented as example for Open Vision Computer classification.

<img src="/public/remoai.gif?raw=true" width="100%">

### Running the platform
```
yarn install && yarn start
```

### Features
- Select the coordinates to be send to the OpenCV machine;
- Resize and move coordinates; 
- Enable or disable the coordinate;
- Delete a coordinate;


### Libraries used

- MultiCrops: A modified version of this project in order to allow some changes, like enable or disable a box, also, it gives you the coordinates of each element which will be used to be populated on OpenCV
- React: Because the facilities to manipulate DOM elements;
- Redux: To store and share data over the application;
- Reduxsauce: In order to minify unneeded code to while using Redux;
- Material-ui: To use styled components based in the Google Patern Material Design;

### Source code structure
- src
  - components: Structured folder for React components that represents the ramification for each context of the platform.
    - accounts
    - cropper
    - dashboard
    - editor
    - projects
    - utils: React components that are shared over the platform
  - store
    - reducers: Structured folder for Redux reducers and containers in order to share info over the app
      - cropper
      - editor
      
