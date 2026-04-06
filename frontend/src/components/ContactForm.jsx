import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await axios.post('/api/contact', form, { timeout: 10000 });
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='grid gap-3 max-w-2xl' onSubmit={onSubmit}>
      <input name='name' value={form.name} onChange={onChange} placeholder='Your name' required />
      <input name='email' type='email' value={form.email} onChange={onChange} placeholder='Your email' required />
      <textarea name='message' value={form.message} onChange={onChange} placeholder='Your message' rows='5' required />
      <button type='submit' disabled={loading} className='bg-gradient-to-r from-fuchsia-600 to-violet-500 py-3 rounded-xl font-semibold hover:opacity-95 transition'>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {status && <p className='text-sm text-slate-200/90'>{status}</p>}
    </form>
  );
}
