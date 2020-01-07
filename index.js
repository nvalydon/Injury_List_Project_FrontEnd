     function sendPlayerData(){
        let playerInfo = {

            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            age: document.getElementById('age').value,
            typeOfInjury: document.getElementById('typeOfInjury').value,
            lengthOfInjury: document.getElementById('lengthOfInjury').value,
            timePeriod: document.getElementById('timePeriod').value
    
        };
        JSON.stringify(playerInfo);
        axios.post('http://localhost:8080/player/create', playerInfo)
        .then(function (response){ 

            console.log(response);
        
        })
        .catch(function (error){
    
            console.log(error);


     })
    }     

function sendPositionData(){

    let positionInfo = {
        position: document.getElementById('position').value
    };
    JSON.stringify(positionInfo);
    axios.post('http://localhost:8080/position/create',positionInfo)
    .then(function (response){ 

        console.log(response);
    
    })
    .catch(function (error){

        console.log(error);


 })
}

function validateForm(){
    var hasNumber = /\d/;
    let fn = document.playerInputData.firstName.value;
    let ln = document.playerInputData.lastName.value;
    let age = document.playerInputData.age.value;
    let posn = document.playerInputData.position.value;
    let DoI = document.playerInputData.typeOfInjury.value;
    let LoI = document.playerInputData.lengthOfInjury.value;
    
    //First Name Validation
    if(fn == "") {
        alert( "Please Enter a First Name" );
        document.playerInputData.firstName.focus();
        document.getElementById('firstName').style.backgroundColor = "#f54c4c";
        return false;
     }else{
        document.getElementById('firstName').style.backgroundColor = "green";
    }
    if( hasNumber.test(fn)) {
         alert( "Error - Name Cannot Contain Numbers" );
         document.playerInputData.firstName.focus() ;
         document.getElementById('firstName').style.backgroundColor = "#f54c4c";
         return false;
     }
    if( fn.length < 2 ) {
        alert( "First Name Too Short" );
        document.playerInputData.firstName.focus();
        document.getElementById('firstName').style.backgroundColor = "#f54c4c";
        return false;
    }
    if( fn.length > 200 ) {
        alert( "First Name Too Long" );
        document.playerInputData.firstName.focus();
        document.getElementById('firstName').style.backgroundColor = "#f54c4c";
        return false;
    }

    //Last Name Validations
     if(  ln == "" ) {
        alert( "Please Enter a Last Name" );
        document.playerInputData.lastName.focus();
        document.getElementById('lastName').style.backgroundColor = "#f54c4c";
        return false;
     }
    if( hasNumber.test(ln)) {
         alert( "Error - Last Name cannot contain numbers" );
         document.playerInputData.lastName.focus() ;
         document.getElementById('lastName').style.backgroundColor = "#f54c4c";
         return false;
     }
     if( ln.length < 2 ) {
        alert( "Last Name Too Short" );
        document.playerInputData.lastName.focus();
        document.getElementById('lastName').style.backgroundColor = "#f54c4c";
        return false;
     }
     if( ln.length > 200 ) {
        alert( "Last Name Too Long" );
        document.playerInputData.lastName.focus();
        document.getElementById('lastName').style.backgroundColor = "#f54c4c";
        return false;
    }
    
    //Age Validations
    if(age == "" ) {
        alert( "Please Enter an Age" );
        document.playerInputData.age.focus();
        document.getElementById('age').style.backgroundColor = "#f54c4c";
        return false;
     }
    if(age < 1 || age > 120){
        alert( "Age Must be Greater than 1 and less than 120" );
        document.playerInputData.age.focus();
        document.getElementById('age').style.backgroundColor = "#f54c4c";
        return false;
    }

    //Position Validation
    if(  posn == "" ) {
        alert( "Please Enter a Position" );
        document.playerInputData.position.focus();
        document.getElementById('position').style.backgroundColor = "#f54c4c";
        return false;
     }
    if( hasNumber.test(posn)) {
         alert( "Error - Position cannot contain numbers" );
         document.playerInputData.position.focus();
         document.getElementById('position').style.backgroundColor = "#f54c4c";
         return false;
     }
    if( posn.length > 3) {
        alert( "Please Use Position Abbreviations" );
        document.playerInputData.position.focus();
        document.getElementById('position').style.backgroundColor = "#f54c4c";
        return false;
     }
     if( posn.length == 1) {
        alert( "Position must be longer" );
        document.playerInputData.position.focus();
        document.getElementById('position').style.backgroundColor = "#f54c4c";
        return false;
     }

     //Description of Injury Validation
     if(DoI == "") {
        alert( "Please Enter a Description of the Injury" );
        document.playerInputData.typeOfInjury.focus();
        document.getElementById('typeOfInjury').style.backgroundColor = "#f54c4c";
        return false;
     }

     if( hasNumber.test(DoI)) {
        alert( "Error - Description cannot contain numbers" );
        document.playerInputData.typeOfInjury.focus();
        document.getElementById('typeOfInjury').style.backgroundColor = "#f54c4c";
        return false;
    }

    if(DoI.length ==1 || DoI.length >= 150 ){
        alert( "Error - Description must be between 1 and 150 Characters" );
        document.playerInputData.typeOfInjury.focus();
        document.getElementById('typeOfInjury').style.backgroundColor = "#f54c4c";
        return false;
    }

    //Length Of Injury Validation
    if(LoI == "" ) {
        alert( "Please Enter a Length Of Injury" );
        document.playerInputData.lengthOfInjury.focus();
        document.getElementById('lengthOfInjury').style.backgroundColor = "#f54c4c";
        return false;
     }
    if(LoI < 1){
        alert( "Length of Injury Must be Greater than 1" );
        document.playerInputData.lengthOfInjury.focus();
        document.getElementById('lengthOfInjury').style.backgroundColor = "#f54c4c";
        return false;
    }


     

     


}








