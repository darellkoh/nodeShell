var commands = require("./commands.js");
var userCommand = 'pwd';
//commands[userCommand]();
//console.log(process);

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var cmdSplit = cmd.split(' ');
  var command = cmdSplit[0];
  var args = cmdSplit.slice(1);
  var date = new Date();

  if (command === 'pwd'){
    commands['pwd'](args);
  }
  if (command === 'date'){
    commands['date'](args);
  }

  if(command === 'ls'){
    commands['ls'](args);
  }

  if(command === 'echo'){
    commands['echo'](args);
  }

  if(command === 'cat'){
    commands['cat'](args);
  }

  if(command === 'head'){
    commands['head'](args);
  }

  if(command === 'tail'){
    commands['tail'](args);
  }

  if(command === 'curl'){
  commands['curl'](args);
  }

  if(command === 'sort'){
    commands['sort'](args);
  }

  if(command === 'wc'){
    commands['wc'](args);
  }

  if(command === 'uniq'){
    commands['uniq'](args);
  }


});

