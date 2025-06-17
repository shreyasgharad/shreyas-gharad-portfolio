
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface NewsletterFormData {
  email: string;
  firstName?: string;
}

const NewsletterSignup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // TODO: Integrate with Mailchimp API
      console.log('Newsletter signup:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for subscribing to our newsletter!');
      reset();
    } catch (error) {
      console.error('Newsletter signup error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest marketing insights, strategies, and industry trends delivered directly to your inbox.
          </p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/50"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </motion.form>

          <p className="text-blue-200 text-sm mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
