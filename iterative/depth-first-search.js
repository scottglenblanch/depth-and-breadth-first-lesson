const breadthFirstSearch = ({rootNode, doWhatYouWantWithNode, getChildrenOfNode}) => {

  let queue = [rootNode];
  while(queue.length > 0) {
    // get last item
    const lastIndex = queue.length - 1;
    const curNode = queue[lastIndex];

    queue = queue
        // get all but the last item
        // note: slice is exclusive with the second parameter
        // https://www.w3schools.com/jsref/jsref_slice_array.asp
        .slice(0, lastIndex)
        // add children
        .concat(getChildrenOfNode(curNode));

    doWhatYouWantWithNode(curNode);
  }
}

module.exports = breadthFirstSearch;