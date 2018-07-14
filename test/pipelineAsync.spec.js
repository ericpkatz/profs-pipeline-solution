const expect = require('chai').expect;
const pipelineAsync = require('../pipelineAsync');
const { operations, parse, process } = pipelineAsync;
const path = require('path');

describe('async pipeline', ()=> {
  describe('parse', ()=> {
    it('parses set 1, add 2', ()=> {
      expect(parse('set 1 | add 2', operations)).to.eql([
        {
          operation: operations.set,
          argument: '1'
        },
        {
          operation: operations.add,
          argument: '2'
        }
      ]);
    });
  });
  describe('process', ()=> {
    it('process set 1, add 2', ()=> {
      process('set 1 | add 2', (err, result)=> {
        expect(result).to.equal(3);
      });
    });
    it('process set 1, addFromFile five.txt', ()=> {
      const fivePath = path.join(__dirname, '../', 'five.txt');
      process(`set 1 | addFromFile ${fivePath}`, (err, result)=> {
        expect(result).to.equal(6);
      });
    });
  });
});
