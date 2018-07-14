const expect = require('chai').expect;
const pipelineSync = require('../pipelineSync');
const { operations, parse, process } = pipelineSync;

describe('sync pipeline', ()=> {
  describe('parsing', ()=> {
    it('parses set 1', ()=> {
      const commands = pipelineSync.parse('set 1', operations);
      expect(commands.length).to.equal(1);
      expect(commands[0]).to.eql({
        operation: operations.set,
        argument: '1'
      });
    });
    it('parses set 1 | add 2', ()=> {
      const commands = pipelineSync.parse('set 1 | add 2', operations);
      expect(commands.length).to.equal(2);
      expect(commands).to.eql([
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
    it('can process set 1 | add 2', ()=> {
      expect(process('set 1 | add 2')).to.equal(3);
    });
    it('can process set 1 | add 2 | mult 5', ()=> {
      expect(process('set 1 | add 2 | mult 5')).to.equal(15);
    });

  });
});
