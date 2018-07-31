// DOM Loaded function 
$(onHtmlLoaded);

function onHtmlLoaded(){
 console.log("On Html Loaded"); 
}

// FINDING ELEMENT

// by id - jquery element
console.log('Comments: ', $('#comments-list'));
// by id - native DOM element
console.log('Comments: ', $('#comments-list')[0]);

// by class - jqeury element
console.log('Item: ', $('.comment-item'));
// by class - native DOM element
console.log('Item: ', $('.comment-item')[0]);

// by tag
console.log('Title: ', $('h1'));
// by tag - native DOM element
console.log('Title: ', $('h1')[0]);
           
// by query selector 
console.log("Author: ", $('section.comment-item strong'));


$(alterStuff);

function alterStuff(){
  
// ALTERING ELEMENTS
var h1 = $('h1');
h1.text('jQuery DOM Manipulation New');
h1.html('jQuery DOM Manipulation <em>New</em>');  

var h2 = $('h2');
h2.attr('title', 'Comment List'); // set attribute of 'title' to 'Comment List', or create it as such if it doesn't exist
console.log("H2's title", h2.attr('title')); // get the title of h2
  
  
// Styling with jQuery  
var commentsContainer = $('#comments-list');
  
// Styling border to be 1px solid green  
commentsContainer.css('border', 'solid 1px green');  //    element.css('name of attribute', 'value');
 
// Styling multiple attributes at a time  
commentsContainer.css({
  color: 'blue',
  background: '#ccc'
});

// Show styled attribute  
console.log('Border of comments list: ', commentsContainer.css('border'));
  
// Add new comment
var comment = '<section>' +
                '<h3> New Comment </h3>' +
                '<p> Comment 3 content <strong> Author </strong> </p>' +
               '</section>';
$('#comments-list').append(comment);
  
  
  var list = [
  {
    title: "comment 4",
    body: "Lorena is love Lorena is life",
    author: "Loredana"
  },
  {
    title: "comment 5",
    body: "salut ",
    author: "adi"
  },
  {
    title: "comment 6",
    body: "hello world ",
    author: "steve jobs "
  },
  {
    title: "comment 7",
    body: "hey ",
    author: "smoothguy"
  },
];
  
for(var i = 1 ; i < list.length; i++)
  {
    var keeper = list[i];
    var comment2 = '<section>' +
                   '<h3>'+ keeper.title  +'</h3>' +
                   '<p>' + keeper.body + '<strong>'+ keeper.author + '</strong> </p>' +
                   '</section>';
    $('#comments-list').append(comment2);
  }
  
}

  




