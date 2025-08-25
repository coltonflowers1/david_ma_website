
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Option 1: EmailJS (uncomment and configure if you want to use EmailJS)
      // Install EmailJS: npm install @emailjs/browser
      // Then uncomment this section and configure your EmailJS account
      
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: timeString
      };

      await emailjs.send(
        'service_2fmccks',     // Replace with your EmailJS service ID
        'template_jozpjck',    // Replace with your EmailJS template ID
        templateParams,
        'iIaaDhYTWwrX0WYtl'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });



    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black min-h-screen text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}
          <div className="space-y-8">
            <h1 className="text-4xl font-medium text-white">Let's connect!</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-transparent border border-gray-600 text-white placeholder:text-gray-400 focus:border-white resize-none"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.open('mailto:davidjjma628@gmail.com', '_blank')}
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  Direct Email
                </Button>
              </div>
            </form>

            {/* Instructions for different contact methods */}
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong>Current setup:</strong> Form opens your email client with pre-filled information.</p>
              <p><strong>For seamless sending:</strong> Consider setting up EmailJS (instructions in code comments).</p>
              <p><strong>Alternative services:</strong> Formspree, Netlify Forms, or Vercel Forms also work great.</p>
            </div>
          </div>

          {/* Right side - Photo and contact info */}
          <div className="space-y-6">
            <div className="max-w-sm mx-auto lg:mx-0">
              <img
                src="images/David-Ma-Contact-Photo.jpg"
                alt="David Ma"
                className="w-full rounded-lg"
              />
              
              <div className="mt-4 text-center space-y-2">
                <p className="text-sm">
                  <span className="text-gray-400">Email:</span> 
                  <a 
                    href="mailto:davidjjma628@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    davidjjma628@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">imdb:</span> 
                  <a 
                    href="https://www.imdb.com/name/nm16109998/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 ml-1"
                  >
                    https://www.imdb.com/name/nm16109998/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social media icons at bottom */}
        <div className="flex justify-center space-x-8 mt-16 pt-8 border-t border-gray-800">
          <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="TikTok">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="YouTube">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="mailto:davidjjma628@gmail.com" className="text-white hover:text-blue-400 transition-colors" aria-label="Email">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}