
import React, { useEffect, useRef } from 'react';
import { Job } from '../../types';
import { 
    HeartIcon,
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
    PaperAirplaneIcon,
} from '../icons/Icons';
import { ALL_JOBS } from '../../data/mockData';

interface ShortsPageProps {
    onApplyNow: (job: Job) => void;
}

const ShortsPage: React.FC<ShortsPageProps> = ({ onApplyNow }) => {
    const jobsWithShorts = ALL_JOBS.filter(job => job.shortVideoUrl);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoElement = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        videoElement.play().catch(error => console.log("Autoplay was prevented:", error));
                    } else {
                        videoElement.pause();
                        videoElement.currentTime = 0;
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% of the video is visible
        );

        const currentVideoRefs = videoRefs.current;
        currentVideoRefs.forEach(video => {
            if (video) observer.observe(video);
        });

        return () => {
            currentVideoRefs.forEach(video => {
                if (video) observer.unobserve(video);
            });
        };
    }, [jobsWithShorts.length]);

    return (
        <div className="relative h-[calc(100vh-64px)] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black">
            {jobsWithShorts.map((job, index) => (
                <div key={job.id} className="h-full w-full flex-shrink-0 snap-start relative flex items-center justify-center">
                    <video
                        ref={el => { videoRefs.current[index] = el; }}
                        src={job.shortVideoUrl}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Video Overlay UI */}
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full flex justify-between items-end drop-shadow-lg">
                        {/* Left side: Job Info */}
                        <div className="w-4/5 pr-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-slate-100/20 backdrop-blur-sm rounded-lg flex items-center justify-center font-bold text-white text-lg">{job.company.substring(0,2)}</div>
                                <p className="font-bold text-lg">{job.company}</p>
                            </div>
                            <h2 className="text-xl font-bold">{job.title}</h2>
                            <p className="text-sm mt-1 line-clamp-2">{job.description}</p>
                            <p className="font-semibold text-green-400 mt-2">{job.pay}</p>
                        </div>

                        {/* Right side: Action Buttons */}
                        <div className="flex flex-col items-center space-y-4">
                            <button className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110">
                                  <HeartIcon className="w-7 h-7"/>
                                </div>
                                <span className="text-xs font-semibold mt-1">{job.likes?.toLocaleString() || 'Like'}</span>
                            </button>
                            <button className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110">
                                  <ChatBubbleLeftEllipsisIcon className="w-7 h-7"/>
                                </div>
                                <span className="text-xs font-semibold mt-1">{job.comments?.toLocaleString() || 'Comment'}</span>
                            </button>
                            <button className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110">
                                  <ShareIcon className="w-7 h-7"/>
                                </div>
                                <span className="text-xs font-semibold mt-1">{job.shares?.toLocaleString() || 'Share'}</span>
                            </button>
                            <button className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold p-3 rounded-full transition-transform transform hover:scale-110 shadow-lg" onClick={() => onApplyNow(job)}>
                                <PaperAirplaneIcon className="w-6 h-6 rotate-45" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShortsPage;
