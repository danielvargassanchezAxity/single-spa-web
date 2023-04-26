import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import { ErrorMessage } from "./components/ErrorMessage";
import Root from "./root.component";


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <ErrorMessage
        err={err}
        info={info}
        componentName='mf-navbar'
      />
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
