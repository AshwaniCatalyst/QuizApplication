var buttonShow = document.getElementById("name-validator-button");
var nameInput = document.getElementById("user-name-input");
var mailInput = document.getElementById("mail-input");
var errorMessage1 = document.getElementById("error-message-1");
var errorMessage2 = document.getElementById("error-message-2");
var errorMessage3 = document.getElementById("error-message-3");
var dob = document.getElementById("dob");
var address = document.getElementById("address");
var details_button = document.getElementById("details-validator-button");

 var flag1=0, flag2=0, flag3=0;
 

function name_validate() {
  if (nameInput.value.length < 3) {
    buttonShow.disabled = true;
  } else {
    buttonShow.disabled = false;
  }
}

function validate_name_button(){
    var user_name = nameInput.value;
    sessionStorage.setItem("userName", user_name);
    
    return false;
}



mailInput.addEventListener("change", () => {
  if (!mailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMessage1.style.display="block";
    errorMessage1.innerHTML = "Please check your E-mail!!!";
    errorMessage1.style.color = "red";
    flag1=0;
    return false;
  }
  else{
  flag1 = 1;
  errorMessage1.style.display="none";
  errorMessage1.innerHTML = "";
  return true; }
});

dob.addEventListener("change", () => {
  var age = parseInt(dob.value, 10);
  var today = new Date();
  var currentYear = today.getFullYear();
  if (currentYear - age < 18) {
    errorMessage2.style.display="block";
    errorMessage2.innerHTML = "Age must be greater than 18!!!";
    errorMessage2.style.color = "red";
    flag2=0;
    return false;
  } else {
          flag2 = 1;
          errorMessage2.style.display="none";
    errorMessage2.innerHTML = "";
    return true;
  }
});

address.addEventListener("input", () => {
  if(address.value.length===0)
  {
    errorMessage3.innerHTML = "";
  }
  if (address.value.length < 3 && address.value.length >= 1) {
    errorMessage3.style.display="block";
    errorMessage3.innerHTML = "Enter Valid Address!!!";
    errorMessage3.style.color = "red";
    flag3=0;
    return false;
  } else {
    flag3 = 1;
    errorMessage3.style.display="none";
    errorMessage3.innerHTML = "";
    return true;
  }
});

setInterval(buttonUpdate, 200)

function buttonUpdate(){
  if(flag1==1 && flag2==1 && flag3==1)
  {
    
    details_button.disabled = false;
  }
   else{
    
    details_button.disabled = true;
   }
  };

  details_button.addEventListener('click', ()=>{
    
    if(!sessionStorage.getItem("time")==0)
    {
      alert("You Have Already Given The Test");
      var time=0;
      sessionStorage.setItem('time',time);
      window.location="index.html";
    }
    else{
      window.location="test-screen-one.html";
    }

  } );