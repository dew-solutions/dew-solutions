'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function submit(e:any) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(form)),
    });

    setLoading(false);
    alert('Message sent');
  }

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="phone" placeholder="Phone" />
      <textarea name="reason" placeholder="Reason" />
      <button disabled={loading}>Send</button>
    </form>
  );
}