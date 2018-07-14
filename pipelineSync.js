const parse = (string)=> {
  return string.split('|').reduce((memo, commandString)=> {
    const parts = commandString.trim().split(' ');
    memo.push({
      operation: operations[parts[0]],
      argument: parts[1]
    });
    return memo;
  }, []);
}

const process = (string)=> {
  return parse(string).reduce((memo, command)=> {
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
