function addMeal(element) {
    element.classList.add('meal-added');
    updateProgressBar();
}

function updateProgressBar() {
    var mealEntries = document.querySelectorAll('.meal-added');
    var progressBar = document.querySelector('.progress');
    var progress = (mealEntries.length / 7) *100;

    progressBar.getElementsByClassName.width = progress + '%';
    
}