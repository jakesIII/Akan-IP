var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateFunction(){

    var akan = ""

    var gender = document.forms["userinput"]["gender"].value;

    var date = document.forms["userinput"]["date"].value;

    var confirmDate = new Date(date); //assign date format

    var confirmDay = confirmDate.getDay();

    if (gender === male){
        akan = maleNames[confirmDay];
    } else if (gender === female){
        akan = femaleNames[confirmDay]
    } else {
        alert ("Invalid input. Try again");
    }

    alert("Your Akan name is " + akan);
    // return akan;
}