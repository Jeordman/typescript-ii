import * as React from "react";

type Props = {
  children?: JSX.Element;
};  //? Make sure we are rendering JSX elements

const Scroll = (props: Props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
