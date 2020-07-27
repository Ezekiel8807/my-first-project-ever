// errors variable declaration
var msg = "";


// function to validate names
function validateName(name){
      
     var letters = /^[a-zA-Z\s]+$/;
      
     if(letters.test(name) === false){
 
            msg = "Enter a valid name";
            return false;
      }else{
      
          msg = "";
           return true;
      }
  }
  
 // function to validate Email address 
function validateEmail(email) {
  
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
    
        msg = "Enter a valid email address";
        return false;
        
     } else{
        msg = "";
         return true;
     }
}

// function to validate phone numbers  
function validatePhone(phone){
     
     var regex = /^\d{11}$/;
     if(regex.test(phone) === false){
     
         msg = "Enter a valid number of 11 digits";
         return msg;
         
     }else{
     
        msg = "";
        return true;
        
     }   
}


// function to validate messages
function validateMessage(message) {

     if (message.length < 5){
     
             msg = "Enter at least 5 words";
             

       } else {
              msg = "";
              return true;
       }
 }
   // the end of validation functions//
   

//errors handling
function printError(elemid, msg) {
    document.getElementById(elemid).innerHTML = msg;
}
  

   // the beginning of send functions//
function send(){
      var inputName = document.getElementById("name");
      var inputEmail = document.getElementById("email");
      var inputPhone = document.getElementById("phone");
      var inputMessage = document.getElementById("message");
      
      //inputs valued
      var name = inputName.value;
      var email = inputEmail.value;
      var phone = inputPhone.value;
      var message = inputMessage.value;
      
      
      var allError = nameError = emailError = phoneError = msgError = true; 
      
      
      if(name !== "" && email !== "" && phone !== "" && message!== ""){
      
         //Validate name
         if(validateName(name) == true){
            
            // validate Email
            if(validateEmail(email) == true){
            
              // validate phone number
              if(validatePhone(phone) == true){
               
                 //  message validation
                 if(validateMessage(message) == true){
                    
                    return true;
                    
                 }else{
                 
                    printError("msgError", msg);
                    
                 }
               }else{
               
                  printError("phoneError", msg);
               }
            }else{
               
               printError("emailError", msg);
            }
          }else{
              
              printError("nameError", msg);
          }  
      }else{
         printError("allError", "All fields required");
      }
      
      
      // Error testing return Boolean
       
      if( allError || nameError || emailError || phoneError || msgError == true){
      
          return false;
          
      }else{
      
      return true;
      }
 }     
      
      
      
// end of form validation