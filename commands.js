var fs = require('fs');
var request = require('request'); 

function pwd(){
  process.stdin.on('data', function (data) {
      process.stdout.write(process.env.PWD);
      //process.stdout.write('\nprompt > ');
  });
}

function ls(){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    //process.stdout.write("prompt > ");
    //rocess.stdout.write('\nprompt > ');
  });
}

function date(){
  process.stdout.write(new Date().toString());
  process.stdout.write('\nprompt > ');
}

function echo(arr){
  if(arr[0] === '$PATH'){
    process.stdout.write(process.env.PATH);
  } else {
    process.stdout.write(arr.join(" "));
  }
}

function cat(file){
  var done = new Array(file.length);
  var fileArr = new Array(file.length);

  for(var i = 0; i < file.length; i++){
  (function(x){
    fs.readFile(file[i], "utf-8", (err, data) => {
      //console.log(i);
      if (err) throw err;
        fileArr[x] = data;
        done[x] = true;
        if(done.filter(function(el){
          return el === true;
        }).length === file.length){
            fileArr.forEach(function(el){
              process.stdout.write(el);
            });
            process.stdout.write('\nprompt > ');
        }
     });
  })(i);
  }
}

function head(file){
  var done = new Array(file.length);
  var fileArr = new Array(file.length);

  for(var i = 0; i < file.length; i++){
  (function(x){
    fs.readFile(file[i], "utf-8", (err, data) => {
      //console.log(i);
      if (err) throw err;
        fileArr[x] = data;
        done[x] = true;
        if(done.filter(function(el){
          return el === true;
        }).length === file.length){
            fileArr.forEach(function(el){
              el.split('\n').forEach(function(el, index){
                if(index < 5){
                  process.stdout.write(el + '\n');
                }
              });
            });
            process.stdout.write('\nprompt > ');
        }
     });
  })(i);
  }
}

function tail(file){
  var done = new Array(file.length);
  var fileArr = new Array(file.length);

  for(var i = 0; i < file.length; i++){
  (function(x){
    fs.readFile(file[i], "utf-8", (err, data) => {
      //console.log(i);
      if (err) throw err;
        fileArr[x] = data;
        done[x] = true;
        if(done.filter(function(el){
          return el === true;
        }).length === file.length){
            fileArr.forEach(function(el){
              el.split('\n').slice(-6).forEach(function(el, index){
                  process.stdout.write(el + '\n');
              });
            });
            process.stdout.write('\nprompt > ');
        }
     });
  })(i);
  }

}

function curl(str){
  request(str[0], function (error, response, body) {
    if (!error && response.statusCode == 200) {
      process.stdout.write(body); // Show the HTML for the Google homepage.
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = {
  pwd: pwd,
  ls: ls,
  date: date,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  curl: curl, 
}



