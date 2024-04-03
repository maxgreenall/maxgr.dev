import { Input, Button, Textarea, Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [typeOfEnquiry, setTypeOfEnquiry] = useState('');
    const [message, setMessage] = useState('');

    const [state, handleSubmit] = useForm("mrgnydln");
    if (state.succeeded) {
        confetti({
            particleCount: 100,
            spread: 360,
            origin: { y: 0.5 },
        });
        return <p className='mb-3'>Thank you for your message. I will respond to you as soon as possible. 👏</p>
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-6 mb-3 flex-col'>
            <p>Feel free to reach out to me for any inquiries or just to say hi 👋</p>

            <div className='flex gap-3 flex-col'>
                <Input
                    label="Name"
                    name="name"
                    isRequired
                    id='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <ValidationError field="name" prefix="name" errors={state.errors} />
                
                <Input
                    label="Email"
                    type="Email"
                    name="email"
                    id='Email'
                    isRequired
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ValidationError field="email" prefix="email" errors={state.errors} />

                <Autocomplete
                    label="Type of enquiry"
                    placeholder='Select an option'
                    name="type of enquiry"
                    id='TypeOfEnquiry'
                    value={typeOfEnquiry}
                    onChange={(e) => setTypeOfEnquiry(e.target.value)}
                    isRequired
                >
                    <AutocompleteItem value="General" key="General">🌍 General</AutocompleteItem>
                    <AutocompleteItem value="Feedback" key="Feedback">📣 Feedback</AutocompleteItem>
                    <AutocompleteItem value="Bug report" key="Bug report">🐛 Bug report</AutocompleteItem>
                    <AutocompleteItem value="Feature request" key="Feature request">💡 Feature request</AutocompleteItem>
                    <AutocompleteItem value="Other" key="Other">🤔 Other</AutocompleteItem>
                </Autocomplete>
                <ValidationError field="type of enquiry" prefix="type of enquiry" errors={state.errors} />

                <Textarea
                    label="Message"
                    name="message"
                    id='Message'
                    isRequired
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <ValidationError field="message" prefix="message" errors={state.errors} />
                <Button type="submit" disabled={state.submitting} color='primary'>
                    Submit ✉️
                </Button>
            </div>
        </form>
    );
}

export default Contact;