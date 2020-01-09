# Welcome to RemoAI Platofm!
This is an platform designed and implemented as example for image labeling and annotation for Open Vision Computer classification.

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

### Next steps
- [ ] Create the credential and registration page
- [ ] Create the "New project" view
- [ ] Create the categorization view
- [ ] Create the database structure in order to allow the user create a project
- [ ] Create the tables structures in order to allow the user categorize in dynamic ways
- [ ] Expose an API with the encapsulated methods to create the project and initiate the image labelling

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
      
