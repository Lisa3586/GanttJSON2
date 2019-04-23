console.log('test')

/*
let projects = [
    {
        3: 8, 
        8: 20, 
        20: 38,
        38: 62,
        62: 67,
        67: 127,
    },
    {
        1: 5, 
        5: 17, 
        17: 35,
        35: 59,
        60: 65,
        65: 155,
    },
    {
        20: 25, 
        25: 37, 
        37: 55,
        55: 79,
        79: 85,
        84: 154,
    },
    {
        30: 35, 
        35: 47, 
        47: 55,
        55: 79,
        79: 84,
        84: 134,
    },      
    {
        40: 45, 
        45: 57, 
        57: 75,
        75: 89,
        89: 94,
        94: 174,
    }      
]*/


/*fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
    console.log("Got the data!");
    console.log(data);
    // TODO: Call a function to do something with this data.
});*/
let projects = null;
// Replace ./data.json with your JSON feed
fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        projects = data;
        main();




        //   })
        // Work with JSON data here
        // console.log(data);
        // let projects = data;
    });

/* Define months & days*/
let days = ["S", "M", "T", "W", "T", "F", "S"];

let months = {
    "January": 30,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
};

let phases = {
    "Programming": "type1",
    "Schematic Design": "type2",
    "Design Development": "type3",
    "Construction Documents": "type4",
    "Bidding": "type5",
    "Construction Admenistration": "type6",
};



let i = 0;
let values = Object.values(months);
let keys = Object.keys(months);
let dateArea = document.querySelector(".scrollArea");
let dayname = days[i];


let phasesvalues = Object.values(phases)
let phaseskeys = Object.keys(phases)



let x = 0;
function main() {

    while (x < 5) {
        let a = 0;
        console.log("hello");
        console.log(projects);
        let project = projects[x];
        let projectsvalues = Object.values(project);
        let projectskeys = Object.keys(project);
        while (a < 6) {

            let phasename = phaseskeys[a];
            let phasetype = phasesvalues[a];

            let div = document.createElement("div");

            div.textContent = phasename;
            div.classList.add("barRow");

            let iter = x + 1;
            console.log(iter);
            let projnum = "project" + iter;
            console.log(projnum);
            div.classList.add(projnum);
            /*
                    let phase1 = phases[phase];*/
            div.classList.add(phasetype);

            let start = projectskeys[a];
            let end = projectsvalues[a];
            div.style.setProperty('grid-column-start', start);
            div.style.setProperty('grid-column-end', end);
            div.style.setProperty('grid-row-start', x + 3);
            div.style.setProperty('grid-row-end', x + 3);

            dateArea.append(div);
            a++;
        }
        x++;
    }


    for (let key of keys) {
        let p = document.createElement("p");
        console.log(key);
        p.textContent = key;
        p.classList.add("months");
        let value1 = months[key];
        p.style.setProperty('--monthlength', value1);
        dateArea.append(p);

        for (let value of values) {
            let count = 1;
            value++;
            while (count < value) {
                dayname = days[i];
                /*console.log(i);*/
                if (i === 7) {
                    console.log('hi');
                    i = 0;
                } else {
                    let p = document.createElement("p");
                    p.textContent = count + "\n" + dayname;
                    if (dayname === "S") {
                        p.classList.add("weekend");
                    } else { };
                    p.classList.add("days");
                    let value = months[key];
                    p.style.setProperty('--monthlength', value);
                    dateArea.append(p);
                    count++;
                    /*console.log(i);*/
                    i++;
                }
            }
        }
    }
}