$(document).ready(function () {
    getData().then(addLists);
    let dataHeight = $("section .filter").innerHeight();
    $("section .data").css("height", dataHeight);
    let form = document.getElementById("myForm");
    let filterForm = document.getElementById("filterForm");
    function handleForm(event) { 
        event.preventDefault(); 
    } 
    form.addEventListener('submit', handleForm);
    filterForm.addEventListener('submit', handleForm);
});
let allData = [];
let allCities = [];
let allFields = [];
let allSchools = [];
let allFees = [];
//get data from the JSON file
async function getData() {
    let apiResponse = await fetch("progs.json");
    let finalResult = await apiResponse.json();
    allData = finalResult[2].data;
    for (let i = 0; i < allData.length; i++) {
        allCities.push(allData[i].city);
        allFields.push(allData[i].type);
        allSchools.push(allData[i].school);
        allFees.push(allData[i].fee);
    }
    display();
}

//add dropdown lists
function addLists() {
    let citie = ``;
    let fields = ``;
    let schools = ``;
    for (let i = 0; i < allCities.length; i++) {
        citie += `
            <option value="${allCities[i]}">${allCities[i]}</option>
        `;
    }
    for (let i = 0; i < allFields.length; i++) {
        fields += `
            <option value="${allFields[i]}">${allFields[i]}</option>
        `;
    }
    for (let i = 0; i < allSchools.length; i++) {
        schools += `
            <option value="${allSchools[i]}">${allSchools[i]}</option>
        `;
    }
    document.getElementById("city").innerHTML = citie;
    document.getElementById("cityormore").innerHTML = citie;
    document.getElementById("field").innerHTML = fields;
    document.getElementById("school").innerHTML = schools;
}

// display data
function display() {
    let cartoona = ``;
    let src = "";
    for (let i = 0; i < allData.length; i++) {
        // image source
        switch (allSchools[i]) {
            case "TOULOUSE BUSINESS SCHOOL":
                src = "Toulouse Business School.jpg";
                break;
            case "KEDGE BS":
                src = "KEDGE BS.jpg";
                break;
            case "PARIS SCHOOL OF BUSINESS":
                src = "Paris school of Business.jpg";
                break;
            case "AUDENCIA":
                src = "AUDENCIA.png";
                break;
            case "Montpellier BS":
                src = "Montpelier Business School.jpg";
                break;
            case "EISTI":
                src = "EISTI.png";
                break;
            case "ESC CLERMONT":
                src = "ESC CLERMONT.png";
                break;
            case "SKEMA":
                src = "Skema.jpg";
                break;
            case "ESAIP":
                src = "ESAIP.png";
                break;
            case "ICN":
                src = "ICN.png";
                break;
            case "IESEG":
                src = "IESEG.png";
                break;
            case "IPAG":
                src = "IPAG.png";
                break;
            case "NEOMA":
                src = "NEOMA.png";
                break;
            case "ECAM Lyon":
                src = "ECAM Lyon.png";
                break;
            case "ISEP":
                src = "ISEP.png";
                break;
            case "EXCELIA":
                src = "EXCELIA.png";
                break;
            case "Nova SBE":
                src = "Nova SBE.png";
                break;
            case "IUBH":
                src = "IUBH.png";
                break;
            case "RENNES BUSINESS SCHOOL":
            case "SRH : Germany":
            case "UE Germany":
            case "IMT Atlantique":
            case "EPITA":
            case "ESSCA":
            case "ESSEC":
            case "EM NORMANDIE":
            default:
                src = "download.png";
                break;
        }
        cartoona += `
        <div class="col-2">
            <img src="Images/${src}" alt="" class="img-fluid">
        </div>
        <div class="col-7">
            <p class="name">${allData[i].Name}</p>
            <p class="school">${allData[i].school}</p>
            <span class="mr-3 fee">Tuition Fee</span>
            <span class="mr-5 blue">${allData[i].fee} $ per Year</span>
            <span class="blue">${allData[i].city}</span>
        </div>
        <div class="col-3 d-flex align-items-end pb-5 justify-content-center">
            <div>
            <button class="btn text-white">More info</button>
            </div>
        </div>
        <hr class="w-100">
        </div>
        `;
    }
    document.getElementById("dataRow").innerHTML = cartoona;
}

//search input [by name]
let searchInput = document.getElementById("search");
//get selected city
let cityValue = $("input[name=cityList]").focusout(function(){
    cityValue = this.value;
});
function whatToLearn(searchTerm) {
    let cartoona = ``;
    let src = "";
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].Name.toLowerCase().includes(searchTerm.toLowerCase()) || allData[i].city.toLowerCase().includes(cityValue.toLowerCase())) {
            // image source
            switch (allData[i].school) {
                case "TOULOUSE BUSINESS SCHOOL":
                    src = "Toulouse Business School.jpg";
                    break;
                case "KEDGE BS":
                    src = "KEDGE BS.jpg";
                    break;
                case "PARIS SCHOOL OF BUSINESS":
                    src = "Paris school of Business.jpg";
                    break;
                case "AUDENCIA":
                    src = "AUDENCIA.png";
                    break;
                case "Montpellier BS":
                    src = "Montpelier Business School.jpg";
                    break;
                case "EISTI":
                    src = "EISTI.png";
                    break;
                case "ESC CLERMONT":
                    src = "ESC CLERMONT.png";
                    break;
                case "SKEMA":
                    src = "Skema.jpg";
                    break;
                case "ESAIP":
                    src = "ESAIP.png";
                    break;
                case "ICN":
                    src = "ICN.png";
                    break;
                case "IESEG":
                    src = "IESEG.png";
                    break;
                case "IPAG":
                    src = "IPAG.png";
                    break;
                case "NEOMA":
                    src = "NEOMA.png";
                    break;
                case "ECAM Lyon":
                    src = "ECAM Lyon.png";
                    break;
                case "ISEP":
                    src = "ISEP.png";
                    break;
                case "EXCELIA":
                    src = "EXCELIA.png";
                    break;
                case "Nova SBE":
                    src = "Nova SBE.png";
                    break;
                case "IUBH":
                    src = "IUBH.png";
                    break;
                case "RENNES BUSINESS SCHOOL":
                case "SRH : Germany":
                case "UE Germany":
                case "IMT Atlantique":
                case "EPITA":
                case "ESSCA":
                case "ESSEC":
                case "EM NORMANDIE":
                default:
                    src = "download.png";
                    break;
            }
            cartoona += `
            <div class="col-2">
                <img src="Images/${src}" alt="" class="img-fluid">
            </div>
            <div class="col-7">
                <p class="name">${allData[i].Name}</p>
                <p class="school">${allData[i].school}</p>
                <span class="mr-3 fee">Tuition Fee</span>
                <span class="mr-5 blue">${allData[i].fee} $ per Year</span>
                <span class="blue">${allData[i].city}</span>
            </div>
            <div class="col-3 d-flex align-items-end pb-5 justify-content-center">
                <div>
                <button class="btn text-white">More info</button>
                </div>
            </div>
            <hr class="w-100">
            </div>
            `;
        }        
    }
    document.getElementById("dataRow").innerHTML = cartoona;
}
$("#searchBtn").click(function(){
    whatToLearn(searchInput.value, cityValue);
});

//filteration
var progRadios = document.getElementsByName('program');
var langRadios = document.getElementsByName('language');
var sortRadios = document.getElementsByName('sort');
let filterCity = $("input[name=filterCity]").focusout(function(){
    filterCity = this.value;
});
let schoolFilter = $("input[name=schoolFilter]").focusout(function(){
    schoolFilter = this.value;
});
let fieldFilter = $("input[name=fieldFilter]").focusout(function(){
    fieldFilter = this.value;
});
let checkedProg;
let checkedlang;
let checkedSort;
//filter function
function filter(){ 
    //get checked program
    let cartoona = ``;
    for(i = 0; i < progRadios.length; i++) { 
        if(progRadios[i].checked){
            checkedProg = progRadios[i].value;
            console.log(checkedProg);
        }
    }
    //get checked field
    for(i = 0; i < langRadios.length; i++) { 
        if(langRadios[i].checked){
            checkedlang = langRadios[i].value;
            console.log(checkedlang);
        }
    }
    //get checked program
    for(i = 0; i < sortRadios.length; i++) { 
        if(sortRadios[i].checked){
            checkedSort = sortRadios[i].value;
            console.log(checkedSort);
        }
    }
    for(let i=0; i<allData.length; i++){
        if (allData[i].Language == checkedlang && allData[i].level == checkedProg 
            || allData[i].school == schoolFilter || allData[i].city ==filterCity
            || allData[i].type == fieldFilter){
            // image source
            switch (allData[i].school) {
                case "TOULOUSE BUSINESS SCHOOL":
                    src = "Toulouse Business School.jpg";
                    break;
                case "KEDGE BS":
                    src = "KEDGE BS.jpg";
                    break;
                case "PARIS SCHOOL OF BUSINESS":
                    src = "Paris school of Business.jpg";
                    break;
                case "AUDENCIA":
                    src = "AUDENCIA.png";
                    break;
                case "Montpellier BS":
                    src = "Montpelier Business School.jpg";
                    break;
                case "EISTI":
                    src = "EISTI.png";
                    break;
                case "ESC CLERMONT":
                    src = "ESC CLERMONT.png";
                    break;
                case "SKEMA":
                    src = "Skema.jpg";
                    break;
                case "ESAIP":
                    src = "ESAIP.png";
                    break;
                case "ICN":
                    src = "ICN.png";
                    break;
                case "IESEG":
                    src = "IESEG.png";
                    break;
                case "IPAG":
                    src = "IPAG.png";
                    break;
                case "NEOMA":
                    src = "NEOMA.png";
                    break;
                case "ECAM Lyon":
                    src = "ECAM Lyon.png";
                    break;
                case "ISEP":
                    src = "ISEP.png";
                    break;
                case "EXCELIA":
                    src = "EXCELIA.png";
                    break;
                case "Nova SBE":
                    src = "Nova SBE.png";
                    break;
                case "IUBH":
                    src = "IUBH.png";
                    break;
                case "RENNES BUSINESS SCHOOL":
                case "SRH : Germany":
                case "UE Germany":
                case "IMT Atlantique":
                case "EPITA":
                case "ESSCA":
                case "ESSEC":
                case "EM NORMANDIE":
                default:
                    src = "download.png";
                    break;
            }
            cartoona += `
            <div class="col-2">
                <img src="Images/${src}" alt="" class="img-fluid">
            </div>
            <div class="col-7">
                <p class="name">${allData[i].Name}</p>
                <p class="school">${allData[i].school}</p>
                <span class="mr-3 fee">Tuition Fee</span>
                <span class="mr-5 blue">${allData[i].fee} $ per Year</span>
                <span class="blue">${allData[i].city}</span>
            </div>
            <div class="col-3 d-flex align-items-end pb-5 justify-content-center">
                <div>
                <button class="btn text-white">More info</button>
                </div>
            </div>
            <hr class="w-100">
            </div>
            `;
        }
    }
    document.getElementById("dataRow").innerHTML = cartoona;
}
$("#filterBtn").click(function(){
    filter();
});