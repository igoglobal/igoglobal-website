import ContactForm from "../../components/Contact/ContactForm";
import ContactIframe from "../../components/Contact/ContactIframe";
import ContactInbox from "../../components/Contact/ContactInbox";

import Title from "../../core/utils/Title";

function Contact () {
    return (
        <>
            <Title
                title="Contact Us"
                sectionName="Contact Us"
            />

            <div class="page-content">  
                <ContactInbox/>
                <ContactForm/>
                <ContactIframe/>
            </div>
        </>
    )
}

export default Contact;