// const formData = new FormData();

// formData.append('firstName', firstName);
// formData.append('lastName',  lastName);
// formData.append('age', age);
// formData.append('typeOfInjury', typeOfInjury);
// formData.append('lengthOfInjury', lengthOfInjury);
// formData.append('timePeriod', timePeriod);

// let request = new XMLHttpRequest();
// request.open('POST', 'http://localhost:8080/player/create');
// request.send(formData);


//axios.post('http://localhost:8080/player/create', formData)


// var form = document.forms.namedItem("fileinfo");
// form.addEventListener('submit', function(ev) {

//   var oOutput = document.querySelector("div"),
//       oData = new FormData(form);

//   oData.append("CustomField", "This is some extra data");

//   var oReq = new XMLHttpRequest();
//   oReq.open("POST", "http://localhost:8080/player/create", true);
//   oReq.onload = function(oEvent) {
//     if (oReq.status == 200) {
//       oOutput.innerHTML = "Uploaded!";
//     } else {
//       oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
//     }
//   };


//let players = [];
 
let playerInfo = {

        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        typeOfInjury: document.getElementById('typeOfInjury').value,
        lengthOfInjury: document.getElementById('lengthOfInjury').value,
        timePeriod: document.getElementById('timePeriod').value

    }

JSON.stringify(playerInfo)



    console.log(playerInfo);

    let playerInfo2 = {
        firstName: "Kieran",
        lastName: "Tierney",
        age: 22,
        typeOfInjury:"dislocated shoulder",
        lengthOfInjury: 3,
        timePeriod: "months"
    }

axios({
    method: 'post',
    url: 'http://localhost:8080/player/create',
    data: playerInfo,
    headers: {'Content-Type' : 'application/json'}
    })
    .then(function (response){ 

        console.log(response);
    
    })
    .catch(function (error){

        console.log(error);
    });
    
    function myFunction() {
        var fname = document.getElementById("firstName");
        alert(fname.innerHTML);
        alert(fname.value);
      }


























































