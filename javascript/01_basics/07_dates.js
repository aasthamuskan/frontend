//dates

let mydate= new Date();
console.log(mydate); // current date and time
console.log(mydate.toString()); // string representation of date
console.log(mydate.toDateString()); // date in string format
console.log(mydate.toISOString()); // date in ISO format
console.log(mydate.toLocaleString()); // date in local format
console.log(typeof mydate); // object //********important */
let mycretaedDate = new Date(2023,0,23);
console.log(mycretaedDate); // Date object for January 23, 2023
console.log(mycretaedDate.toString()); // string representation of created date
console.log(mycretaedDate.toDateString()); // date in string format
 let mytimestamp = Date.now();
console.log(mytimestamp); // current timestamp in milliseconds since January 1, 1970
console.log(mycretaedDate.getTime()); // timestamp for created date
console.log(Math.floor(Date.now()/1000)); // current timestamp in seconds


let newdate=new Date();
console.loh(newdate);
console.log(newdate.getFullYear()); // current year
console.log(newdate.getMonth()); // current month (0-11, where 0 is January)
console.log(newdate.getDate()); // current day of the month (1-31)
console.log(newdate.getDay()); // current day of the week (0-6, where 0 is Sunday)
console.log(newdate.getHours()); // current hour (0-23)
console.log(newdate.getMinutes()); // current minutes (0-59)
console.log(newdate.getSeconds()); // current seconds (0-59)
console.log(newdate.getMilliseconds()); // current milliseconds (0-999)
console.log(newdate.getTime()); // current timestamp in milliseconds since January 1, 1970



newdate.toLocaleString('default',{
    weekday: 'long', // 'short' for abbreviated day name
    year: 'numeric',
    month: 'long', // 'short' for abbreviated month name
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})


