import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import useWebShare from "../src";

function App() {
  const { isSupported, config, loading, share } = useWebShare();
  return (
    <main className="App">
      { isSupported ? <p>Supported</p> : (
        <div style={{ textAlign: "center", paddingTop: "10%" }}>
          <p>
            <span>Your browser does not support </span>
            <a target="__blank" href="https://developers.google.com/web/updates/2016/09/navigator-share">Web Share API</a>
          </p>
          <sub>The Sadness :(</sub>
        </div>
      )}
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
