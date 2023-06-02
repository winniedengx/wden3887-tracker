# wden3887-tracker
#Project Title 

The Healthier Option


#Project Description 


The aim of this project is to allow young audiences between the age of 21-25 years old achieve a healthier lifestyle through tracking their calories, reflecting on meal choices, and finding healthier recipes recommended by the application. Building this web application was motivated the popularity within society where individuals want to achieve their fitness goals through healthy, diet eating. Social media has also contributed to this motivation because food posts shared by influencers allows individuals to understand what type of food is now trendy to eat, influencing more users to find applications that help with this goal. The problem that this project aims to solve is losing track of the amount calories eaten and meals consumed throughout the week. 


#Application Configuration and Deployment Procedures 


This project can be accessed through Github. As a public repository, future edits and contributions can be made by viewing my project in the link down below:

 https://github.com/winniedengx/wden3887-tracker.git 

A basic backend server needs to be set up using Node.js and Express: 
1)	Sign into Github and create a new repository that includes a README file and the ‘Node’.gitignore template 

2)	In VS code use the command to stage the new file:

git add test.html

3)	Commit changes and these files to the repository and start adding files 

git add .
git push

4)	Install Node.js by running the following command in the root directory of your git folder in the VS Code terminal

npm init

5)	Create folder structures for a web app that includes server.js, index.html, style.css and script.js 

6)	Add, commit and push changes to github using:

initial commit

7)	Use the VS Code terminal to run the following command in the root directory of your project folder: 

npm install express

8)	In the ‘server.js’ file, import the express package using the following code:

const express = require(‘express’);

9)	Initialise the express framework: 

const app = express();

10)	Serve static files from the public folder: 

app.use(express.static(‘public’));

11)	Serve the index file for the root (“/”) path:

app.get(‘/’ , function(req, res) {
res.sendFile(_ _dirname + ‘/public/index.html’)
})

12)	Start logging a message to the console to start the server 

let server = app.listen(8888, function() {
console.log(“App server is running on port 8888”);
});

13)	In the terminal, run the server using the command:

node server.js

14)	Add a new property in the ‘package.json’ file:

“scripts”: {
“start”: “node server.js”
}.

15)	Finally, start the web server by using the command:

npm run start


#Development process 

The development of the application was based off the mock up designs that outlined the key features I wanted to include, incorporation of design trends and the aesthetic that I aimed to achieve. 

Firstly, a local git repository was made by installing Git on my computer. VSCode was also downloaded as it was the recommended code editor. A public repository was created, including a README file and also adding the ‘Node’ .gitignore template. After installing Git, I then created a basic backend server setup for this project using node.js and Express. Secondly, I set up a parcel by calling npm install and changing file paths in the package.json file and server.js. To test that the parcel was installed, I ran “npm run dev”. Lastly, I installed the SASS package to setup SCSS. This is because SCSS consists of more advanced features that enables greater functionality of the application and runs the code load faster. 

Design of the front page: 

![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Design 1.png)

Design of pop up page for when users add their meals: 

![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Design 2.png)

Design of pop up for when users view their meal history:
![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Design 3.png)

Design of pop up for recipes:
![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Design 4.png)


Development of the code order: 
•	Placing banner in its position of the web 
•	Adding headings eg. Track your healthy eating, recommended recipes 
•	Importing images of the recipes and placed them in a row
•	Pop-ups for recipes including Javascript code and the styling of text and images 
•	Adding the 7 day calendar 
•	Pop up page for meal entries, using Javascript and storing the data using LocalStorage 
•	Creating the “Show Past History” pop up 

#Iterations and Improvements

Reflecting on assignment feedback from the tutor, many iterations and improvements were made to address the design brief and purpose of this task. Some feedback I received was that my scope was too far reaching as filtering and search functionality are not needed. Hence, from the previous designs I have shown above an iteration, removing dietary requirement icons, the search bar and buttons to filter content. The “List of unhealthy foods” pop up was also removed because provides users with information rather than tracks their input. 


Further, comments were made that my application needed a larger focus on user tracking as the idea before provided ways to share recipes and track what dishes users have eaten. This led to an improvement in my application where I changed the focus of my app to calorie tracking. Users can still log dishes they have eaten throughout the week, but the calories of each meal entered in the history will move the calorie progress bar at the top of the page. I have also added a requirement that a calorie goal is to be set before users begin logging their meals. A button ‘I ate this today’ has been added in each recipe pop up to further enhance the purpose of the application. When users click on this, calories of that specific meal will be logged into their meal history affecting the above calorie progress bar. 



![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Iteration 1.png)



![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Iteration 2.png)




Improvements in the pop up of meal entries were made to narrow the scope of the application, focusing on just main meals rather than extending options to log snacks and drinks consumed. Users are also required to enter the calories of each meal they had in that pop up. The user input gets retrieved and stored as data to increase the calorie progress bar. The title of the pop up also changed from “Day #” to “Meals of the day” to reduce the complexity of the application and provide a familiar everyday interface. 



![Alt Text](/Users/a61490/Library/CloudStorage/OneDrive-TheUniversityofSydney(Students)/Uni Documents/Advanced Web Design/Assignment/wden3887-tracker/Iteration 3.png)




The 7-day calendar has also been iterated as reflecting on tutor feedback, only being able to access meal entries unless the previous day has been logged seems unmotivating for users to use. Hence, meal entries can be logged in any order with each day being labelled as “day 1”, “day 2”, “day 3” and etc to increase a comprehensive application. Hover effects were added to the day buttons to highlight user interaction, changing from the nude colour to pale green. 

To further incorporate the feedback of limiting the application scope, I reduced the number of recipes recommended to users, showing just the most popular ones. 

Lastly, the final improvement can be seen in the typographic choices. From the feedback I got in the previous assignment, my design choices were outdated and needed improvement to achieve a modern aesthetic. I changed the font to sans-serif as it provides a casual, informal feeling and that is also easy to read on all devices. 

#Challenges 

The coding challenges that I was faced include:

•	Not being able to display a progress bar that increases when users enter the calorie intake. The progress bar has been hidden using display: none as I could not get the progress to work when I enter calories in a separate input field. To represent this feature of the application, I included the image of what the progress bar should look like when calories have been entered.
•	Could not get users to view their past meals. To demonstrate this feature, the data that gets sent through when users log their meals (<pre></pre>) is presented in the “Show Past History” pop up. 
•	Struggled with deleting meals users logged by clicking on the “delete” button in “Show Past History” pop up. I tried to mimic this feature by displaying the content as none when the button gets clicked on. 
•	Could not style nutritional value text to align with the end of the visual bar 
•	Had trouble centering the servings and time image in recipe pop ups

#Guidance for Future Developers

Contribution to this project can be made by following brand guidelines of:
•	Colour palette: white, #F2D2BD, #C1E1C1 and black green
•	Font style: sans-serif 
•	Concept: tracking calories and meals eating to promote healthy eating

Further contribution by future developers can be through:
1.	Familiarising themselves with the existing codebase, understanding the current code structures, conventions and functionalities.
2.	Reviewing the existing code to identify ways to improve the performance, maintainability and scalability of the application. 
3.	Fixing bugs and issues discovered during user testing, improving user experience of the final application. 
4.	Staying up to date with modern technologies and design practices to ensure the web application is fits well within the contemporary society and uses all necessary features.
5.	Contributing to the documentation- updating and documenting code changes 

To improve and build upon my work, the styling features of the application should be focused on. This includes achieving consistent gaps between images and text, placing photos in appropriate areas of the webpage as well as, ensuring that styles are not affected by different screen widths. 

The features I hope to implement in the future is a functional delete and edit button that allows users to edit the meals and calories logged, as well as deleting this submitted information. Further, the feature of setting a calorie intake goal for the week would also enhance user engagement, creating an application that helps achieve user goals through the visualisation of how many calories are left until their limit is reached. Lastly, the “I ate this today!” button has an intended aim of logging the calories of that meal automatically to the calorie history when user clicks the button.


#Further Improvements or Extensions 

Further improvements of this application can be explored by creating a personalised interface that is based off meal and calorie history over time. Depending on the meals they have eaten and how many calories they usually consume, the recommended recipes can be altered to adapt to specific users who like certain cuisines or eat more calories than their intended goal. This project can stand out amongst its competitors by also including a feature that allows users to have cheat days where they do not need to log calories. Days can be blocked out depending on user preference to represent a cheat day.


#Credits 

Chris, K. (2021, August 16). HTML Button onclick- JavaScript Click Event Tutorial. https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/ 


EasyTutorials. (2022, March 9). How to Make A Popup Using HTML, CSS And Javascript|Create a Modal Box in HTML Website. 
https://www.google.com/search?q=how+to+make+a+pop+up+window+in+javascript&rlz=1C5CHFA_enAU1040AU1040&sxsrf=APwXEdeET9UQgATbdZwYEPFoQ4dP_VzG2w:1685588774950&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiK_qvBi6H_AhXl7zgGHZEcDxoQ_AUoAXoECAEQAw&biw=1470&bih=808&dpr=2#fpstate=ive&vld=cid:935b28e3,vid:AF6vGYIyV8M 


Griffith, S. (2019, February 5). Saving User Input in JS Objects. 
https://www.google.com/search?q=save+user+input+javascript&rlz=1C5CHFA_enAU1040AU1040&sxsrf=APwXEddyK4kSzstpkSRZ_stJ6zxgSgqTpQ:1685588818191&source=lnms&tbm=vid&sa=X&ved=2ahUKEwj8kPvVi6H_AhX7xTgGHbw-CF0Q_AUoAXoECAIQAw&biw=1470&bih=808&dpr=2#fpstate=ive&vld=cid:e8ff29fe,vid:NxVCq4p0Kb0 


NoorMaria. (2022, April 18). How to addEventListener to a button in popup content of ArcGIS API for JS. https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/how-to-addeventlistener-to-a-button-in-popup/td-p/1165242 


W3 Schools. (n.d). How TO- Align Images Side By Side. 
https://www.w3schools.com/howto/howto_css_images_side_by_side.asp 



W3 Schools. (n.d). How TO- JavaScript Progress Bar. 
https://www.w3schools.com/howto/howto_js_progressbar.asp 

 
