$(domLoaded);

function domLoaded() {
  
  // Save the API's URL so that if u need to change it you can change it here only.
  let apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
  
  function getPosts() {
     $.ajax({
       url: apiUrl,
       method: 'GET',
       success: function(data) {
         for(var i = 0; i < data.length; i++){
                     var title = "<h3>" + data[i].title + "</h3>"
                     $('wrapper').append(title);
         }
       }
     })
   }
   getPosts();
  
  
  
  
//    $('#delete-post').click(function() {
     
//     let deleted = $('#delete').val();
//     deletePost(deleted);

//     function deletePost(id) {
//       $.ajax({
//         url: apiUrl + id,
//         method: 'DELETE',
//         success: function() {
//           console.log(`Post deleted`);
//         }
//       })
//     }
     
//   })
  
}