
var exports = module.exports = {};

exports.pwd = function(){
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

exports.date = function(){
  var dateTime = new Date();
  dateTime = '' + dateTime;
  process.stdout.write(dateTime);
  process.stdout.write('\nprompt > ');
};

exports.ls = function(){
  var fs = require('fs');
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
};

exports.echo = function(args){
  process.stdout.write(args.join(' ') + '\n');
  process.stdout.write('prompt > ');

};

exports.cat = function(args){
  var fs = require('fs');
  fs.readFile('./' + args, function(err, contents){
    if (err) throw err;
    process.stdout.write(contents);
    process.stdout.write('prompt > ');
  });
};

exports.head = function(args){
  var fs = require('fs');
  var lines;
  fs.readFile('./' + args, function(err, contents){
    if (err) throw err;
    contents = contents.toString();
    lines = contents.split('\n');
    for (var x = 0; x < 5; x++) {
      process.stdout.write(lines[x] + '\n');
    }
    process.stdout.write('prompt > ');
  });
};


exports.tail = function(args){
  var fs = require('fs');
  var lines;
  fs.readFile('./' + args, function(err, contents){
    if (err) throw err;
    contents = contents.toString();
    lines = contents.split('\n');
    for (var x = lines.length-6; x < lines.length; x++) {
      process.stdout.write(lines[x] + '\n');
    }
    process.stdout.write('prompt > ');
  });
};

exports.curl = function(args){
  var request = require('request');
  request('http://' + args, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
    process.stdout.write('prompt > ');
  });
  //console.log('yo');

};
