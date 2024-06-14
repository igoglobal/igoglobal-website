import ContactForm from "../../components/Contact/ContactForm";
import ContactIframe from "../../components/Contact/ContactIframe";
import ContactInbox from "../../components/Contact/ContactInbox";
import ContactTitle from "../../components/Contact/ContactTitle";

function Contact () {
    return (
        <>
            <div class="pbmit-title-bar-wrapper">
                <ContactTitle></ContactTitle>
            </div>

            <div class="page-content">  
                <ContactInbox></ContactInbox>
                <ContactForm></ContactForm>
                <ContactIframe></ContactIframe>
            </div>
        </>
    )
}

export default Contact;