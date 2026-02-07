import { useState } from 'react';
import { useActor } from './useActor';

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitInquiry = async (
    name: string,
    message: string,
    phoneNumber: string,
    email: string | null
  ): Promise<boolean> => {
    if (!actor) {
      console.error('Actor not initialized');
      return false;
    }

    setIsSubmitting(true);
    try {
      await actor.submitContactForm(name, message, phoneNumber, email);
      return true;
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitInquiry, isSubmitting };
}
