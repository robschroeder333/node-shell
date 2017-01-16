// Output a prompt
process.stdout.write('prompt > ');

var commands = require('./commands');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  var list = cmd.split(' ');
  var args = list.slice(1);
  //console.log(cmd); // remove the newline
  commands[list[0]](args);

  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('\nprompt > ');

});
