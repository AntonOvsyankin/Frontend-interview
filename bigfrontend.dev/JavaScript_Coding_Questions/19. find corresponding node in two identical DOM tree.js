
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    const queueA = [rootA];
    const queueB = [rootB];
  
    while (queueA.length > 0) {
      let curr1 = queueA.pop();
      let curr2 = queueB.pop();
      if (curr1 === target) return curr2;
      queueA.unshift(...curr1.children);
      queueB.unshift(...curr2.children);
    }
  }