function Article(options) {
  options = options || {};
  this.id = options.id;
  this.body = options.body;
  this.title = options.title;
  this.userId = options.userId;
}

Article.prototype.getArticleDetails = function() {
  return $.get('https://jsonplaceholder.typicode.com/posts/' + this.id);
}