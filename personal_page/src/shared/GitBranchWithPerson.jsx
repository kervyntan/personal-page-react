import React from "react";
import PersonSVG from "./PersonSVG";
import GitBranch from "./GitBranch";

const GitBranchWithPerson = (props) => {
  return (
    <div className="git__branch__container">
      <PersonSVG />
      <GitBranch className="fifty" />
    </div>
  );
};

export default GitBranchWithPerson;
