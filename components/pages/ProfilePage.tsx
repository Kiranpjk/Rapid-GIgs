
import React from 'react';
import { ApplicationStatus } from '../../types';
import { 
    HomeIcon,
    VideoCameraIcon,
    BookmarkIcon,
    DocumentChartBarIcon,
    Cog6ToothIcon,
    BriefcaseIcon,
    PaperAirplaneIcon,
    EyeIcon,
    CheckCircleIcon
} from '../icons/Icons';
import { MY_APPLICATIONS } from '../../data/mockData';

const ProfilePage: React.FC<{}> = () => {
    const StatCard: React.FC<{value: string, label: string, icon: React.ReactNode}> = ({value, label, icon}) => (
        <div className="bg-slate-100 dark:bg-slate-700/50 p-6 rounded-lg text-center border border-slate-200 dark:border-slate-600/50">
            <div className="w-8 h-8 mx-auto text-indigo-500 dark:text-indigo-400 mb-2">{icon}</div>
            <p className="text-3xl font-bold text-slate-800 dark:text-white">{value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        </div>
    );
    
    const SkillTag: React.FC<{ children: React.ReactNode}> = ({children}) => (
        <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-3 py-1.5 rounded-full">{children}</span>
    );
    
    const ProfileSection: React.FC<{title: string, children: React.ReactNode, noPadding?: boolean}> = ({title, children, noPadding}) => (
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold p-8 pb-0">{title}</h2>
            <div className={noPadding ? "" : "p-8"}>
                {children}
            </div>
        </div>
    );

    const StatusBadge: React.FC<{ status: ApplicationStatus }> = ({ status }) => {
        const baseClasses = "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full inline-block";
        const statusClasses: { [key in ApplicationStatus]: string } = {
            Applied: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            Interviewing: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            'Offer Received': "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            Rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        };
        return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-4 rounded-lg sticky top-24">
                    <h2 className="text-lg font-bold p-2">Profile Sections</h2>
                    <nav className="space-y-1">
                        <a href="#" className="flex items-center gap-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-md px-3 py-2"><HomeIcon className="w-5 h-5"/>Overview</a>
                        <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white rounded-md px-3 py-2"><VideoCameraIcon className="w-5 h-5"/>My Videos</a>
                        <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white rounded-md px-3 py-2"><BookmarkIcon className="w-5 h-5"/>Saved Jobs</a>
                        <a href="#my-applications" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white rounded-md px-3 py-2"><DocumentChartBarIcon className="w-5 h-5"/>My Applications</a>
                    </nav>
                </div>
                <button className="w-full mt-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                    <Cog6ToothIcon className="w-5 h-5"/> Settings
                </button>
            </aside>
            <main className="w-full space-y-8">
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/seed/banner/1000/200)'}}></div>
                    <div className="p-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-24 sm:-mt-20">
                            <img src="https://picsum.photos/seed/johndoe/128/128" alt="John Doe" className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800"/>
                            <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                                <h1 className="text-3xl font-bold">John Doe</h1>
                                <p className="text-slate-500 dark:text-slate-400">Software Engineer | RapidGig Pro</p>
                            </div>
                        </div>
                        <p className="mt-6 text-slate-600 dark:text-slate-300">Passionate software developer specializing in React and Node.js. Eager to connect with innovative startups and contribute to impactful projects. Let's build something amazing!</p>
                        <div className="mt-6 flex gap-4 flex-wrap">
                            <button className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">Edit Profile</button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg">Upload Intro Video</button>
                        </div>
                    </div>
                </div>

                <ProfileSection title="My Activity Stats">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <StatCard value="15" label="Gigs Completed" icon={<BriefcaseIcon/>}/>
                        <StatCard value="24" label="Apps Sent" icon={<PaperAirplaneIcon/>}/>
                        <StatCard value="1.2K" label="Profile Views" icon={<EyeIcon/>}/>
                        <StatCard value="4.8" label="Avg. Rating" icon={<CheckCircleIcon/>}/>
                     </div>
                </ProfileSection>
                
                 <ProfileSection title="About Me">
                     <p className="text-slate-600 dark:text-slate-300 leading-relaxed">As a dedicated software engineer with 3+ years of experience, I excel in building scalable web applications with a strong focus on user experience. I have a proven track record of delivering robust solutions and collaborating effectively within agile teams. My expertise includes modern JavaScript frameworks, backend API development, and cloud deployment.</p>
                 </ProfileSection>
                 
                 <ProfileSection title="Skills & Expertise">
                     <div className="flex flex-wrap gap-3">
                        <SkillTag>React.js</SkillTag>
                        <SkillTag>Node.js</SkillTag>
                        <SkillTag>TypeScript</SkillTag>
                        <SkillTag>AWS</SkillTag>
                        <SkillTag>RESTful APIs</SkillTag>
                        <SkillTag>MongoDB</SkillTag>
                        <SkillTag>Docker</SkillTag>
                        <SkillTag>UI/UX Design</SkillTag>
                     </div>
                 </ProfileSection>

                 <div id="my-applications" className="scroll-mt-20">
                    <ProfileSection title="My Applications" noPadding>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                                <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-700/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Company</th>
                                        <th scope="col" className="px-6 py-3">Position</th>
                                        <th scope="col" className="px-6 py-3">Date Applied</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MY_APPLICATIONS.map((app) => (
                                        <tr key={app.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/70">
                                            <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{app.job.company}</th>
                                            <td className="px-6 py-4">{app.job.title}</td>
                                            <td className="px-6 py-4">{app.dateApplied}</td>
                                            <td className="px-6 py-4"><StatusBadge status={app.status} /></td>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View Job</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ProfileSection>
                 </div>
            </main>
        </div>
    );
};

export default ProfilePage;
