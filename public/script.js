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



// // Storage Controller
// const StorageCtrl = (function(){
//     // Public methods
//     return {
//       storeItem: function(item){
//         let items;
//         // Check if any items in ls
//         if(localStorage.getItem('items') === null){
//           items = [];
//           // Push new item
//           items.push(item);
//           // Set ls
//           localStorage.setItem('items', JSON.stringify(items));
//         } else {
//           // Get what is already in ls
//           items = JSON.parse(localStorage.getItem('items'));
  
//           // Push new item
//           items.push(item);
  
//           // Re set ls
//           localStorage.setItem('items', JSON.stringify(items));
//         }
//       },
//       getItemsFromStorage: function(){
//         let items;
//         if(localStorage.getItem('items') === null){
//           items = [];
//         } else {
//           items = JSON.parse(localStorage.getItem('items'));
//         }
//         return items;
//       },
//       updateItemStorage: function(updatedItem){
//         let items = JSON.parse(localStorage.getItem('items'));
  
//         items.forEach(function(item, index){
//           if(updatedItem.id === item.id){
//             items.splice(index, 1, updatedItem);
//           }
//         });
//         localStorage.setItem('items', JSON.stringify(items));
//       },
//       deleteItemFromStorage: function(id){
//         let items = JSON.parse(localStorage.getItem('items'));
        
//         items.forEach(function(item, index){
//           if(id === item.id){
//             items.splice(index, 1);
//           }
//         });
//         localStorage.setItem('items', JSON.stringify(items));
//       },
//       clearItemsFromStorage: function(){
//         localStorage.removeItem('items');
//       }
//     }
//   })();
  
//   //Item controller 
//   const ItemCrtl = (function()){
//     const Item = function(id, name, calories){
//         this.id= id;
//         this.name= name;
//         this.calories= calories;
//     }
// }

// //Data Structure 
// const data = {
//     items: StorageCtrl.getItemsFromStorage(),
//     currentItem: null,
//     totalCalories: 0;
// }

// //Public methods 
// return {
//     getItems: function() {
// return data.items;
//     }
// },
// addItem: function(name, calories){
//     let ID;
//     if (data.items.length > 0){
//         ID = data.items[data.items.length-1].id + 1;
//     } else {
//         ID = 0;
//     }
// }

// //Calories to number 
// calories = parseInt(calories);
// newItem = new Item(ID, calories);
// data.items.push(newItem);

// return newItem;

//   getItemById: function(id){
//     let found = null;
//     data.items.forEach(function(item){
//         if(item.id ===id){
//             found = item;
//         }
//     });
//     return found;
//   }
      
//     //   updateItem: function(name, calories){
//     //     // Calories to number
//     //     calories = parseInt(calories);
  
//     //     let found = null;
  
//     //     data.items.forEach(function(item){
//     //       if(item.id === data.currentItem.id){
//     //         item.name = name;
//     //         item.calories = calories;
//     //         found = item;
//     //       }
//     //     });
//     //     return found;
//     //   },

//     deleteItem: function(id){
//         const ids = data.items.map(function(item){
//             return item.id;
//         });

//         const index = ids.indexOf(id);
//         data.items.splice(index, 1);
//     }

//       deleteItem: function(id){
//         // Get ids
//         const ids = data.items.map(function(item){
//           return item.id;
//         });
  
//         // Get index
//         const index = ids.indexOf(id);
  
//         // Remove item
//         data.items.splice(index, 1);
//       }

//       setCurrentItem: function(item){
//         data.currentItem = item;
//       }

//       getCurrentItem: function(){
// return data.currentItem;
//       }

//       getTotalCalories: function(){
//         let total = 0;
//       }

//     //   clearAllItems: function(){
//     //     data.items = [];
//     //   },
     
//       getTotalCalories: function(){
//         let total = 0;

//         data.items.forEach(function(item){
//             total += item.calories;
//         });

//         data.totalCalories = total;

//         return data.totalCalories;

//     }, 
//     logData: function(){
//         return data;
//     }
  

//   // UI Controller
//   const UICtrl = (function(){
//     const UISelectors = {
//       itemList: '#item-list',
//       listItems: '#item-list li',
//       addBtn: '.add-btn',
//       updateBtn: '.update-btn',
//       deleteBtn: '.delete-btn',
//       backBtn: '.back-btn',
//       clearBtn: '.clear-btn',
//       itemNameInput: '#item-name',
//       itemCaloriesInput: '#item-calories',
//       totalCalories: '.total-calories'
//     }
    
//     // Public methods
//     return {
//       populateItemList: function(items){
//         let html = '';
  
//         items.forEach(function(item){
//           html += `<li class="meal-history" id="item-${item.id}">
//           <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
//           <a href="#" class="secondary-content">
//             <i class="edit-item fa fa-pencil"></i>
//           </a>
//         </li>`;
//         });
  
//         // Insert list items
//         document.querySelector(UISelectors.itemList).innerHTML = html;
//       },
//       getItemInput: function(){
//         return {
//           name:document.querySelector(UISelectors.itemNameInput).value,
//           calories:document.querySelector(UISelectors.itemCaloriesInput).value
//         }
//       },
//       addListItem: function(item){
//         // Show the list
//         document.querySelector(UISelectors.itemList).style.display = 'block';
//         // Create li element
//         const li = document.createElement('li');
//         // Add class
//         li.className = 'meal-history';
//         // Add ID
//         li.id = `item-${item.id}`;
//         // Add HTML
//         li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="edit-item fa fa-pencil"></i>
//         </a>`;
//         // Insert item
//         document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
//       },
//       updateListItem: function(item){
//         let listItems = document.querySelectorAll(UISelectors.listItems);
  
//         // Turn Node list into array
//         listItems = Array.from(listItems);
  
//         listItems.forEach(function(listItem){
//           const itemID = listItem.getAttribute('id');
  
//           if(itemID === `item-${item.id}`){
//             document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
//             <a href="#" class="secondary-content">
//               <i class="edit-item fa fa-pencil"></i>
//             </a>`;
//           }
//         });
//       },
//       deleteListItem: function(id){
//         const itemID = `#item-${id}`;
//         const item = document.querySelector(itemID);
//         item.remove();
//       },
//       clearInput: function(){
//         document.querySelector(UISelectors.itemNameInput).value = '';
//         document.querySelector(UISelectors.itemCaloriesInput).value = '';
//       },
//       addItemToForm: function(){
//         document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
//         document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
//         UICtrl.showEditState();
//       },
//       removeItems: function(){
//         let listItems = document.querySelectorAll(UISelectors.listItems);
  
//         // Turn Node list into array
//         listItems = Array.from(listItems);
  
//         listItems.forEach(function(item){
//           item.remove();
//         });
//       },
//       hideList: function(){
//         document.querySelector(UISelectors.itemList).style.display = 'none';
//       },
//       showTotalCalories: function(totalCalories){
//         document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
//       },
//       clearEditState: function(){
//         UICtrl.clearInput();
//         document.querySelector(UISelectors.updateBtn).style.display = 'none';
//         document.querySelector(UISelectors.deleteBtn).style.display = 'none';
//         document.querySelector(UISelectors.backBtn).style.display = 'none';
//         document.querySelector(UISelectors.addBtn).style.display = 'inline';
//       },
//       showEditState: function(){
//         document.querySelector(UISelectors.updateBtn).style.display = 'inline';
//         document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
//         document.querySelector(UISelectors.backBtn).style.display = 'inline';
//         document.querySelector(UISelectors.addBtn).style.display = 'none';
//       },
//       getSelectors: function(){
//         return UISelectors;
//       }
//     }
//   })();
  
  
  
//   // App Controller
//   const App = (function(ItemCtrl, StorageCtrl, UICtrl){
//     // Load event listeners
//     const loadEventListeners = function(){
//       // Get UI selectors
//       const UISelectors = UICtrl.getSelectors();
  
//       // Add item event
//       document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  
//       // Disable submit on enter
//       document.addEventListener('keypress', function(e){
//         if(e.keyCode === 13 || e.which === 13){
//           e.preventDefault();
//           return false;
//         }
//       });
  
//       // Edit icon click event
//       document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
  
//       // Update item event
//       document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
  
//       // Delete item event
//       document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
  
//        // Back button event
//        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
  
//        // Clear items event
//       document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
//     }
  
//     // Add item submit
//     const itemAddSubmit = function(e){
//       // Get form input from UI Controller
//       const input = UICtrl.getItemInput();
  
//       // Check for name and calorie input
//       if(input.name !== '' && input.calories !== ''){
//         // Add item
//         const newItem = ItemCtrl.addItem(input.name, input.calories);
  
//         // Add item to UI list
//         UICtrl.addListItem(newItem);
  
//         // Get total calories
//         const totalCalories = ItemCtrl.getTotalCalories();
//         // Add total calories to UI
//         UICtrl.showTotalCalories(totalCalories);
  
//         //Store in localStorage
//         StorageCtrl.storeItem(newItem);
  
//         // Clear fields
//         UICtrl.clearInput();
//       }
  
//       e.preventDefault();
//     }
  
//     // Click edit item
//     const itemEditClick = function(e){
//       if(e.target.classList.contains('edit-item')){
//         // Get list item id (item-0, item-1)
//         const listId = e.target.parentNode.parentNode.id;
  
//         // Break into an array
//         const listIdArr = listId.split('-');
  
//         // Get the actual id
//         const id = parseInt(listIdArr[1]);
  
//         // Get item
//         const itemToEdit = ItemCtrl.getItemById(id);
  
//         // Set current item
//         ItemCtrl.setCurrentItem(itemToEdit);
  
//         // Add item to form
//         UICtrl.addItemToForm();
//       }
  
//       e.preventDefault();
//     }
  
//     // Update item submit
//     const itemUpdateSubmit = function(e){
//       // Get item input
//       const input = UICtrl.getItemInput();
  
//       // Update item
//       const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
  
//       // Update UI
//       UICtrl.updateListItem(updatedItem);
  
//        // Get total calories
//        const totalCalories = ItemCtrl.getTotalCalories();
//        // Add total calories to UI
//        UICtrl.showTotalCalories(totalCalories);
  
//        // Update local storage
//        StorageCtrl.updateItemStorage(updatedItem);
  
//        UICtrl.clearEditState();
  
//       e.preventDefault();
//     }
  
//     // Delete button event
//     const itemDeleteSubmit = function(e){
//       // Get current item
//       const currentItem = ItemCtrl.getCurrentItem();
  
//       // Delete from data structure
//       ItemCtrl.deleteItem(clientInformation);
  
//       // Delete from UI
//       UICtrl.deleteListItem(currentItem.id);
  
//       // Get total calories
//       const totalCalories = ItemCtrl.getTotalCalories();
//       // Add total calories to UI
//       UICtrl.showTotalCalories(totalCalories);
  
//       // Delete from local storage
//       StorageCtrl.deleteItemFromStorage(currentItem.id);
  
//       UICtrl.clearEditState();
  
//       e.preventDefault();
//     }
  
  
//     // Clear items event
//     const clearAllItemsClick = function(){
//       // Delete all items from data structure
//       ItemCtrl.clearAllItems();
  
//       // Get total calories
//       const totalCalories = ItemCtrl.getTotalCalories();
//       // Add total calories to UI
//       UICtrl.showTotalCalories(totalCalories);
  
//       // Remove from UI
//       UICtrl.removeItems();
  
//       // Clear from local storage
//       StorageCtrl.clearItemsFromStorage();
  
//       // Hide UL
//       UICtrl.hideList();
      
//     }
  
//     // Public methods
//     return {
//       init: function(){
//         // Clear edit state / set initial set
//         UICtrl.clearEditState();
  
//         // Fetch items from data structure
//         const items = ItemCtrl.getItems();
  
//         // Check if any items
//         if(items.length === 0){
//           UICtrl.hideList();
//         } else {
//           // Populate list with items
//           UICtrl.populateItemList(items);
//         }
  
//         // Get total calories
//         const totalCalories = ItemCtrl.getTotalCalories();
//         // Add total calories to UI
//         UICtrl.showTotalCalories(totalCalories);
  
//         // Load event listeners
//         loadEventListeners();
//       }
//     }
    
//   })(ItemCtrl, StorageCtrl, UICtrl);
  
//   // Initialize App
//   App.init();
