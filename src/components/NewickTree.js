import Tree from "react-d3-tree";
import "../css/node.css";

function NewickTree({ data }) {
  return (
    <Tree
      data={data}
      rootNodeClassName="node__root"
      branchNodeClassName="node__branch"
      leafNodeClassName="node__leaf"
      pathFunc="elbow"
      translate={{ x: 50, y: 500 }}
    />
  );
}

export default NewickTree;
