import { useState } from 'react';
import { sendContactMessage } from '@/lib/contactService';

const SUCCESS_MESSAGE = "Thanks! Your message has been sent. I'll get back to you soon.";

// Form submission state for the contact section. `status` is '', 'sending', 'success', or 'error'.
export default function useContactForm() {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setResult('Sending....');

    const form = event.target;
    const { success, message } = await sendContactMessage(new FormData(form));

    if (success) {
      setStatus('success');
      setResult(SUCCESS_MESSAGE);
      form.reset();
    } else {
      setStatus('error');
      setResult(message);
    }
  };

  return { result, status, onSubmit };
}
