import { ITeamMembers } from "../TeamMembers";
import LN from "../../../assets/icons/LN.svg";
import { FC } from "react";
import "./TeamMember.scss";

const TeamMember: FC<ITeamMembers> = ({
  illustration,
  fullname,
  position,
  experience,
}) => {
  return (
    <div className="member-container">
      <div className="content">
        <img src={illustration} alt="Illustration" />
        <div className="member-info">
          <h4>{fullname}</h4>
          <p>{position}</p>
          <img className="ln-icon" src={LN} alt="LN" />
        </div>
      </div>
      <hr />
      <p>{experience}</p>
    </div>
  );
};

export default TeamMember;
