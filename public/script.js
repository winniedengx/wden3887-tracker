

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

function handleSubmit() {

    // Receiving user input from the forms
    var name= document.getElementById("name").value;
    var option = document.getElementById("Option").value;

    // Display submitted information
    var result= document.getElementById("result");
    result.innerHTML = "Name: " + name + "<br>Option: " + option;

//   Prevent the form from submitting and refreshing the page
    return false;

}

function handleClick(box) {
    box.style.backgroundColor= "blue";
    box.innerHTML= "Clicked!";
}