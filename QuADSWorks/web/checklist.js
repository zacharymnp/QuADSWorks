// JavaScript code for the checklist.html page

function getReqs() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const major = urlParams.get('major');
    const year = urlParams.get('year');
    console.info(major);
    console.info(year);

    return fetch("../data/programs.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data[year][major]["reqs"])).toString();
}

function generateCheckbox() {
    let json = getReqs();
    console.log(json);

    for (let course of json) {
        //create input element for the course
        courseInput = document.createElement("input")
        courseInput.setAttribute("type", "checkbox");
        courseInput.setAttribute("id", course);
        //create label element for the course
        courseLabel = document.createElement("label")
        courseLabel.setAttribute("for", course);
        courseLabel.innerHTML = course;
    }
}