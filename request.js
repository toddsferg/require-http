var request = require("request");

readHTML("http://www.fexample.com", printHTML);

function printHTML(htmlData){
  console.log(htmlData);
}

function readHTML(url, callback){
  request(url, function(err, response, body) {
    if (err) {
      throw err;
  }
    callback(body);
  });
}
























//request useragent header