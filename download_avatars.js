var request = require('request');
var fs = require('fs');
var myArgs = process.argv.slice(2);
//getRepoContributors(myArgs[0], myArgs[1], downloadByURL);
getRepoContributors("lighthouse-labs", "laser_shark", downloadByURL);


function getRepoContributors(repoOwner, repoName, cb) {
  var endpoint = 'https://api.github.com/repos/' + repoOwner + '/' + repoName + "/contributors?access_token=f8b6234339b00d1b44045f1a46902289a689cf0a"
  var options = {
    url: endpoint,
    method: 'GET',
    headers: {
      'User-Agent': 'request'
    },
    json: true
  };
  request(options, function(err, repsonse, body){
     body.forEach(function(value){
      cb(value.avatar_url, './avatars/' + value.login + '.jpg')
    })
   })
}

function downloadByURL(url,filePath){
  request(url).pipe(fs.createWriteStream(filePath));
}
