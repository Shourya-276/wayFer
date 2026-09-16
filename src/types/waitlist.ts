export interface WaitlistSubmission {
  id: string;
  name: string;
  email: string;
  city: string;
  phone?: string;
  organization?: string;
  userType?: 'Student' | 'Working Professional' | 'Other';
  useCase?: 'College commute' | 'Airport trips' | 'Daily commute' | 'Metro & transit' | 'Intercity travel' | 'Other';
  createdAt: string;
}

export type WaitlistFormData = Omit<WaitlistSubmission, 'id' | 'createdAt'>;

export interface WaitlistState {
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage?: string;
  submission?: WaitlistSubmission;
}
