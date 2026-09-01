import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xjgzjery");

  // close on escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    // backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#1c1c1c] w-[80vw] md:w-[60vw] rounded-xl px-12 py-12 mx-4 relative flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {state.succeeded ? (
          <p className="text-sm text-gray-500">Message sent — I'll get back to you soon.</p>
        ) : (
          <>
          <div className='flex justify-between items-start'>           
            <h1 className="text-lg mb-8">Get in touch!</h1>
            <button
              onClick={onClose}
              className="text-end"
            >
              close
            </button>
          </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border bg-transparent outline-none padding rounded-xl text-sm placeholder-gray-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="border bg-transparent outline-none padding rounded-xl text-sm placeholder-gray-400"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400" />

              <div className='flex justify-start'>
                <button type="submit" disabled={state.submitting} className="text-start px-12 py-3 rounded-xl bg-[#ebebebd9] text-[#1c1c1c] rounded-x;">
                    {state.submitting ? 'Sending...' : 'Send'}
                  </button>
              </div>


            </form>
          </>
        )}
      </div>
    </div>
  );
}