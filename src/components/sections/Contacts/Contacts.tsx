import SectionHeader from "../../SectionHeader/SectionHeader";
import ContactsForm from "../../ContactsForm/ContactsForm";
import Illustration from "../../../assets/contacts/Illustration.svg";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts-container">
      <SectionHeader>
        <h2>Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </SectionHeader>
      <div className="content-container">
        <ContactsForm />
        <img src={Illustration} alt="Contacts Illustration" />
      </div>
    </section>
  );
};

export default Contacts;
