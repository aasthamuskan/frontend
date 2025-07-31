//if

const isuerloggedin=true;
const isAdmin = false;
if(isuerloggedin){
    console.log("User is logged in");
    if(isAdmin){
        console.log("User is an admin");
    }else{
        console.log("User is not an admin");
    }
}
// comparision operators are used to compare values
// <,>, <=, >=, ==, ===, !=, !==
// = operator assignment
// == checks for value equality, === checks for value and type equali

//switch case is used to execute one block of code among many
const day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
       
}