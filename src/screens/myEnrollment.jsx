//By Sam
/*
    How to query
    "field" = "serch terms" where space is replaced with % (e.g. 2022 Fall -> 2022%Fall)
    subseqeuntly add more fields with & (see sample below);
    
*/ 
query = 'term=2023%20Winter&departmnet=COMPSCI'

const API_PETER = "https://api.peterportal.org/rest/v0/schedule/soc?{query}";

async function getData() {
    const data = await fetch(API_PETER);
    console.log(await data.json());
}

getData();
