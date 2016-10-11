var http = require("http");



function readHTML(url, callback){
  var requestOptions = {
    host: url,
    path: "/"
  }

  http.get(requestOptions, (response) => {

    response.setEncoding("utf8");
    var html;
    response.on("data", function(data) {
    html = data.toString();
      console.log("Chunk Received. Length:", data.length);

    });

    response.on("end", function() {
      console.log("Response stream complete.");
      callback(html);
    });
  });
}


readHTML('fexample.com', function writeHTML(datainput){
  console.log(datainput);
});