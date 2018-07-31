// // Get element by id
// console.log("Comments list: ", document.getElementById("comments-list")); // will display null because when script.js loads, element is not yet defined


//  window.addEventListener("load", function(event) {
//    console.log("All resources finished loading!");
//  });


//  document.addEventListener("DOMContentLoaded", function(event) {
//    console.log("DOM fully loaded and parsed");
//    console.log("Comments list: ", document.getElementById("comments-list")); // will place the displaying of element here, it will execute only once the DOM is loaded.
//  });


// Will call function onHtmlLoaded only once DOM is loaded
// document.addEventListener("DOMContentLoaded", onHtmlLoaded);


// function onHtmlLoaded() {
//    console.log("DOM Fully loaded and parsed");
//    console.log("Comments list: ", document.getElementById("comments-list"));
//    console.log(document.getElementsByTagName('section'));
//    document.querySelector('section.comment-item'); 
//    document.querySelectorAll('section');
//    document.querySelectorAll('section.comment-item strong');
// }

document.addEventListener("DOMContentLoaded", modifyH1);

function modifyH1(){
  document.querySelector('h1').innerHTML += " <em>2018</em>";
  console.log(document.querySelector('h1').innerHTML);
}

document.addEventListener("DOMContentLoaded", function(){
  var h1 = document.querySelector('h1');
  h1.innerHTML += ' Salutari';
});


document.addEventListener("DOMContentLoaded", function(){
  var h2 = document.querySelector('h2');
  h2.setAttribute('title', 'Title of h2'); // in this case, title the same as content, doesnt have to be
  console.log(h2.getAttribute('title'));
  console.log(h2);
});


// CREATING NEW CONTENT, HERE ADDING A COMMENT !!! VERY IMPORTANT
document.addEventListener("DOMContentLoaded", function(){
  var commentItem = document.createElement('section');
  commentItem.className = 'comment-item';
  commentItem.innerHTML = ' <h3> Comment 3 </h3> ' +
                          ' <p>  Comment 3 content <strong>New Guy</strong>  </p>';
  // It is not yet displayed
  // Have to add it to the comments array, owned by the parent, here the Div with id 'comments-list'.
  document.getElementById('comments-list').appendChild(commentItem); 
});



// TAKING COMMENTS FROM AN ARRAY, here: "list"
document.addEventListener("DOMContentLoaded", function(){
  var list = [
  {
    title: "comment 4",
    body: "Lorena is love Lorena is life",
    author: "Loredana"
  },
  {
    title: "comment 5",
    body: "salut",
    author: "adi"
  },
  {
    title: "comment 6",
    body: "hello world ",
    author: "steve jobs "
  },
  {
    title: "comment 7",
    body: "hey",
    author: "smoothguy"
  },
];

for (var i = 0; i < list.length; i++)
{
    var keeper = list[i];
    var newComment = document.createElement('section');
    newComment.className = ('comment-item');
    newComment.innerHTML += '<h3>' + keeper.title + '</h3>' +
                             keeper.body + '<b> ' + keeper.author + '</b>';
    document.getElementById('comments-list').appendChild(newComment); 
}
  
  
  
  
  
  
  
});








