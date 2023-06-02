// Code for progress bar that allows users to set a weekly calorie goal and track their progress towards that goal by adding the number of calories they consume. The porgress is visually represented by updating the width of the progress bar element.
// W3 Schools. (n.d). How TO- JavaScript Progress Bar. https://www.w3schools.com/howto/howto_js_progressbar.asp 
var weeklyGoal;
var totalCalories = 0;

// Declaring variable (weeklyGoal): store the weekly calorie goal
// Retrieving values assigned to the 'weeklyGoal' variable to update the 'updateProgressBar' function
function setWeeklyGoal() {
    weeklyGoal = parseInt(document.getElementById("goal").value);
    updateProgressBar();
}

// Declaring 'totalCalories' variable will keep track of the total calories consumed and is initially set to 0
// This function is called when the value of the id, "calories" changes from the input field, retrieving the value to update the progress bar
function addCalories() {
    var calories = parseInt(document.getElementById("calories").value);
    totalCalories += calories;
    document.getElementById("calories").value = "";
    updateProgressBar();
}

// Calculating the progress towards the weekly goal and updates the width of the id, "progress"
function updateProgressBar() {
    var progress = (totalCalories / weeklyGoal) * 100;
    progress = Math.min(progress, 100); // Ensure the progress does not exceed 100%
    document.getElementById("progress").style.width = progress + "%";
}

// EasyTutorials. (2022, March 9). How to Make A Popup Using HTML, CSS And Javascript|Create a Modal Box in HTML Website. https://www.google.com/search?q=how+to+make+a+pop+up+window+in+javascript&rlz=1C5CHFA_enAU1040AU1040&sxsrf=APwXEdeET9UQgATbdZwYEPFoQ4dP_VzG2w:1685588774950&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiK_qvBi6H_AhXl7zgGHZEcDxoQ_AUoAXoECAEQAw&biw=1470&bih=808&dpr=2#fpstate=ive&vld=cid:935b28e3,vid:AF6vGYIyV8M 

//Pop code for recipes start here
// Opens a specific pop up window identitified by its ID
function openPopUp(id) {
    var overlay = document.getElementById(id);
    console.log(overlay.style);
    overlay.style.display = "block";

    var foods = document.getElementById("foods");
    foods.style.display = "none";
}

// Closes all oepned pop up windows and makes the "food" element visible again
function closePopUps(){
    var overlays = document.getElementsByClassName("popup-overlay");
    for (let i =0; i < overlays.length; i++){
        const element = overlays[i];
        element.style.display = "none";
    }

var foods = document.getElementById("foods");
foods.style.display = "flex";
}


// Meal add pop up 
function openMeal(id) {
    var overlay = document.getElementById(id);
    console.log(overlay.style);
    overlay.style.display = "none";

    var card = document.getElementById("card");
    card.style.display = "block";
}


function closecalenderPopUps(){
    var overlays = document.getElementsByClassName("container");
    for (let i =0; i < overlays.length; i++){
        const element = overlays[i];
        element.style.display = "none";
    }

var foods = document.getElementById("foods");
foods.style.display = "flex";
}

// Opening "Show Past History" pop up 

function openhistoryPopUps(id) {
    var overlay = document.getElementById(id);
    console.log(overlay.style);
    overlay.style.display = "none";

    var historycontent = document.getElementById("historycontent");
    historycontent.style.display = "block";
}

// Closing history pop up
function closehistoryPopUps(){
    var overlays = document.getElementsByClassName("historycontent");
    for (let i =0; i < overlays.length; i++){
        const element = overlays[i];
        element.style.display = "none";
    }

var history = document.getElementById("history");
history.style.display = "flex";
}

// Griffith, S. (2019, February 5). Saving User Input in JS Objects. https://www.google.com/search?q=save+user+input+javascript&rlz=1C5CHFA_enAU1040AU1040&sxsrf=APwXEddyK4kSzstpkSRZ_stJ6zxgSgqTpQ:1685588818191&source=lnms&tbm=vid&sa=X&ved=2ahUKEwj8kPvVi6H_AhX7xTgGHbw-CF0Q_AUoAXoECAIQAw&biw=1470&bih=808&dpr=2#fpstate=ive&vld=cid:e8ff29fe,vid:NxVCq4p0Kb0 
// This code allows users to add breakfast items to a list, which then gets displayed on the webpage inside the "Show Past History" pop up and saved to the browser's local storage for future retrieval
let breakfasts = [];
const addBreakfast = (ev)=>{
    ev.preventDefault(); //stop the form from submitting
    let breakfast = {
        // A unique identitifier generated which represents the current timestamp
        id: Date.now(),
        // Value of Id, "breakfast" entered in an input field
        meal: document.getElementById('breakfast').value,
        // Value of Id, "Calories" entered by users
        calories: document.getElementById('calories').value
    }
    breakfasts.push(breakfast);
    document.querySelector('form').reset(); //clear form for new breakfast entries

    console.warn('added' , {breakfasts} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(breakfasts, '\t', 2);

     //saving to localStorage to save the "Breakfasts" array to the browser's local storage. The array is then serialised into a JSON string before being stored.
     localStorage.setItem('BreakfastList', JSON.stringify(breakfasts) );
    }
    

    let lunches = [];
 const addLunch = (ev)=>{
        ev.preventDefault(); //stop the form from submitting
        let lunch = {
            id: Date.now(),
            meal: document.getElementById('lunch').value,
            calories: document.getElementById('calories').value
        }
        lunches.push(lunch);
        document.querySelector('form').reset(); //clear form for new breakfast entries
    
        console.warn('added' , {lunches} );
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(lunches, '\t', 2); 
        
        localStorage.setItem('LunchList', JSON.stringify(lunches) );
}


        let dinners = [];
        const addDinner = (ev)=>{
            ev.preventDefault(); //stop the form from submitting
            let dinner = {
                id: Date.now(),
                meal: document.getElementById('dinner').value,
                calories: document.getElementById('calories').value
              
            }
            dinners.push(dinner);
            document.querySelector('form').reset(); //clear form for new breakfast entries
        
            console.warn('added' , {dinners} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(dinners, '\t', 2);  


            localStorage.setItem('DinnerList', JSON.stringify(dinners) );
        }

        const viewHistory = document.getElementById('historycontent');

        function viewPastHistory() {
            viewHistory.innerHTML = breakfasts.value;
            viewHistory.innerHTML = lunches.value;
            viewHistory.innerHTML = dinners.value;
        }
// NoorMaria. (2022, April 18). How to addEventListener to a button in popup content of ArcGIS API for JS. https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/how-to-addeventlistener-to-a-button-in-popup/td-p/1165242 
        // This code ensures that when the DOM has finished loading, the three functions will be executed in response to a click event.
document.addEventListener('DOMContentLoaded', ()=> {
document.getElementById('logmeal').addEventListener('click', addBreakfast);
document.getElementById('logmeal').addEventListener('click', addLunch);
document.getElementById('logmeal').addEventListener('click', addDinner);
});

//Deleting user inputs
function removeFromList() {

    var pre = document.getElementByID("msg");
    element.style.display = "none";

}

