import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
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
        <div className="container">
          <h1>Let's Share</h1>
          <form onSubmit={(event) => { event.preventDefault(); submitForm(event.target, share)}}>
            <fieldset>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Naval Ravikant – The Joe Rogan Experience" name="title" />
            </fieldset>
            <fieldset>
              <label htmlFor="text">Text</label>
              <input type="text" id="text" placeholder="Listen to this Podcast" name="text" />
            </fieldset>
            <fieldset>
              <label htmlFor="url">URL</label>
              <input type="text" id="url" placeholder="https://podcastnotes.org/2019/06/05/naval-joe-rogan/" name="url" />
            </fieldset>
            <button type="submit">Share</button>
          </form>
        </div>
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
