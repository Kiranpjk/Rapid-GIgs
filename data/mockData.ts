
import React from 'react';
import { Job, ShortVideo, User, MessageThread, Notification, Category, Application } from '../types';

// Mock Data
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


export const NEARBY_GIGS: Job[] = [
  // FIX: Wrapped description values in strings to fix parsing errors.
  { id: 1, title: 'React Frontend Dev', company: 'Acme Corp', logo: <></>, location: 'Remote', type: 'Remote', pay: '$30/hr', description: 'Develop responsive and interactive user interfaces using React and TypeScript for our new HR platform.', postedAgo: '', companyVideoUrl: 'https://example.com/company.mp4', freelancerVideoUrl: 'https://example.com/freelancer.mp4' },
  { id: 2, title: 'UI/UX Designer', company: 'Global Solutions', logo: <></>, location: 'Hybrid (NYC)', type: 'Hybrid', pay: '$35/hr', description: 'Design intuitive and visually appealing user experiences for our enterprise-grade applications.', postedAgo: '', companyVideoUrl: 'https://example.com/company.mp4' },
  { id: 3, title: 'Python Backend Dev', company: 'TechInnovate', logo: <></>, location: 'On-site (SF)', type: 'On-site', pay: '$40/hr', description: 'Build robust and scalable backend services using Python, Django, and PostgreSQL.', postedAgo: '' },
  { id: 4, title: 'Data Analyst Intern', company: 'Data Insights Ltd.', logo: <></>, location: 'Remote', type: 'Remote', pay: '$25/hr', description: 'Assist in collecting, cleaning, and analyzing large datasets to provide actionable business insights.', postedAgo: '' },
  { id: 5, title: 'Digital Marketing Spec.', company: 'Mars Digital', logo: <></>, location: 'Hybrid (LA)', type: 'Hybrid', pay: '$28/hr', description: 'Manage social media campaigns, SEO efforts, and content creation for various client projects.', postedAgo: '' },
  { id: 6, title: 'Mobile App Developer', company: 'Cube Corp', logo: <></>, location: 'On-site (Austin)', type: 'On-site', pay: '$38/hr', description: 'Develop and maintain native mobile applications for iOS and Android platforms.', postedAgo: '' },
];

export const ALL_JOBS: Job[] = [
    { id: 7, title: 'Junior React Developer', company: 'InnovateTech Solutions', logo: <></>, location: 'Remote', type: 'Remote', pay: '$25 - $35/hr', postedAgo: '2 hours ago', description: 'Seeking a motivated Junior React Developer to help build our next-generation platform. Experience with TypeScript and Tailwind CSS is a plus.', companyVideoUrl: 'https://example.com/company.mp4', freelancerVideoUrl: 'https://example.com/freelancer.mp4', shortVideoUrl: 'https://cdn.pixabay.com/video/2023/08/25/176916-857579841_large.mp4', likes: 12500, comments: 342, shares: 129, },
    { id: 8, title: 'UI/UX Design Intern', company: 'Creative Flow Studio', logo: <></>, location: 'On-site, London', type: 'On-site', pay: '$20 - $25/hr', postedAgo: '1 day ago', description: 'Join our design team to work on exciting projects, from wireframing to high-fidelity prototypes. A great opportunity to grow your portfolio.', companyVideoUrl: 'https://example.com/company.mp4', shortVideoUrl: 'https://cdn.pixabay.com/video/2024/05/29/213010-947702521_large.mp4', likes: 8900, comments: 210, shares: 98, },
    { id: 9, title: 'Data Science Assistant', company: 'Data Insight Corp', logo: <></>, location: 'Hybrid, New York', type: 'Hybrid', pay: '$30 - $40/hr', postedAgo: '3 days ago', description: 'We are looking for a Data Science Assistant to support our analytics team. Proficiency in Python (Pandas, NumPy) and SQL is required.', shortVideoUrl: 'https://cdn.pixabay.com/video/2024/03/12/204207-923485635_large.mp4', likes: 15200, comments: 480, shares: 250, },
    { id: 10, title: 'Entry-Level Game Tester', company: 'GameDev Studios', logo: <></>, location: 'On-site, Austin', type: 'On-site', pay: '$15 - $20/hr', postedAgo: '5 days ago', description: 'Passionate about gaming? Help us find and report bugs in our upcoming titles. Keen attention to detail is a must.' },
    { id: 11, title: 'Social Media Coordinator', company: 'Marketing Minds Inc.', logo: <></>, location: 'Remote', type: 'Remote', pay: '$22 - $28/hr', postedAgo: '1 week ago', description: 'Manage and grow our clients\' social media presence across various platforms. Experience with content creation and analytics tools is preferred.', shortVideoUrl: 'https://cdn.pixabay.com/video/2021/09/22/86952-613481615_large.mp4', likes: 7300, comments: 150, shares: 60, },
    { id: 12, title: 'Content Writer for E-Learning', company: 'EduTech Innovations', logo: <></>, location: 'Remote', type: 'Remote', pay: '$28 - $38/hr', postedAgo: '1 week ago', description: 'Create engaging and educational content for our online courses. A background in instructional design is highly desirable.' },
    { id: 13, title: 'Healthcare IT Support', company: 'HealthLink Services', logo: <></>, location: 'On-site, Chicago', type: 'On-site', pay: '$25 - $30/hr', postedAgo: '2 weeks ago', description: 'Provide technical support for our healthcare information systems. Strong problem-solving skills and a customer-centric attitude are essential.' },
    { id: 14, title: 'Junior Financial Analyst', company: 'FinServe Analytics', logo: <></>, location: 'Hybrid, Toronto', type: 'Hybrid', pay: '$30 - $45/hr', postedAgo: '3 weeks ago', description: 'Assist our finance team with data analysis, financial modeling, and reporting. A degree in Finance, Economics, or a related field is required.' },
    { id: 15, title: 'Cloud Infrastructure Intern', company: 'CloudOps Solutions', logo: <></>, location: 'Remote', type: 'Remote', pay: '$27 - $37/hr', postedAgo: '1 month ago', description: 'Gain hands-on experience with AWS, Docker, and Kubernetes. This internship offers a path to a full-time role for the right candidate.' },
    { id: 16, title: 'Automotive CAD Designer', company: 'AutoDesign Innovations', logo: <></>, location: 'On-site, Detroit', type: 'On-site', pay: '$35 - $50/hr', postedAgo: '1 month ago', description: 'Create and modify 3D models and 2D drawings for automotive components. Proficiency in CATIA or SolidWorks is a must.' },
    { id: 17, title: 'Renewable Energy Researcher', company: 'GreenEnergy Labs', logo: <></>, location: 'On-site, San Francisco', type: 'On-site', pay: '$40 - $55/hr', postedAgo: '2 months ago', description: 'Conduct research on solar and wind energy technologies. A Master\'s or PhD in a relevant engineering or science discipline is preferred.' },
    { id: 18, title: 'E-commerce Operations Assistant', company: 'FutureRetail Tech', logo: <></>, location: 'Hybrid, Berlin', type: 'Hybrid', pay: '$20 - $30/hr', postedAgo: '2 months ago', description: 'Support our e-commerce team with order management, inventory control, and customer service. Excellent organizational skills are key.' },
];


export const SHORT_VIDEOS_INTRO: ShortVideo[] = [
  { id: 1, title: 'Building a Dynamic React App', author: USERS.alex, thumbnailUrl: 'https://picsum.photos/seed/intro1/400/225', views: 0, likes: 0, duration: "0:58" },
  { id: 2, title: 'My UX Design Process Showcase', author: USERS.maria, thumbnailUrl: 'https://picsum.photos/seed/intro2/400/225', views: 0, likes: 0, duration: "1:15" },
  { id: 3, title: 'Data Analysis & Visualization', author: USERS.sam, thumbnailUrl: 'https://picsum.photos/seed/intro3/400/225', views: 0, likes: 0, duration: "0:45" },
  { id: 4, title: 'Quick Digital Marketing Tips', author: USERS.chloe, thumbnailUrl: 'https://picsum.photos/seed/intro4/400/225', views: 0, likes: 0, duration: "1:02" },
  { id: 5, title: 'Developing Secure APIs', author: USERS.david, thumbnailUrl: 'https://picsum.photos/seed/intro5/400/225', views: 0, likes: 0, duration: "1:30" },
];

export const ALL_SHORTS: ShortVideo[] = [
    { id: 6, title: 'Building a Responsive Portfolio Website with React & Tailwind CSS', author: USERS.alex, thumbnailUrl: 'https://picsum.photos/seed/short1/400/225', views: 12345, likes: 987, duration: '' },
    { id: 7, title: 'UI/UX Design Principles: Crafting Intuitive User Experiences', author: USERS.maria, thumbnailUrl: 'https://picsum.photos/seed/short2/400/225', views: 9876, likes: 765, duration: '' },
    { id: 8, title: 'Project Management 101: Agile Methodologies for Startups', author: USERS.mike, thumbnailUrl: 'https://picsum.photos/seed/short3/400/225', views: 7654, likes: 543, duration: '' },
    { id: 9, title: 'Advanced JavaScript Concepts: Closures, Promises, and Async/Await', author: USERS.lena, thumbnailUrl: 'https://picsum.photos/seed/short4/400/225', views: 15000, likes: 1100, duration: '' },
    { id: 10, title: 'Creating Vector Illustrations for Web Interfaces', author: USERS.david_art, thumbnailUrl: 'https://picsum.photos/seed/short5/400/225', views: 8500, likes: 680, duration: '' },
    { id: 11, title: 'Digital Marketing Strategies: SEO, SEM, and Social Media', author: USERS.emily, thumbnailUrl: 'https://picsum.photos/seed/short6/400/225', views: 6200, likes: 490, duration: '' },
    { id: 12, title: 'My Journey as a Freelance Web Developer: Tips & Tricks', author: USERS.chris, thumbnailUrl: 'https://picsum.photos/seed/short7/400/225', views: 11200, likes: 850, duration: '' },
    { id: 13, title: 'Mastering Figma: Collaborative Design for Teams', author: USERS.olivia, thumbnailUrl: 'https://picsum.photos/seed/short8/400/225', views: 9100, likes: 710, duration: '' },
    { id: 14, title: 'Introduction to Data Science with Python', author: USERS.ben, thumbnailUrl: 'https://picsum.photos/seed/short9/400/225', views: 7800, likes: 600, duration: '' },
];


export const CATEGORIES: Category[] = [
  { id: 1, name: 'Web Development' },
  { id: 2, name: 'Mobile Development' },
  { id: 3, name: 'UI/UX Design' },
  { id: 4, name: 'Data Science' },
  { id: 5, name: 'Digital Marketing' },
  { id: 6, name: 'Content Creation' },
  { id: 7, name: 'Video Editing' },
  { id: 8, name: 'Project Management' },
  { id: 9, name: 'Customer Support' },
  { id: 10, name: 'Virtual Assistant' },
  { id: 11, name: 'Graphic Design' },
  { id: 12, name: 'Machine Learning' },
];

export const MESSAGE_THREADS: MessageThread[] = [
    {
        id: 1, user: USERS.jane, lastMessage: "Hey, are you free for", timestamp: "10:30 AM", unreadCount: 2,
        messages: [
            { sender: 'them', text: 'Hey, are you free for a quick call to discuss the project?', time: '10:30 AM' },
            { sender: 'me', text: 'Hi Jane! Yes, I am. How about in 15 minutes?', time: '10:31 AM' },
            { sender: 'them', text: "Great, looking forward to it!", time: '10:32 AM' },
            { sender: 'me', text: "Perfect, I'll send a calendar invite.", time: '10:32 AM' },
        ]
    },
    { id: 2, user: USERS.sarah, lastMessage: "I've uploaded the ne", timestamp: "Yesterday", unreadCount: 0, messages: [] },
    { id: 3, user: USERS.support, lastMessage: "Your account verificati", timestamp: "Monday", unreadCount: 1, messages: [] },
    { id: 4, user: USERS.alpha, lastMessage: "Meeting at 2 PM in Cha", timestamp: "Oct 24", unreadCount: 5, messages: [] },
    { id: 5, user: USERS.alex_w, lastMessage: "Can you send me the la", timestamp: "Oct 23", unreadCount: 0, messages: [] },
    { id: 6, user: USERS.community, lastMessage: "New gig posted in the 'I", timestamp: "Oct 22", unreadCount: 12, messages: [] },
];

export const NOTIFICATIONS: Notification[] = [
    {id: 1, icon: <></>, text: <>Congrats! You earned a 'Top Talent' badge.</>, time: "Just now"},
    {id: 2, icon: <></>, text: <>RapidGig Platform maintenance scheduled for 2 AM UTC.</>, time: "1 hour ago"},
    {id: 3, icon: <></>, text: <>Your profile is 80% complete. Add a video intro!</>, time: "4 hours ago"},
    {id: 4, icon: <></>, text: <>New message from Jane Doe.</>, time: "Yesterday"},
    {id: 5, icon: <></>, text: <>New gig matching your skills: 'Mobile App Debugger'.</>, time: "2 days ago"},
];

export const MY_APPLICATIONS: Application[] = [
  {
    id: 1,
    job: ALL_JOBS[1], // UI/UX Design Intern
    dateApplied: '2023-10-15',
    status: 'Interviewing',
  },
  {
    id: 2,
    job: ALL_JOBS[0], // Junior React Developer
    dateApplied: '2023-10-12',
    status: 'Applied',
  },
  {
    id: 3,
    job: ALL_JOBS[4], // Social Media Coordinator
    dateApplied: '2023-10-10',
    status: 'Rejected',
  },
  {
    id: 4,
    job: ALL_JOBS[2], // Data Science Assistant
    dateApplied: '2023-10-05',
    status: 'Offer Received',
  },
];
