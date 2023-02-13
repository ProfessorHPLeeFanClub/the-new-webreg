import Schedule from "../components/Schedule"
import {EnrollCourseCodeForm} from "../components/Enroll"
import MainTabs from "../components/MainTabs";
import "../css/MyEnrollment.css"

function MyEnrollment() {

    // const api_peter = 'https://api.peterportal.org/rest/v0/';
    // var XMLHttpRequest = require('xhr2');
    // const request = new XMLHttpRequest();

    // request.open("GET", api_peter);
    // request.send();


//console.log(JSON.stringify(data, null, 2));


    const dummyScheduleData = [
        {
            title: "CSE 112",
            units: "4",
            grading: "GR",
            finalDate: "March 23, 2023 at 8:00-10:00am",
            classes: [
                {
                    courseCode: "29462",
                    classType: "Lec",
                    section: "A",
                    units: "4",
                    instructor: "HP Lee",
                    time: "MWF 4:00-5:00pm",
                    location: "DBH 1600",
                    enrolled: "121",
                    max: "121",
                    waitlist: "5"
                },
                {
                    courseCode: "29463",
                    classType: "Dis",
                    section: "B",
                    units: "0",
                    instructor: "STAFF",
                    time: "F 1:00-2:00pm",
                    location: "MSTB 224",
                    enrolled: "32",
                    max: "32",
                    waitlist: "0"
                }
            ]
        },
        {
            title: "EECS 70A",
            units: "4",
            grading: "P/NP",
            finalDate: "March 23, 2023 at 10:00-12:00pm",
            classes: [
                {
                    courseCode: "56372",
                    classType: "Lec",
                    section: "A",
                    units: "4",
                    instructor: "Aghasi",
                    time: "TTh 10:00-11:50am",
                    location: "ELH 100",
                    enrolled: "78",
                    max: "67",
                    waitlist: "0"
                },
                {
                    courseCode: "56376",
                    classType: "Dis",
                    section: "B",
                    units: "0",
                    instructor: "STAFF",
                    time: "Th 12:00-1:00pm",
                    location: "ICS 189",
                    enrolled: "28",
                    max: "18",
                    waitlist: "0"
                }
            ]
        },
    ];

    const departmentList = [
        "AC ENG - Academic English",
        "AFAM - African American Studies",
        "ANATOMY - Anatomy and Neurobiology",
        "ANESTH - Anesthesiology",
        "ANTHRO - Anthropology",
        "ARABIC - Arabic",
        "ARMN - Armenian (started 2018 Spg)",
        "ART - Art",
        "ART HIS - Art History",
        "ARTS - Arts",
        "ARTSHUM - Arts and Humanities",
        "ASIANAM - Asian American Studies",
        "BANA - Business Analytics (started 2017 SS2)",
        "BATS - Biomedical and Translational Science",
        "BIO SCI - Biological Sciences",
        "BIOCHEM - Biological Chemistry",
        "BME - Biomedical Engineering",
        "CAMPREC - Campus Recreation",
        "CBE - Chemical and Biomolecular Engineering (started 2018 Fall)",
        "CEM - Community and Environmental Medicine",
        "CHC/LAT - Chicano Latino",
        "CHEM - Chemistry",
        "CHINESE - Chinese",
        "CLASSIC - Classics",
        "CLT&THY - Culture & Theory",
        "COGS - Cognitive Sciences",
        "COM LIT - Comparative Literature",
        "COMPSCI - Computer Science",
        "CRITISM - Criticism",
        "CRM/LAW - Criminology, Law and Society",
        "CSE - Computer Science and Engineering",
        "DANCE - Dance",
        "DATA - Data Science (started 2022 SS1)",
        "DERM - Dermatology",
        "DEV BIO - Developmental and Cell Biology",
        "DRAMA - Drama",
        "EARTHSS - Earth System Sciences",
        "EAS - East Asian Studies (started 2019 Fall)",
        "ECO EVO - Ecology and Evolutionary Biology",
        "ECPS - Embedded and Cyber-Physical Systems",
        "ED AFF - Educational Affairs (Sch of Med)",
        "EDUC - Education",
        "EECS - Electrical Engineering & Computer Science",
        "EHS - Environmental Health Sciences",
        "ENGLISH - English",
        "ENGR - Engineering",
        "ENGRCEE - Engineering, Civil and Environmental",
        "ENGRMAE - Engineering, Mechanical and Aerospace",
        "ENGRMSE - Materials Science and Engineering (until 2020 SS2)",
        "EPIDEM - Epidemiology",
        "ER MED - Emergency Medicine",
        "EURO ST - European Studies",
        "FAM MED - Family Medicine",
        "FIN - Finance (started 2017 Fall)",
        "FLM&MDA - Film and Media Studies",
        "FRENCH - French",
        "GDIM - Game Design and Interactive Media (started 2021 Fall)",
        "GEN&SEX - Gender and Sexuality Studies",
        "GERMAN - German",
        "GLBL ME - Global Middle East Studies",
        "GLBLCLT - Global Cultures",
        "GREEK - Greek",
        "HEBREW - Hebrew",
        "HINDI - Hindi",
        "HISTORY - History",
        "HUMAN - Humanities",
        "HUMARTS - Humanities and Arts",
        "I&C SCI - Information and Computer Science",
        "IN4MATX - Informatics",
        "INNO - Masters of Innovation and Entrepreneurship (started 2019 Fall)",
        "INT MED - Internal Medicine",
        "INTL ST - International Studies",
        "IRAN - Iranian (started 2020 Fall)",
        "ITALIAN - Italian",
        "JAPANSE - Japanese",
        "KOREAN - Korean",
        "LATIN - Latin",
        "LAW - Law",
        "LINGUIS - Linguistics (until 2019 SS2)",
        "LIT JRN - Literary Journalism",
        "LPS - Logic and Philosophy of Science",
        "LSCI - Language Science (started 2019 Fall)",
        "M&MG - Microbiology and Molecular Genetics",
        "MATH - Mathematics",
        "MED - Medicine",
        "MED ED - Medical Education",
        "MED HUM - Medical Humanities",
        "MGMT - Management",
        "MGMT EP - Executive MBA",
        "MGMT FE - Fully Employed MBA",
        "MGMT HC - Health Care MBA",
        "MGMTMBA - Management MBA",
        "MGMTPHD - Management PhD",
        "MIC BIO - Microbiology",
        "MOL BIO - Molecular Biology and Biochemistry",
        "MPAC - Accounting",
        "MSE - Materials Science and Engineering (started 2020 Fall)",
        "MUSIC - Music",
        "NET SYS - Networked Systems",
        "NEURBIO - Neurobiology and Behavior",
        "NEUROL - Neurology",
        "NUR SCI - Nursing Science",
        "OB/GYN - Obstetrics and Gynecology",
        "OPHTHAL - Ophthalmology",
        "PATH - Pathology and Laboratory Medicine",
        "PED GEN - Pediatrics Genetics",
        "PEDS - Pediatrics",
        "PERSIAN - Persian",
        "PHARM - Pharmacology (started 2020 Fall)",
        "PHILOS - Philosophy",
        "PHMD - Pharmacy (started 2021 Fall)",
        "PHRMSCI - Pharmaceutical Sciences",
        "PHY SCI - Physical Science",
        "PHYSICS - Physics",
        "PHYSIO - Physiology and Biophysics",
        "PLASTIC - Plastic Surgery",
        "PM&R - Physical Medicine and Rehabilitation",
        "POL SCI - Political Science",
        "PORTUG - Portuguese",
        "PP&D - Planning, Policy, and Design (until 2018 SS2; see UPPP)",
        "PSCI - Psychological Science (started 2019 Fall)",
        "PSY BEH - Psychology and Social Behavior (until 2019 SS2)",
        "PSYCH - Cognitive Sciences",
        "PUB POL - Public Policy",
        "PUBHLTH - Public Health",
        "RADIO - Radiology",
        "REL STD - Religious Studies",
        "ROTC - Reserve Officers' Training Corps",
        "RUSSIAN - Russian",
        "SOC SCI - Social Science",
        "SOCECOL - Social Ecology",
        "SOCIOL - Sociology",
        "SPANISH - Spanish",
        "SPPS - Social Policy & Public Service",
        "STATS - Statistics",
        "SURGERY - Surgery",
        "SWE - Software Engineering (started 2019 Fall)",
        "TAGALOG - Tagalog",
        "TOX - Toxicology",
        "UCDC - UC Washington DC",
        "UNI AFF - University Affairs",
        "UNI STU - University Studies",
        "UPPP - Urban Planning and Public Policy (started 2018 Fall)",
        "VIETMSE - Vietnamese",
        "VIS STD - Visual Studies",
        "WRITING - Writing",
    ];

    return <>
        <div className="content">
            
            <MainTabs className="mainTabs" departmentList={departmentList}/>

            <h2 className="myScheduleText">My Schedule</h2>
            <Schedule className="schedule" courseList={dummyScheduleData}></Schedule>
            
        </div>
    </>

}

export default MyEnrollment;