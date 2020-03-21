const breadthFirstSearch = ({rootNode, doWhatYouWantWithNode, getChildrenOfNode}) => {

  let queue = [rootNode];
  while(queue.length > 0) {
    // get first item
    const curNode = queue[0];
    queue = queue
        // get all but the first item
        .slice(1)
        // add children
        .concat(getChildrenOfNode(curNode));

    doWhatYouWantWithNode(curNode);
  }
}

module.exports = breadthFirstSearch;