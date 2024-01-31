
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/formspree.css'


export function ContactForm() {
    const [state, handleSubmit] = useForm("mleqgkjk");
    if (state.succeeded) {
        return <p className='success'>Your message has been sent successfully!</p>;
    }
return (
    <form onSubmit={handleSubmit} className='form'>
        <h2 className='formHead'>We want to hear from you</h2>
        <h3 className='formHeading'>If you have any questions or comments, please contact us:</h3>
        <label 
            htmlFor="email"
            className='email'> Email* </label>
        <input
            id="email"
            type="email" 
            name="email"
            required=""
            placeholder='Enter your email'
            className='textarea'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label 
            className='email'> Comments </label>
        <textarea
            id="message"
            name="message"
            placeholder='Type your message'
            className='textarea'
            required=""
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <button className='btnSubmit' type="submit" disabled={state.submitting}>Submit</button>
    </form>
    );
}
