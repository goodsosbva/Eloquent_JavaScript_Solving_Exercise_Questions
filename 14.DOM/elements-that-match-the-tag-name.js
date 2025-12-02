function solution(node, tag) {
  const result = [];

  function traverse(curNode) {
    for (let child of curNode.childNodes) {
      if (
        child.nodeType === 1 &&
        child.tagName.toLowerCase() === tag.toLowerCase()
      ) {
        result.push(child);
      }

      traverse(child);
    }
  }

  traverse(node);
  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  const table_item = document.getElementById("mountains");
  const tags = solution(table_item, "tr");
  console.log(tags);
});
