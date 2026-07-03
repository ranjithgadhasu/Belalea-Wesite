import ContactBanner from "../components/Contact/ContactBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactForm from "../components/Contact/ContactForm";

import Images from "../components/home/Images";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <Images />
    </>
  );
};

export default Contact;