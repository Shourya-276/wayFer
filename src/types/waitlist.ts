export interface WaitlistSubmission {
  id: string;
  name: string;
  email: string;
  city: string;
  phone?: string;
  organization?: string;
  userType?: 'Student' | 'Working Professional' | 'Other';
  useCase?: 'College commute' | 'Airport trips' | 'Daily commute' | 'Intercity travel' | 'Other';
  createdAt: string;
}

export interface WaitlistState {
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage?: string;
  submission?: WaitlistSubmission;
}
