const breadthFirstSearch = require('./breadth-first-search');

it('should print out breadth first', () => {
  const rootNode = {
    value: 'a',
    children: [{
      value: 'b',
      children: [{
        value: 'e',
        children: [{
          value: 'h'
        }, {
          value: 'i'
        }, {
          value: 'j'
        }]
      }, {
        value: 'f',
        children: [{
          value: 'k'
        }, {
          value: 'l'
        }, {
          value: 'm'
        }]
      }, {
        value: 'g'
      }]
    }, {
      value: 'c'
    }, {
      value: 'd'
    }]
  };

  const listOfValues = [];
  const doWhatYouWantWithNode = (node) => {
    listOfValues.push(node.value)
  };
  const getChildrenOfNode = (node) => node.children || [];
  const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

  breadthFirstSearch({rootNode, doWhatYouWantWithNode, getChildrenOfNode})

  expect(JSON.stringify(listOfValues)).toBe(JSON.stringify(expected));
});