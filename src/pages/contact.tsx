import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './contact.module.css';
import { toUrl } from '../utils/connection';
import { TextInput } from '../components/common/TextInput';
import { useEffect, useReducer, useState } from 'react';
import { Button } from '../components/common/Button';
import { isMobile, isPortrait } from '../framework/settings';

export const ContactPage: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [showEmail, setShowEmail] = useState(false);

    const [name, setName] = useState("");
    const [emailSupport, setEmailSupport] = useState("");
    const [subjectSupport, setSubjectSupport] = useState("");
    const [messageSupport, setMessageSupport] = useState("");

    const [showEmailSupport, setShowEmailSupport] = useState(false);

    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const validation = (): boolean => {
        if (firstName.length <= 0) {
            alert('Please enter your first name.');
            return false;
        } else if (lastName.length <= 0) {
            alert('Please enter your last name.');
            return false;
        } else if (company.length <= 3) {
            alert('Please provide the full company name.');
            return false;
        } else if (email.length <= 4 || !email.includes('@') || !email.includes('.')) {
            alert('Please provide a valid email address.');
            return false;
        } else if (subject.length <= 3) {
            alert('Subject is too short.');
            return false;
        } else if (message.length <= 10) {
            alert('Message is too short. Please provide more information.');
            return false;
        }

        return true;
    }

    const sendEmail = (targetEmail: string) => {
        if (!validation()) {
            return;
        }
        
        const email_subject = `${subject}`;
        const email_body = `${message}

        Company: ${company}
        Name: ${firstName} ${lastName}
        Position: ${position.length > 0 ? position : 'N/A'}

        Website: ${website.length > 0 ? website : 'N/A'}
        Email: ${email}`;

        window.location.href = `mailto:${targetEmail}?subject=${encodeURI(email_subject)}&body=${encodeURI(email_body)}`;
    };

    const validationSupport = (): boolean => {
        if (name.length <= 0) {
            alert('Please enter your name or alias.');
            return false;
        } else if (emailSupport.length <= 4 || !emailSupport.includes('@') || !emailSupport.includes('.')) {
            alert('Please provide a valid email address.');
            return false;
        } else if (subjectSupport.length <= 3) {
            alert('Subject is too short.');
            return false;
        } else if (messageSupport.length <= 10) {
            alert('Message is too short. Please provide more information.');
            return false;
        }

        return true;
    }

    const sendEmailSupport = (targetEmail: string) => {
        if (!validationSupport()) {
            return;
        }
        
        const email_subject = `${subjectSupport}`;
        const email_body = `${messageSupport}

        Name: ${name}
        Email: ${emailSupport}`;

        window.location.href = `mailto:${targetEmail}?subject=${encodeURI(email_subject)}&body=${encodeURI(email_body)}`;
    };

    return (<PageContainer>
        <PageContent className={css.container}>
          <div className={mobileView ? css.boxContainerMobile : css.boxContainer}>
            <div className={css.mailContainer}>
                <h1>Business</h1>
                <div className={css.inputRow}>
                    <TextInput label='First Name *' value={firstName} onChange={setFirstName} />
                    <TextInput label='Last Name *' value={lastName} onChange={setLastName} />
                </div>
                <div className={css.inputRow}>
                    <TextInput label='Company *' value={company} onChange={setCompany} />
                    <TextInput label='Position' value={position} onChange={setPosition} />
                </div>
                <div className={css.inputRow}>
                    <TextInput label='Email *' value={email} onChange={setEmail} />
                    <TextInput label='Website' value={website} onChange={setWebsite} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.subjectInput} label='Subject *' value={subject} onChange={setSubject} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.messageContainer} value={message} multiline={true} label='Message *' onChange={setMessage} />
                </div>
                <div className={css.mailText}>Please do not email us about using your ad network or marketing our apps through your service.</div>
                <div className={css.buttonDisplay}>
                    <Button label='Send' className={css.buttonStyle} onClick={() => sendEmail("business.senapp@gmail.com")} />
                    {showEmail 
                        ? <a className={css.link} href="mailto:business.senapp@gmail.com">business.senapp@gmail.com</a>
                        : <Button label='Show Email' className={css.buttonStyle} onClick={() => setShowEmail(true)} />
                    }
                </div>

            </div>
            <div className={css.mailContainer}>
                <h1>Support</h1>
                <div className={css.inputRow}>
                    <TextInput label='Name *' value={name} onChange={setName} />
                    <TextInput label='Email *' value={emailSupport} onChange={setEmailSupport} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.subjectInput} label='Subject *' value={subjectSupport} onChange={setSubjectSupport} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.messageContainer} value={messageSupport} multiline={true} label='Message *' onChange={setMessageSupport} />
                </div>
                <div className={css.mailText}>
                    {'Please check the '}
                    <a href={toUrl('/pages/support')}>Support</a>
                    {' tab on the bottom of this page before emailing support.'}
                </div>
                <div className={css.buttonDisplay}>
                <Button label='Send' className={css.buttonStyle} onClick={() => sendEmailSupport("help.senapp@gmail.com")} />
                {showEmailSupport
                    ? <a className={css.link} href="mailto:help.senapp@gmail.com">help.senapp@gmail.com</a>
                    : <Button label='Show Email' className={css.buttonStyle} onClick={() => setShowEmailSupport(true)} />
                }
                </div>
            </div>
          </div>
        </PageContent>
    </PageContainer>);
}

ReactDOM.render(<ContactPage />, document.getElementById('root'));
