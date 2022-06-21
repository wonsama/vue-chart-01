let source = require("./extract.data.json");

function convertData(source) {
  let linkDataArray = source.linkDataArray;
  let nodeDataArray = source.nodeDataArray;

  let nodes = {};

  for (let node of nodeDataArray) {
    nodes[node.key] = { name: node.text };
  }
  console.log(nodes);

  let edges = {};
  for (let edge of linkDataArray) {
    if (edge.from != edge.to) {
      edges[`edge_${edge.from}_${edge.to}`] = {
        source: edge.from,
        target: edge.to,
      };
    }
  }
  console.log(edges);
}

function init() {
  convertData(source);
}
init();
