function getCurrentDateTime() {
    // create a new Date object with the current date and time
    let currentDate = new Date();
  
    // get locale-specific date and time strings
    let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    let timeOptions = {hour: 'numeric', minute: 'numeric', hour12: true};
  
    // format the date and time strings
    let formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    let formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
  
    // combine date and time strings
    let formattedDateTime = `${formattedDate} ${formattedTime}`;
  
    return formattedDateTime;
}

let currentDateTime = getCurrentDateTime();
console.log(currentDateTime);