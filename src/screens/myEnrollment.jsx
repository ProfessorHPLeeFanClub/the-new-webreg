//By Sam
/*
    How to query
    "field" = "serch terms" where space is replaced with % (e.g. 2022 Fall -> 2022%Fall)
    subseqeuntly add more fields with & (see sample below);

*/ 

API_PETER = 'https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Winter';

function create_website_code(section_code){
    a = API_PETER +'&sectionCodes={section_code}';
    return a;
}

function create_website_search(conditions){
    a = API_PETER;
    l = conditions.length;
    for (let i = 0; i < l; i++) {
        a += "&" + conditions[i][0] + "=" + conditions[i][1];
}
    return a;
}


async function getData() {
    const data = await fetch(API_PETER);
    console.log(await data.json());
}

console.log(getData());
