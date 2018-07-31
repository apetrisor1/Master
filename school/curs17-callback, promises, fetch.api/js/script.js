$(domLoaded);

function domLoaded() {
  
  $('#button1').click(showMessage);
  
  function showMessage(){
      setTimeout(function(){
      console.log('Salut Dane');
    },2000);
      setTimeout(function(){
      $('html').toggleClass('wait');
    },2050);
  }
  
}

