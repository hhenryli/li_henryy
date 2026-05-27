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
        className="bg-white rounded-lg w-[50vw] p-8 mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="links mb-8 text-sm"
        >
          close
        </button>

        {state.succeeded ? (
          <p className="text-sm text-gray-500">Message sent — I'll get back to you soon.</p>
        ) : (
          <>
            <h2 className="text-lg mb-8">Get in touch</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border-b border-black bg-transparent outline-none py-2 text-sm placeholder-gray-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="border-b border-black bg-transparent outline-none py-2 text-sm placeholder-gray-400 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400" />

                <button type="submit" disabled={state.submitting} className="w-[30%] text-start p-2 bg-[#FFEDAB] rounded-xs links mt-2">
                  {state.submitting ? 'Sending...' : 'Send'}
                </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}