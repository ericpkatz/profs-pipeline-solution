const parse = require('./parse');

const process = (string)=> {
  return parse(string, operations).reduce((memo, command)=> {
    memo = command.operation(memo, command.argument);
    return memo;
  }, undefined);

}

const operations = {
  set: (input, arg )=> {
    return arg*1;
  },
  add: (input, arg)=> {
    //we need to add to something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input + arg*1;
  },
  mult: (input, arg)=> {
    //we need to multiply by something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input * arg*1;
  }
};

module.exports = {
  parse,
  operations,
  process
};
