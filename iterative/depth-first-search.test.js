const depthFirstSearch = require('./depth-first-search');

it('should print out breadth first', () => {
  const rootNode = {
    value: 'a',
    children: [{
      value: 'f'
    }, {
      value: 'b', children: [{
        value: 'c',
        children: [{
          value: 'e',
        }, {
          value: 'd'
        }]
      }]
    }]
  };

  const listOfValues = [];
  const doWhatYouWantWithNode = (node) => {
    listOfValues.push(node.value)
  };
  const getChildrenOfNode = (node) => node.children || [];
  const expected = [ 'a', 'b', 'c', 'd', 'e', 'f' ];

  depthFirstSearch({ rootNode, doWhatYouWantWithNode, getChildrenOfNode });

  expect(JSON.stringify(listOfValues)).toBe(JSON.stringify(expected));
});