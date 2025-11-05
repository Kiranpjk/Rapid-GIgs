
import React from 'react';
import { Page, Job } from '../../types';
import { 
    BriefcaseIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    PlayCircleIcon,
    VideoCameraIcon
} from '../icons/Icons';

interface JobApplicationPageProps {
    job: Job | null;
    navigate: (page: Page) => void;
}

const JobApplicationPage: React.FC<JobApplicationPageProps> = ({ job, navigate }) => {
    
    if (!job) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Job not found</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-6">The job you are trying to apply for does not exist.</p>
                <button onClick={() => navigate('jobs')} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg">Back to Jobs</button>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would handle form submission logic here.
      alert(`Successfully applied for ${job.title} at ${job.company}!`);
      navigate('profile');
      // Maybe scroll to #my-applications
      setTimeout(() => {
        const el = document.getElementById('my-applications');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
              <button onClick={() => navigate('jobs')} className="text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300">← Back to all jobs</button>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Application Form */}
                <div className="w-full lg:w-2/3">
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-8 rounded-lg space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tighter">Apply to {job.company}</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">{job.title}</p>
                        </div>
                        
                        <div className="border-t border-slate-200 dark:border-slate-700"></div>

                        <div>
                            <label htmlFor="cover-letter" className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Cover Letter</label>
                            <textarea id="cover-letter" rows={8} placeholder={`Why are you a good fit for the ${job.title} role?`} className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        </div>
                        
                        <div>
                            <label className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Attachments</label>
                            {/* Resume Upload */}
                            <div className="mb-4">
                                <label htmlFor="resume-upload" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Resume/CV</label>
                                <div className="mt-2 flex items-center gap-4">
                                    <label htmlFor="resume-upload" className="cursor-pointer bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg text-sm">
                                      <span>Upload File</span>
                                      <input id="resume-upload" name="resume-upload" type="file" className="sr-only" />
                                    </label>
                                    <span className="text-sm text-slate-500">No file chosen</span>
                                </div>
                            </div>
                            {/* Video Intro Upload */}
                             <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Video Introduction</label>
                                <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-indigo-500 transition-colors px-6 py-10">
                                    <div className="text-center">
                                        <VideoCameraIcon className="mx-auto h-12 w-12 text-slate-500 dark:text-slate-400" />
                                        <div className="mt-4 flex text-sm leading-6 text-slate-500 dark:text-slate-400">
                                            <label htmlFor="video-upload" className="relative cursor-pointer rounded-md font-semibold text-indigo-500 dark:text-indigo-400 focus-within:outline-none hover:text-indigo-600 dark:hover:text-indigo-300">
                                                <span>Upload a short video</span>
                                                <input id="video-upload" name="video-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-slate-500">Max 1 minute, up to 50MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-700"></div>
                        
                        <div className="flex justify-end gap-4">
                            <button type="button" onClick={() => navigate('jobs')} className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">Cancel</button>
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg">Submit Application</button>
                        </div>
                    </form>
                </div>

                {/* Sticky Job Details Sidebar */}
                <aside className="w-full lg:w-1/3">
                    <div className="sticky top-24">
                        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Job Details</h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                <div className="flex items-center gap-2"><BriefcaseIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400"/><span>{job.type}</span></div>
                                <div className="flex items-center gap-2"><MapPinIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400"/><span>{job.location}</span></div>
                                <div className="flex items-center gap-2"><CurrencyDollarIcon className="w-5 h-5 text-green-600 dark:text-green-400"/><span>{job.pay}</span></div>
                            </div>
                            
                            {(job.companyVideoUrl || job.freelancerVideoUrl) && <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>}
                            
                            <div className="space-y-4">
                                {job.companyVideoUrl && (
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Project Brief from {job.company}</p>
                                        <a href={job.companyVideoUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                                            <img src="https://picsum.photos/seed/companyvideo/400/225" className="rounded-lg w-full"/>
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                <PlayCircleIcon className="w-12 h-12 text-white"/>
                                            </div>
                                        </a>
                                    </div>
                                )}
                                {job.freelancerVideoUrl && (
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Freelancer Walkthrough</p>
                                        <a href={job.freelancerVideoUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                                            <img src="https://picsum.photos/seed/freelancervideo/400/225" className="rounded-lg w-full"/>
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                <PlayCircleIcon className="w-12 h-12 text-white"/>
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{job.description}</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default JobApplicationPage;
