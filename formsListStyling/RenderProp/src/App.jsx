import React from "react";
import { MouseTracker } from "./MouseTracker";

export class App extends React.Component {
  render() {
    return (
      <MouseTracker>
        {(position) => {
          const [x, y] = position;
          // prendiamo il valore dlel'argomento del file mouse tracker e dichiariamo x e y per associare quei valori, dopodicchè andiamo a renderli in un tag h1 con il delegate
          return (
            <div>
              <h1>
                The current position is {x}, {y}
              </h1>
            </div>
          );
        }}
      </MouseTracker>
    );
  }
}
