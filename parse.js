const parse = (string, operations)=> {
  return string.split('|').reduce((memo, commandString)=> {
    const parts = commandString.trim().split(' ');
    memo.push({
      operation: operations[parts[0]],
      argument: parts[1]
    });
    return memo;
  }, []);
}

module.exports = parse;
