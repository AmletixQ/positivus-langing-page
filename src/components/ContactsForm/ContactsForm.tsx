import Button from "../Button/Button";
import "./ContactsForm.scss";

const ContactsForm = () => {
  return (
    <form className="">
      <div className="radiobutton-container">
        <div>
          <input id="sayHi" type="radio" name="type-contact" defaultChecked />
          <label htmlFor="sayHi">
            <p>Say Hi</p>
          </label>
        </div>
        <div>
          <input id="quote" type="radio" name="type-contact" />
          <label htmlFor="quote">
            <p>Get a Quote</p>
          </label>
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea placeholder="Message" />
        </div>
      </div>
      <Button intent={"primary"}>Send Message</Button>
    </form>
  );
};

export default ContactsForm;
