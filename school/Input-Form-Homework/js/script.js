// On page refresh in MS Edge (and maybe other browsers), this deletes previously
// typed information in the first and last name fields. Chrome works OK without this
window.onload = function() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  }


// Will call function onDomLoaded only once DOM is loaded
document.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded(){

// Upon pressing "Submit" :

 document.getElementById("submit").onclick = function(){
          
              // Resets the formatting of required input fields on every click of submit, in case user corrects input. 
              // Checks will be repeated on fields on every submit.
   
              document.getElementById("fName").style.border = ".8px outset #13ad11";
              document.getElementById("fName").placeholder = "First name";
              document.getElementById("lName").style.border = ".8px outset #13ad11";
              document.getElementById("lName").placeholder = "Last name";
   
             
              
              // Verifies if FirstName and LastName fields are filled out. 
              var verify1 = false;
              var verify2 = false;
              if(document.getElementById("fName").value !== "")
                verify1 = true;
              if(document.getElementById("lName").value !== "")
                verify2 = true;
              
              // They are not filled out
              if(verify1 === false){
                document.getElementById("fName").style.border = ".8px inset #e03116";
                document.getElementById("fName").placeholder = "First name must be filled out";
                document.getElementsByTagName("banner")[0].style.visibility = "hidden";
              }
              if(verify2 === false){
                document.getElementById("lName").style.border = ".8px inset #e03116";
                document.getElementById("lName").placeholder = "Last name must be filled out";
                document.getElementsByTagName("banner")[0].style.visibility = "hidden";
              }
              
              // They are filled out
              if(verify1 === true && verify2 ===true){
                // Makes visible the overhead banner and places inside it the text from the First Name field
                document.getElementsByTagName("banner")[0].style.visibility = "visible";
                document.getElementById("bannerText").innerHTML = 'Thank you for visiting us, ' + document.getElementsByName("FirstName")[0].value;
                 // Displays in console the user submitted information,
                console.log("Customer related information")
                console.log("First name: " + document.getElementsByName("FirstName")[0].value);
                console.log("Last name: " + document.getElementsByName("LastName")[0].value);
                if(document.getElementsByName("Gender")[0].checked === false && document.getElementsByName("Gender")[1].checked === false){
                  console.log("Gender: Not provided")
                }else if(document.getElementsByName("Gender")[0].checked === true)
                  {
                    console.log("Gender: Male");
                  }else{console.log("Gender: Female");}
                console.log("Comments: " + document.getElementsByTagName("textarea")[0].value);
                console.log("");
              }
              
              // Hides green banner above container when pressing "X", clears all fields and console.
              document.getElementsByTagName("closeButton")[0].onclick = function (){
                    document.getElementsByTagName("banner")[0].style.visibility = "hidden";
                    document.getElementById("fName").value = '';
                    document.getElementById("lName").value = '';
                    document.getElementsByName("Gender")[0].checked = false;
                    document.getElementsByName("Gender")[1].checked = false; 
                    document.getElementsByTagName("textarea")[0].value = '';
                    console.clear(); // Works on Chrome, does not on MS Edge
           }
 }
}









