import SectionHeader from "../../SectionHeader/SectionHeader";
import TeamMembers from "../../TeamMembers/TeamMembers";
import "./Team.scss";

const Team = () => {
  return (
    <section>
      <SectionHeader>
        <h2>Team</h2>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </SectionHeader>
      <TeamMembers />
    </section>
  );
};

export default Team;
