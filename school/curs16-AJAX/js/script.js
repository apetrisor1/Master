
$(domLoaded);

function domLoaded() {
  
  // REQUEST A PARTICULAR POST
  function loadPost(whichOne) {
    function createLink(id){
      var link = 'https://jsonplaceholder.typicode.com/posts/';
      link += id;
      return link;
    }
    $.ajax({
    url: createLink(whichOne),
    method: 'GET',
    success: function(data) {
      console.log(data);
      }
    })
  }
  
  loadPost(20);
  
  
  // REQUEST TO CREATE A NEW POST
  
  var createPost = function() {
    
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'POST',
        data: {
          title: "Post by ADI",
          body: "This is the new post's content",
          userId: 11
        },
        success: function(data) {
          console.log("Created post", data);
          console.log("Created post with ID", data.id);
        }  
          
          
        })
      }
  createPost();
  
  //  REQUEST TO UPDATE A POST
  
  var editPost = function(id) {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/' + id,
      method: 'PUT',
      data: {
          title: "Updated Post by adrian",
          body: "This is the post's new content",
          userId: 11,
        },
      success: function(data) {
        console.log("Updated post with id ", data.id);
        console.log("Post is now: ", data);
      }
    })
  }
  editPost(100);
  
  //  REQUEST TO DELETE A POST
  
  var deletePost = function(id) {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/' + id,
      method: 'DELETE',
      success: function() {
        console.log(`Post deleted`);
      }
    })
  }
  deletePost(20);
  
 
   
  
  
}
