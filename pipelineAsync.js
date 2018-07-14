const fs = require('fs');
const parse = require('./parse');


const process = (string, fn)=> {
  const commands = parse(string, operations);
  const next = (err, input)=> {
    if(err){
      fn(err);
      return;
    }
    if(commands.length === 0){
      fn(null, input);
      return;
    }
    const command = commands.shift();
    command.operation(input, command.argument, next);
  }
  next();
}

const operations = {
  addFromFile: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fs.readFile(arg, (err, result)=> {
      fn(err, input + result.toString()*1);
    });
  },
  set: (input, arg, fn) => {
    fn(null, arg*1);
  },
  add: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input + arg*1);
  },
  mult: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input * arg*1);
  }
};


module.exports = {
  parse,
  operations,
  process
};
