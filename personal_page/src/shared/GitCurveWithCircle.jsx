import React from "react";
import GitCurve from "./GitCurve";
import GitCurveReversedSVG from "./GitCurveReversedSVG";
import GitBranch from "./GitBranch";
import Circle from "./Circle";

const GitCurveWithCircle = () => {
  return (
    <div className="git__branch__container flex">
      <div className="git__branch two-hundred"> </div>
      <div className="git__branch__content">
        <div className="git__curve">
          <GitCurve />
          <div className="git__branch__circle flex">
            <div className="git__branch__circle__left">
              <Circle />
              <GitBranch className="hundred git-straight" />
              <GitCurveReversedSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCurveWithCircle;
