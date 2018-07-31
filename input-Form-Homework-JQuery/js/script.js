// On page refresh in MS Edge (and maybe other browsers), this deletes previously
// typed information in the first and last name fields. Chrome works OK without this

$(window).on('load', function() {
  $('#fName').val('');
  $('#lName').val('');
  });


// Will call function onDomLoaded only once DOM is loaded
$(document).ready(onDomLoaded);

function onDomLoaded(){

// Upon pressing "Submit" :
// 1 checks if first name and last name are typed
// 2 shows welcome banner and saves user's info
// 3 clears form and console - on refresh OR on clear button

  $("#submit").click(function(){
              
              // Resets the formatting of required input fields on every click of submit, in case user corrects input. 
              $("#fName").css('border' , ".8px outset #13ad11");
              $('#fName').prop('placeholder' , 'First name');
              $("#lName").css('border' , ".8px outset #13ad11");
              $('#lName').prop('placeholder' , 'Last name');
              console.clear();
             
              
              //   1   Verifies if FirstName and LastName fields are filled out. 
              var verify1 = false;
              var verify2 = false;
              if($('#fName').val() !== ""){
                  verify1 = true;
                }
              if($('#lName').val() !== ""){
                   verify2 = true;
              }
              
              // One or both are NOT filled out
              if(verify1 === false){
                $("#fName").css('border' , ".8px outset #e03116");
                $('#fName').prop('placeholder' , 'First name must be filled out');
                $('banner').css('visibility' , 'hidden');
                console.log('First name not filled out');
              }
              if(verify2 === false){
                $("#lName").css('border' , ".8px outset #e03116");
                $('#lName').prop('placeholder' , 'Last name must be filled out');
                $('banner').css('visibility' , 'hidden');
                console.log('Last name not filled out');
              }
              
              // Both ARE filled out
              if(verify1 === true && verify2 ===true){
                // Makes visible the overhead banner and places inside it the text from the First Name field
                $('banner').css('visibility' , 'visible');
                $('#bannerText').html(" Thank you for visiting us " + $('#fName').val());
                console.clear(); // Clears any info from a previous user from console. Works on Chrome, does not on MS Edge
                
                 // Displays in console the user submitted information,
                console.log("Customer related information")
                console.log("First name: " + $("#fName").val());
                console.log("Last name: " + $("#lName").val());
                
                // Console log of user's gender
                if($('#male').prop('checked') === false && $('#female').prop('checked') === false){
                  console.log("Gender: Not provided")
                }else if($('#male').prop('checked') === true)
                  {
                    console.log("Gender: Male");
                  }else{console.log("Gender: Female");}
                
                // Console log of user's comments
                console.log("Comments: " + $('textarea').val());
                console.log("");
              }
              
              // Hides green banner above container when pressing "X", clears all fields, buttons and console.
              $('clearButton').click(function(){
                    $('banner').css('visibility' , 'hidden');
                    $('#fName').val('');
                    $('#lName').val('');
                    $('#male').prop('checked' , false);
                    $('#female').prop('checked' , false);
                    $('textarea').val('');
                    console.clear(); // Works on Chrome, does not on MS Edge
           });
 });
}









