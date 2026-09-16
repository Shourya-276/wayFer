import { WaitlistSubmission } from '../types/waitlist';
import { api } from './api';

export const waitlistService = {
  async submit(data: Omit<WaitlistSubmission, 'id' | 'createdAt'>): Promise<WaitlistSubmission> {
    // Artificial small delay for polished cinematic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error('Please provide a valid email address.');
    }

    if (!data.name.trim()) {
      throw new Error('Please enter your full name.');
    }

    if (!data.city.trim()) {
      throw new Error('Please specify your city.');
    }

    // Submit to real backend endpoint
    return await api.submitWaitlist(data);
  },

  async getAllSubmissions(): Promise<WaitlistSubmission[]> {
    return await api.getWaitlist();
  }
};
