import il1 from "../../assets/team/Picture-1.svg";
import il2 from "../../assets/team/Picture-2.svg";
import il3 from "../../assets/team/Picture-3.svg";
import il4 from "../../assets/team/Picture-4.svg";
import il5 from "../../assets/team/Picture-5.svg";
import il6 from "../../assets/team/Picture-6.svg";
import Button from "../Button/Button";

import TeamMember from "./TeamMember/TeamMember";
import "./TeamMembers.scss";

export interface ITeamMembers {
  illustration: string;
  fullname: string;
  position: string;
  experience: string;
}

const members: ITeamMembers[] = [
  {
    illustration: il1,
    fullname: "John Smith",
    position: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    illustration: il2,
    fullname: "Jane Doe",
    position: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    illustration: il3,
    fullname: "Michael Brown",
    position: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    illustration: il4,
    fullname: "Emily Johnson",
    position: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    illustration: il5,
    fullname: "Brian Williams",
    position: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    illustration: il6,
    fullname: "Sarah Kim",
    position: "Content Creator",
    experience:
      "2+ years of experience in writing and editing\nkilled in creating compelling, SEO-optimized content for various industries",
  },
];

const TeamMembers = () => {
  return (
    <section className="teammembers-container">
      {members.map((member) => (
        <TeamMember {...member} />
      ))}

      <Button intent="primary">See all team</Button>
    </section>
  );
};

export default TeamMembers;
