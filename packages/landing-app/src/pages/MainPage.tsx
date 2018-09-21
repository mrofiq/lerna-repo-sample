import * as React from "react";
import { Button, Intent, Spinner, Classes } from "@blueprintjs/core";
import { add } from "@bmd/core";
import { Button as B } from "@bmd/components";

export interface MainPageProps {}

export interface MainPageState {}

export default class MainPageComponent extends React.Component<
  MainPageProps,
  MainPageState
> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {};
    let a = add(1, 1);
    console.log(a);
  }

  public render() {
    return (
      <div>
        <p>MainPage Component Edited</p>
        <B label="ini" onClick={() => console.log("clicked")}>
          Test
        </B>
        <Spinner className={Classes.SMALL} intent={Intent.PRIMARY} />
      </div>
    );
  }
}
