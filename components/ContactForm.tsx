"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setFormStatus({
        status: 'submitting',
        message: 'Sending your message...'
      });
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setFormStatus({
        status: 'success',
        message: data.message || 'Thank you for your message. I will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help you?"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Button 
          type="submit" 
          disabled={formStatus.status === 'submitting'}
          className="w-full"
        >
          {formStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      
      {formStatus.status !== 'idle' && (
        <div 
          className={`mt-4 p-3 rounded-md ${
            formStatus.status === 'success' 
              ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
              : formStatus.status === 'error'
                ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
} 