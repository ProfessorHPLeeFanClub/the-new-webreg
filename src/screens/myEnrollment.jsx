const api_peter = "https://api.peterportal.org/rest/v0/";
var XMLHttpRequest = require("xhr2");
const request = new XMLHttpRequest();

request.open("GET", api_peter);
request.send();

//console.log(JSON.stringify(data, null, 2));
