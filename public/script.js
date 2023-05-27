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


document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.pancake-container img');
    console.log(image)
    var popupContainer = document.querySelector('#pancake-container');

    image.addEventListener('click', function() {
        popupContainer.getElementsByClassName.display = 'block';
    });

    popupContainer.addEventListener('click', function() {
        popupContainer.style.display = 'none';

    });
    });

    // https://www.google.com/search?q=how+to+make+a+user+input+form+in+JavaScript&rlz=1C5CHFA_enAU1040AU1040&cs=1&biw=1470&bih=808&tbm=vid&sxsrf=APwXEdeN1KFamBAiYDrb1S5KZN7KT7xulw%3A1684655201236&ei=YcxpZLj6Dd3K2roPv_6cyAM&ved=0ahUKEwj4rtrW9YX_AhVdpVYBHT8_BzkQ4dUDCA0&uact=5&oq=how+to+make+a+user+input+form+in+JavaScript&gs_lcp=Cg1nd3Mtd2l6LXZpZGVvEAMyCgghEKABEMMEEAo6BQgAEIAEOgYIABAIEB46CAgAEAgQHhAKOggIABCKBRCGAzoHCCMQsAIQJzoICAAQCBAHEB46CggAEAgQBxAeEAo6CAghEKABEMMEUKAEWLwdYKceaABwAHgAgAHxAYgB9RSSAQYwLjExLjOYAQCgAQHAAQE&sclient=gws-wiz-video#fpstate=ive&vld=cid:5b22bc62,vid:w9GNyw8AvlM 
    

//    document.getElementById("myButton").onclick = function() {

//     // Assigning any value of my text to the variable myName //
//     var myName = document.getElementById("myText").value;
//    }

//    console.log("Hey",myName);

// function handleSubmit() {

//     // Receiving user input from the forms
//     var name= document.getElementById("name").value;
//     var option = document.getElementById("Option").value;

//     // Display submitted information
//     var result= document.getElementById("result");
//     result.innerHTML = "Name: " + name + "<br>Option: " + option;

// //   Prevent the form from submitting and refreshing the page
//     return false;


function handleClick(box) {
    box.style.backgroundColor= "blue";
    box.innerHTML= "Clicked!";
}


function addMeal() {
    // Receiving user input for the meal, ingredient ane calories field
var meal = document.getElementById("meal").value;
var Ingredients = document.getElementById("Ingredients").value;
var calories = document.getElementById("calories").value;

// Creating a new table row whenever new data is put through by the user
var table = document.getElementById("mealTable");
var row = table.insertRow(-1);

// Insert cells for meal, calories and Ingredients 
var mealCell = row.insertCell (0);
mealCell.innerHTML = meal; 

var caloriesCell = row.insertCell(1);
caloriesCell.innerHTML = calories; 

varIngredientsCell = row.insertCell(2);
caloriesCell.innerHTML = Ingredients;

// Clearing input fields 
document.getElementById("meal").value = "";
document.getElementById("calories").value = "";
}

function openPopup() {
    var overlay = document.getElementById("pancake-popup");
    overlay.style.visibility = "visible"; 
    overlay.style.opacity = 1;
}

function closePopup() {
    var overlay = document.getElementById("pancake-popup");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
}

function opensaladPopup() {
    var overlay = document.getElementById("salad-popup");
    overlay.style.visibility = "visible"; 
    overlay.style.opacity = 1;
}

function closesaladPopup() {
    var overlay = document.getElementById("salad-popup");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
}

function opensalmonPopup() {
    var overlay = document.getElementById("salmon-popup");
    overlay.style.visibility = "visible"; 
    overlay.style.opacity = 1;
}

function closesalmonPopup() {
    var overlay = document.getElementById("salmon-popup");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
}

function openraspberryPopup() {
    var overlay = document.getElementById("raspberry-popup");
    overlay.style.visibility = "visible"; 
    overlay.style.opacity = 1;
}

function closeraspberryPopup() {
    var overlay = document.getElementById("raspberry-popup");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
}
