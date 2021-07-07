import React from "react";
import Xarrow from "react-xarrows";
import Map from "./Map";
import NewickTree from "./NewickTree";

import markers from "../data/markers";
import newick from "../data/newick";

function App() {
  const apiKey = process.env.REACT_APP_GMAPS_KEY;

  return (
    <div className="App">
      <div style={{ float: "left", width: "50vw", height: "100vh" }}>
        <NewickTree
          data={newick}
        />
      </div>
      <div style={{ float: "right", width: "50vw", height: "100vh" }}>
        <Map
          apiKey={apiKey}
          markers={markers}
        />
      </div>
      <Xarrow
        start="starfruit"
        end="apple"
      />
    </div>
  );
}

export default App;
