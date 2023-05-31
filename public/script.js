var weeklyGoal;
var totalCalories = 0;

function setWeeklyGoal() {
    weeklyGoal = parseInt(document.getElementById("goal").value);
    updateProgressBar();
}

function addCalories() {
    var calories = parseInt(document.getElementById("calories").value);
    totalCalories += calories;
    document.getElementById("calories").value = "";
    updateProgressBar();
}

function updateProgressBar() {
    var progress = (totalCalories / weeklyGoal) * 100;
    progress = Math.min(progress, 100); // Ensure the progress does not exceed 100%
    document.getElementById("progress").style.width = progress + "%";
}


// function handleClick(box) {
//     box.style.backgroundColor= "blue";
//     box.innerHTML= "Clicked!";
// }


// function addMeal() {
//     // Receiving user input for the meal, ingredient ane calories field
// var meal = document.getElementById("meal").value;
// var Ingredients = document.getElementById("Ingredients").value;
// var calories = document.getElementById("calories").value;

// // Creating a new table row whenever new data is put through by the user
// var table = document.getElementById("mealTable");
// var row = table.insertRow(-1);

// // Insert cells for meal, calories and Ingredients 
// var mealCell = row.insertCell (0);
// mealCell.innerHTML = meal; 

// var caloriesCell = row.insertCell(1);
// caloriesCell.innerHTML = calories; 

// varIngredientsCell = row.insertCell(2);
// caloriesCell.innerHTML = Ingredients;

// // Clearing input fields 
// document.getElementById("meal").value = "";
// document.getElementById("calories").value = "";
// }


//POP UP CODE STARTS HERE
function openPopUp(id) {
    var overlay = document.getElementById(id);
    console.log(overlay.style);
    overlay.style.display = "block";

    var foods = document.getElementById("foods");
    foods.style.display = "none";
}


function closePopUps(){
    var overlays = document.getElementsByClassName("popup-overlay");
    for (let i =0; i < overlays.length; i++){
        const element = overlays[i];
        element.style.display = "none";
    }

var foods = document.getElementById("foods");
foods.style.display = "flex";
}


// Meal add 
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

// View history 

function openhistoryPopUps(id) {
    var overlay = document.getElementById(id);
    console.log(overlay.style);
    overlay.style.display = "none";

    var historycontent = document.getElementById("historycontent");
    historycontent.style.display = "block";
}


function closehistoryPopUps(){
    var overlays = document.getElementsByClassName("historycontent");
    for (let i =0; i < overlays.length; i++){
        const element = overlays[i];
        element.style.display = "none";
    }

var foods = document.getElementById("foods");
foods.style.display = "flex";
}


// var activeBox = one; // Keep track of the active box

// function openPopup(one) {
//   if (boxNumber === activeBox) {
//     var currentBox = document.getElementById(one);
//     currentBox.classList.add("green");
//     activeBox++; // Increment the active box
//   }
// }

//CODE FOR TRACKING MEALS

{/* <div class="formBox">
<label for="Meal">Breakfast</label>
<input type="text" id="breakfast" placeholder="breakfast"/>
</div>
<div class="formBox">
<label for="Enter">Calories</label>
<input type="number" id="calories" placeholder="calories"/>
</div>
<div class="formBox">
<button id="logmeal">Log Meal</button>
</div>
<div id="msg">
<pre></pre>
</div> */}

let breakfasts = [];
const addBreakfast = (ev)=>{
    ev.preventDefault(); //stop the form from submitting
    let breakfast = {
        id: Date.now(),
        meal: document.getElementById('breakfast').value,
        calories: document.getElementById('calories').value
    }
    breakfasts.push(breakfast);
    document.querySelector('form').reset(); //clear form for new breakfast entries

    console.warn('added' , {breakfasts} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(breakfasts, '\t', 2);

     //saving to localStorage
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

document.addEventListener('DOMContentLoaded', ()=> {
document.getElementById('logmeal').addEventListener('click', addBreakfast);
document.getElementById('logmeal').addEventListener('click', addLunch);
document.getElementById('logmeal').addEventListener('click', addDinner);
});

//deleting user inputs

function removeFromList() {

    var pre = document.getElementByID("msg");
    element.style.display = "none";

}

