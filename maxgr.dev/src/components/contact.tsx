import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        //e.preventDefault();

        alert("Form submitted!");
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default Contact;