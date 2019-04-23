
let projects = {
        3: 8, 
        8: 20, 
        20: 38,
        38: 62,
        62: 67,
        67: 127,

          
}
/*
          "name": "Hugo Street ADU",
          "type": "Project 2",
          "start1": "2019-01-01",
          "end1": "2019-01-05",
          "start2": "2019-01-05",
          "end2": "2019-01-16",
          "start3": "2019-01-17",
          "end3": "2019-02-03",
          "start4": "2019-02-04",
          "end4": "2019-02-26",
          "start5": "2019-03-01",
          "end5": "2019-03-05",
          "start6": "2019-03-06",
          "end6": "2019-06-02",

          "name": "San Pablo Blvd ADU",
          "type": "Project 3",
          "start1": "2019-01-20",
          "end1": "2019-01-24",
          "start2": "2019-01-25",
          "end2": "2019-02-06",
          "start3": "2019-01-20",
          "end3": "2019-02-22",
          "start4": "2019-02-23",
          "end4": "2019-03-19",
          "start5": "2019-03-20",
          "end5": "2019-03-24",
          "start6": "2019-03-25",
          "end6": "2019-05-22",

          "name": "Russell Avenue ADU",
          "type": "Project 4",
          "start1": "2019-01-30",
          "end1": "2019-02-03",
          "start2": "2019-02-04",
          "end2": "2019-02-15",
          "start3": "2019-02-16",
          "end3": "2019-02-23",
          "start4": "2019-02-24",
          "end4": "2019-03-19",
          "start5": "2019-03-20",
          "end5": "2019-03-24",
          "start6": "2019-03-25",
          "end6": "2019-06-02",

          "name": "Berkeley ADU",
          "type": "Project 5",
          "start1": "2019-02-09",
          "end1": "2019-02-13",
          "start2": "2019-02-14",
          "end2": "2019-02-25",
          "start3": "2019-02-26",
          "end3": "2019-03-15",
          "start4": "2019-03-16",
          "end4": "2019-03-29",
          "start5": "2019-03-30",
          "end5": "2019-04-03",
          "start6": "2019-04-04",
          "end6": "2019-06-22",
        
      };


*/

/*function buildGantt() {*/

  
/* Define months & days*/
let days = ["S", "M", "T", "W", "T", "F", "S"];

let months = {
    "January": 30, 
    "February": 28,
    "March": 31,
    "April": 30,
    "May" : 31,
    "June" : 30,
  };

let phases = {
    "Programming" : "type1", 
    "Schematic Design" : "type2", 
    "Design Development" : "type3", 
    "Construction Documents" : "type4", 
    "Bidding" : "type5",
    "Construction Admenistration" : "type6",
};



let i = 0;
let values = Object.values(months);
let keys = Object.keys(months);
let dateArea = document.querySelector(".scrollArea");
let dayname = days[i];


let phasesvalues = Object.values(phases)
let phaseskeys = Object.keys(phases)

let projectsvalues = Object.values(projects)
let projectskeys = Object.keys(projects)
let a = 0;
 
    while (a<6) {
        let phasename = phaseskeys[a];
        let phasetype = phasesvalues[a];

        let div = document.createElement("div");
        
        div.textContent = phasename;
        div.classList.add("barRow");
        div.classList.add("project1");     
/*
        let phase1 = phases[phase];*/
        div.classList.add(phasetype);  

        
        let start = projectskeys[a];
        let end = projectsvalues[a];
        console.log(projectskeys)
        console.log(start)
        div.style.setProperty('grid-column-start', start);
        div.style.setProperty('grid-column-end', end);
        dateArea.append(div);
        a++;
}




for (let key of keys) {
    let p = document.createElement("p");
    console.log(key);
    p.textContent = key;
    p.classList.add("months");
    let value1 = months[key];
    p.style.setProperty('--monthlength', value1);
    dateArea.append(p);

    for (let value of values){
        let count = 1;
        value ++; 
        while (count < value) {
            dayname = days[i];
            /*console.log(i);*/
           if (i === 6){
                console.log('hi');
                i = 0;
            } else {
                let p = document.createElement("p");
                p.textContent = count + "\n" +  dayname;
                /*if (dayname ==="S") {
                    p.classList.add("weekend");
                } else {*/
                    p.classList.add("days");
                    let value = months[key];
                    p.style.setProperty('--monthlength', value);
                    dateArea.append(p);
                    count ++;
                    /*console.log(i);*/
                    i ++;  
        }
        }
    }
}



/*
let chart = document.querySelector("#chart-location");
let height = 70;
let bar = document.createElement("div");
bar.classList.add("Bar");
bar.style.height = height + "%";
chart.appendChild(bar); */

/*

let $startDate = moment().startOf("year");
let $endDate = moment($startDate).add(14, "M").add(-1, "days");
let $totalDays = moment($endDate).diff($startDate, "days");
let $offsetDays = moment().diff(moment($startDate), "days"); */