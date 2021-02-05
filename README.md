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

### Features
what and how I integrated it into the app.
Features of my application include, 
* Rendering five most recent ideas sent to the database in alphabetical order, 
* Random Generator of a town, 
* user able to add their own ideas to the database 
* user authentication.
* Collapsible Navbar

#### DB API's
The five most recent ideas is a API call to a mongoDB database linked to heroku via environment variable and renders the most recently sent ideas when a user sends a new idea to the database.

#### Town Generator
The town generator was the core idea of this project and is a tool which can be used by anyone to assist them in creating a unique setting, region or world.  As time goes on more ideas will be added and the project will be changed from something that meant project requirements to an idea renderer for different wilderness, environments and settings.  This feature also helped me to understand where to place internal data structures and API route middleware.  As the generator best worked when the API was called as that is one a single data value is selected from a randomiser and sent forward as an object, which is then rendered on a card.   

#### User Authentication
This is the first project which I needed to use user authentication and was the last feature added.  As a result this feature was tacked on to meet a project requirement.  However, due to how integral user authentication is this day and age I should have built my react app around this feature than proceed to the creation of the above features.  With what was happening outside of this project I missed this oversight. The method I used was Auth0 which was recommended by the project supervisor for its simplicity after reading documentation and watching tutorials was very easy to implement its basics.  Due to nearing the deadline a very simple login/logout button and a welcome {user.name} on a small message was the best that could be managed at this point. 

#### Collapsible Navbar
A mobile phone design approach was taken for the UI which incorporated a react tool called Material UI.  Through documetation and online tutorials a collapsible navbar and modbile interface was created.  As material UI works very well with Reat Hooks, State and Effect functions although once built can be difficult to attempt implementation of later features which is why it should be built in conjunction with notes for those features or as the last phase of development.  That is my experience if I were to build another application.

### Challenges
During the project I needed to have bereavement leave as a close family relative was on their deathbed.  As a result I needed to plan what was possible and what would motivate me to do this project in a reduced timeframe.   I started with creating data lists of fantasy race tropes, general events and types of government.  Writing those list files provided motivation and energy which I capitalised to reveiw MERN stack best practices and folder structures.  After planning out the folders, and files required I then pushed through development to release the deployed application.  The finished product is not what I originally envisioned but was the second deployed MVP with all the basic functions.  The next MVP from this would have had pictures and a better functioning user authentication system.

Another major challenge was deploying to heroku as crucial files were undefined, repeats of components required keys and warnings kept popping up saying heroku was not happy.  To solve this I used heroku tail logs to figure out what it was not happy with and debugged the issues one at a time.  As a result my code refactoring for handling errors in relation to the database was better as heroku was not happy with console.log(error).  It wanted to be told if the promise is rejected to display why.  To solve this I had to use Mongoose error rejection functions.  Which looked like the following: mongoose.connection.on('error', err => {console.log('Mongoose Default Connection Error : ' + err);});

After this unique keys were required and with how I set my schema and array filtering needed to spend time to change my schema into a more processable format due to inexperience of looping through object arrays.  Reason for this was each document in MongDB had an array of 1 to 4 objects in a races array and to render nicely this race array needed to be looped through and all undefined values removed.  Due to the amount of problems this was causing the easiest solution to have it working was to modify for a majority race with a other information where minority races or ethnicities can be listed.  

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