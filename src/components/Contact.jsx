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
        className="bg-[var(--background)] w-[80vw] md:w-[60vw] rounded-[16px] md:p-12 p-6 mx-4 relative flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {state.succeeded ? (
          <div className='flex flex-col gap-4'>
            <h5>Message Sent</h5>
            <h2 className="">Thanks for your message. I'll get back to you soon.</h2>
          </div>
        ) : (
          <>
          <div className='flex flex-col gap-8 items-start'> 
            <div className='flex w-full justify-between'>
              <h5>GOT A PROJECT?</h5>    
              <button
                onClick={onClose}
              >
                <h5>
                  CLOSE
                </h5>

              </button>
            </div>
            <h1 >Get in touch!</h1>

          </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border outline-none padding py-4 rounded-[16px] caption"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="border outline-none padding py-4 rounded-[16px] caption"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400" />

              <div className='flex justify-start'>
                <button type="submit" disabled={state.submitting} className="w-full padding py-4 bg-[var(--foreground)] rounded-[16px]">
                  <h5 className='text-[var(--background)]'>
                  {state.submitting ? 'SENDING...' : 'SEND'}
                  </h5>
                </button>
              </div>


            </form>
          </>
        )}
      </div>
    </div>
  );
}