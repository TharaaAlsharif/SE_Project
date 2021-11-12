
//function for edit button in cpp/dpp page
function edit_func() {
  var profile = document.getElementById("profile").elements;
  for (var i = 0; i < profile.length; i++) {
    profile[i].removeAttribute("disabled");
  }
}

//"createAcc" page functions: 

//Checking password function 
function checkpass() {
  var pass = document.getElementById('password').value;
  var passconfirm = document.getElementById('confirm_password').value;

  if (pass == passconfirm ){
    document.getElementById('passmessage').innerHTML = null ;

    if(pass == "" && passconfirm == ""){
      document.getElementById('passmsg').innerHTML='*';
      document.getElementById('confmessage').innerHTML='*';
    }
  }
  else {
    document.getElementById('passmsg').innerHTML=null;
    document.getElementById('confmessage').innerHTML=null;
    document.getElementById('passmessage').style.color = 'red';
    document.getElementById('passmessage').innerHTML =  ' كلمة المرور غير متطابقة *' ;
  }
}


//Checking empty fields functions 
function checkCard(){
  var exp = document.getElementById('card-exp').value;
  var cvc = document.getElementById('cvc').value ;
  var c_name =  document.getElementById('card-name').value;
  var c_number = document.getElementById('card-number').value;

  if(exp !="" && cvc !="" && c_name !="" && c_number != "" ){
      document.getElementById('cardmsg').innerHTML =  null ;
     }
     else{
      document.getElementById('cardmsg').innerHTML =  '*' ; 
     }
}

function checkname(){
  var name = document.getElementById('username').value;

  if(name == "" ){
    document.getElementById('usermsg').innerHTML = '*' ; 
  }
  else{
    document.getElementById('usermsg').innerHTML = null ;
  }
}

function checkId(){
  var id = document.getElementById('nationalId').value ;
  if(id == ""){
    document.getElementById('idmsg').innerHTML = '*';
  }
  else{
    document.getElementById('idmsg').innerHTML = null;
  }
}

function checkPhone(){
  var phone = document.getElementById('phone-number').value;
  if(phone == ""){
    document.getElementById('phonemsg').innerHTML =  '*' ;
  }
  else{
    document.getElementById('phonemsg').innerHTML =  null ;
  }
}

//Checking if the input is a number 
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

