import React, { useState } from 'react'

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    
    setFormSubmitted(true);
  };

  return (
    <div className='flex justify-center items-center w-full h-full my-24'>
      <div className='max-w-md w-full max-auto p-6 bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl text-center text-pink-600 font-mono mb-6'>Contact Us</h2>

       
        {formSubmitted ? (
          <div className="text-center text-xl text-green-400">
            Congratulations! Your message has been sent.
          </div>
        ) : (
          <form>
            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2'>Your Name</label>
              <input
                placeholder=' Name'
                className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-cyan-50'
                required
                type="text"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2'> Email</label>
              <input
                placeholder=' Email'
                className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-cyan-50'
                required
                type="email"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2'> Contact</label>
              <input
                placeholder='Contact'
                className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-cyan-50'
                required
                type="text"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-white text-sm font-semibold mb-2'>Your Message</label>
              <textarea
                rows='4'
                placeholder='Type your message here ...'
                className='h-44 w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-cyan-50'
                required
              />
            </div>
            <div className='flex justify-center'>
              <button
                type="button"
                id='btn'
                onClick={handleSubmit} 
                className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-300 focus:outline-white focus:outline-dotted'
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact;
