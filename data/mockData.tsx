import React from 'react';
import {
  Job,
  ShortVideo,
  User,
  MessageThread,
  Notification,
  Category,
  Application,
} from '../types';

// ---------------- USERS ----------------
export const USERS: { [key: string]: User } = {
  alex: { id: 1, name: 'Alex Chen', avatarUrl: 'https://picsum.photos/seed/alex/100/100', title: 'Alex Developer' },
  maria: { id: 2, name: 'Maria Rodriguez', avatarUrl: 'https://picsum.photos/seed/maria/100/100', title: 'Sarah Designer' },
  sam: { id: 3, name: 'Sam Patel', avatarUrl: 'https://picsum.photos/seed/sam/100/100' },
  chloe: { id: 4, name: 'Chloe Lim', avatarUrl: 'https://picsum.photos/seed/chloe/100/100' },
  david: { id: 5, name: 'David Lee', avatarUrl: 'https://picsum.photos/seed/david/100/100' },
  lena: { id: 6, name: 'Lena Coder', avatarUrl: 'https://picsum.photos/seed/lena/100/100' },
  david_art: { id: 7, name: 'David Art', avatarUrl: 'https://picsum.photos/seed/davidart/100/100' },
  emily: { id: 8, name: 'Emily Marketer', avatarUrl: 'https://picsum.photos/seed/emily/100/100' },
  chris: { id: 9, name: 'Chris Code', avatarUrl: 'https://picsum.photos/seed/chris/100/100' },
  olivia: { id: 10, name: 'Olivia UI/UX', avatarUrl: 'https://picsum.photos/seed/olivia/100/100' },
  ben: { id: 11, name: 'Ben Data', avatarUrl: 'https://picsum.photos/seed/ben/100/100' },
  mike: { id: 12, name: 'Mike Manager', avatarUrl: 'https://picsum.photos/seed/mike/100/100' },
  jane: { id: 13, name: 'Jane Doe', avatarUrl: 'https://picsum.photos/seed/jane/100/100' },
  sarah: { id: 14, name: 'Sarah Johnson', avatarUrl: 'https://picsum.photos/seed/sarah/100/100' },
  support: { id: 15, name: 'RapidGig Support', avatarUrl: 'https://picsum.photos/seed/support/100/100' },
  alpha: { id: 16, name: 'Project Alpha Team', avatarUrl: 'https://picsum.photos/seed/alpha/100/100' },
  alex_w: { id: 17, name: 'Alex Wang', avatarUrl: 'https://picsum.photos/seed/alexw/100/100' },
  community: { id: 18, name: 'Gig Seekers Community', avatarUrl: 'https://picsum.photos/seed/community/100/100' },
};

// ---------------- JOBS ----------------
export const NEARBY_GIGS: Job[] = [
  {
    id: 1,
    title: 'React Frontend Dev',
    company: 'Acme Corp',
    logo: <></>,
    location: 'Remote',
    type: 'Remote',
    pay: '$30/hr',
    description: 'Develop responsive and interactive user interfaces using React and TypeScript for our new HR platform.',
    postedAgo: '',
    companyVideoUrl: 'https://example.com/company.mp4',
    freelancerVideoUrl: 'https://example.com/freelancer.mp4',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Global Solutions',
    logo: <></>,
    location: 'Hybrid (NYC)',
    type: 'Hybrid',
    pay: '$35/hr',
    description: 'Design intuitive and visually appealing user experiences for our enterprise-grade applications.',
    postedAgo: '',
    companyVideoUrl: 'https://example.com/company.mp4',
  },
  {
    id: 3,
    title: 'Python Backend Dev',
    company: 'TechInnovate',
    logo: <></>,
    location: 'On-site (SF)',
    type: 'On-site',
    pay: '$40/hr',
    description: 'Build robust and scalable backend services using Python, Django, and PostgreSQL.',
    postedAgo: '',
  },
  {
    id: 4,
    title: 'Data Analyst Intern',
    company: 'Data Insights Ltd.',
    logo: <></>,
    location: 'Remote',
    type: 'Remote',
    pay: '$25/hr',
    description: 'Assist in collecting, cleaning, and analyzing large datasets to provide actionable business insights.',
    postedAgo: '',
  },
];

// ---------------- ALL JOBS ----------------
export const ALL_JOBS: Job[] = [
  {
    id: 7,
    title: 'Junior React Developer',
    company: 'InnovateTech Solutions',
    logo: <></>,
    location: 'Remote',
    type: 'Remote',
    pay: '$25 - $35/hr',
    postedAgo: '2 hours ago',
    description: 'Seeking a motivated Junior React Developer to help build our next-generation platform.',
    companyVideoUrl: 'https://example.com/company.mp4',
    freelancerVideoUrl: 'https://example.com/freelancer.mp4',
    shortVideoUrl: 'https://cdn.pixabay.com/video/2023/08/25/176916-857579841_large.mp4',
    likes: 12500,
    comments: 342,
    shares: 129,
  },
  {
    id: 8,
    title: 'UI/UX Design Intern',
    company: 'Creative Flow Studio',
    logo: <></>,
    location: 'On-site, London',
    type: 'On-site',
    pay: '$20 - $25/hr',
    postedAgo: '1 day ago',
    description: 'Join our design team to work on exciting projects, from wireframing to high-fidelity prototypes.',
    companyVideoUrl: 'https://example.com/company.mp4',
    shortVideoUrl: 'https://cdn.pixabay.com/video/2024/05/29/213010-947702521_large.mp4',
    likes: 8900,
    comments: 210,
    shares: 98,
  },
];

// ---------------- SHORTS ----------------
export const SHORT_VIDEOS_INTRO: ShortVideo[] = [
  { id: 1, title: 'Building a Dynamic React App', author: USERS.alex, thumbnailUrl: 'https://picsum.photos/seed/intro1/400/225', views: 0, likes: 0, duration: '0:58' },
  { id: 2, title: 'My UX Design Process Showcase', author: USERS.maria, thumbnailUrl: 'https://picsum.photos/seed/intro2/400/225', views: 0, likes: 0, duration: '1:15' },
  { id: 3, title: 'Data Analysis & Visualization', author: USERS.sam, thumbnailUrl: 'https://picsum.photos/seed/intro3/400/225', views: 0, likes: 0, duration: '0:45' },
];

// ---------------- CATEGORIES ----------------
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Web Development' },
  { id: 2, name: 'Mobile Development' },
  { id: 3, name: 'UI/UX Design' },
  { id: 4, name: 'Data Science' },
  { id: 5, name: 'Digital Marketing' },
  { id: 6, name: 'Content Creation' },
];

// ---------------- MESSAGES ----------------
export const MESSAGE_THREADS: MessageThread[] = [
  {
    id: 1,
    user: USERS.jane,
    lastMessage: 'Hey, are you free for',
    timestamp: '10:30 AM',
    unreadCount: 2,
    messages: [
      { sender: 'them', text: 'Hey, are you free for a quick call?', time: '10:30 AM' },
      { sender: 'me', text: 'Hi Jane! Yes, I am. How about in 15 minutes?', time: '10:31 AM' },
    ],
  },
];

// ---------------- NOTIFICATIONS ----------------
export const NOTIFICATIONS: Notification[] = [
  { id: 1, icon: <></>, text: <>Congrats! You earned a 'Top Talent' badge.</>, time: 'Just now' },
  { id: 2, icon: <></>, text: <>Your profile is 80% complete. Add a video intro!</>, time: '4 hours ago' },
  { id: 3, icon: <></>, text: <>New message from Jane Doe.</>, time: 'Yesterday' },
];

// ---------------- APPLICATIONS ----------------
export const MY_APPLICATIONS: Application[] = [
  { id: 1, job: ALL_JOBS[1], dateApplied: '2023-10-15', status: 'Interviewing' },
  { id: 2, job: ALL_JOBS[0], dateApplied: '2023-10-12', status: 'Applied' },
];
