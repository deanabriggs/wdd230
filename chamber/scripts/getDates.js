// Last Modified Date
let modDate = new Date(document.lastModified);
formattedDate = modDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
document.getElementById("lastModified").innerHTML = "Last Modified: " + formattedDate;

// Form Loaded Date
let formDate = new Date(document.timestamp);
document.getElementById("timestamp").innerHTML = formDate;