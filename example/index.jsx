import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import useWebShare from "../src";

function submitForm(target, actionFn) {
  const title = target.title.value;
  const text = target.text.value;
  const url = target.url.value;
  actionFn({
    title, text, url
  });
}

function App() {
  const { isSupported, loading, share } = useWebShare();
  return (
    <main className="App">
      { !loading && isSupported ? (
        <Fragment>
          <form onSubmit={(event) => { event.preventDefault(); submitForm(event.target, share)}}>
            <input type="text" placeholder="Title" name="title" />
            <input type="text" placeholder="Text" name="text" />
            <input type="text" placeholder="URL" name="url" />
            <button type="submit">Share</button>
          </form>
        </Fragment>
      ) : (
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
