//By Sam
const API_PETER = "https://api.peterportal.org/rest/v0/courses/all";

async function getData() {
    const data = await fetch(API_PETER);
    console.log(await data.json());
}

getData();
