# rpg-planner
A open-source ideation website to assist worldbuilders, dm's and game masters with new ideas for settlements, wilderness and dungeon areas. Soon there will also be a feature which allows the user to add there ideas to the process. 

### Table of Contents

* [Description](#User_Story)
* [Purpose](#Purpose)
* [Usage](#Usage)
* [Installation](#Installation)
* [Instruction](#Instruction)
* [License](#License)
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Troubleshooting](#Troubleshooting)
* [Application](#Application)
* [Questions](#Questions)

### License
![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

### User_Story
The inspiration for this user story came from various social media posts that started with “I am new to D&D 5e and will be running my first game soon, any advice for running or building?”
 
### Purpose
My solution to this problem was to build an ideas web application which allows a user to share and upload their ideas for other individuals to use.   As a creative I thrive on discussing fictional ideas such as; are mosquitoes an insect variation of a vampire? At what point after death does a culture no longer consider a body sacred?  In asking and answering such questions a setting is built and the individual may want to publish but lack the skills or confidence for release in an alluring pdf format.  However, my site allows the user to publish as much information as they wish about parts their setting then renders the idea in a simple UI design.  

In doing so other users will be able to visit and view their work.

### Installation
If you just wish to use the deployed application please click the link below [Application](https://rpg-ideator.herokuapp.com/home)

If you are a developer Here is a list of the following, technologies and packages required for the application to run without issues locally.

Accounts will need to be created to be able to use certain features on your local server machine:
* Heroku
* MongoDB Atlas
* Auth0
* Github/Gitlab etc.

If you wish to download the repository and run locally the following programs will need to be installed on your local development computer/server:
* node.js
* mongoDB
* text editor
* Heroku CLI
* React
* Auth0

For the server-side/Backend the following node-modules are required:
* create-react-app
* express
* mongod
* mongoose
* path
* react

Node packages which are required for frontend to run are:
* http-proxy-middleware
* fontawesome
* axios
* auth0
* Material UI

### Instruction
If you are user and or developer who wishes to use the deployed application click the application link below which will take you to the deployed application.

Once the above is created, installed and setup you will require to start or connect to a preexisting MongoDB database for any information to render without any errors.  To do this simply run the settlement list file in the seeds file.  Cmd is node settlementSeedDB.  Which should seed your database.  Once this is done next return to root and startup the Port:3001 api server with node server.js.  Once this server is functioning cd into rpg-generator which is the client folder and type the command npm start.  This will start the react app on Port:3000 and open a new tab for localhost:3000.  

### Troubleshooting
If a database is not setup the pages were designed to act as their own component so if there is any major issue it will be isolated to the logic flow and import modules of those files.  


### Contribution:
This was a solo project undertaken by Timothy Forbes to understand how to construct a basic MERN stack application including user authentication with an internal array dataset for a random generator as well as understanding better how to plan out MVP phases and introduce what features when.



### Testing
Early in the development process console.log() was used to determine if the randomiser function was doing its job in the backend and relied heavily on react compiling as every keystroke would cause the react compiler to run its tests and would report any problems.  


### Application
Link to the deployed application [!Application](https://rpg-ideator.herokuapp.com/home)
Link to heroku dashboard site [!heroku](https://dashboard.heroku.com/apps/rpg-ideator)

### Questions

For any questions comments or concerns about this project and or future updates please send an email to timothy.forbes259@gmail.com