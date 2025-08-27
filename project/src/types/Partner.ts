export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  shortDescription: string;
  reward: number;
  industry: string;
  geography: string;
  qualificationCriteria: string[];
  featured?: boolean;
  availability?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  type: 'attendee' | 'partner';
  company?: string;
  createdAt: Date;
}

export interface Demo {
  id: string;
  partnerId: string;
  attendeeId: string;
  scheduledDate: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  reward: number;
  paymentStatus: 'pending' | 'paid';
  paymentDate?: Date;
}