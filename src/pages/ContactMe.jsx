import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Result = () => {
  return (
    <p className="text-green-600 dark:text-green-400">Your message has been successfully sent. I will contact you soon</p>
  )
};

const ContactMe = () => {
  const [result, showResult] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_4u80xpt', 'template_8202itr', form.current, 'y7HILcpAYVMWYvDBO')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset();
      showResult(true);
    }
  };

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        showResult(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto overflow-hidden animate-bounce-top">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400 animate-blur-in-expand">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="animate-scale-up-horizontal-left">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" name="fullName" placeholder="Full name" required />
            </div>
            <div className="animate-scale-up-horizontal-right">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" placeholder="Enter Email" required />
            </div>
            <div className="animate-scale-up-vertical-top">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="animate-scale-up-vertical-bottom">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message" rows={4} required />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Submit
            </Button>
          </form>
          {result && <Result />}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMe;