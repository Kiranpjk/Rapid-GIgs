
import React, { useState } from 'react';
import { Page, Job } from '../../types';
import Header from './Header';
import DashboardPage from '../pages/DashboardPage';
import JobsPage from '../pages/JobsPage';
import ShortsPage from '../pages/ShortsPage';
import ProfilePage from '../pages/ProfilePage';
import MessagesPage from '../pages/MessagesPage';
import UploadVideoPage from '../pages/UploadVideoPage';
import JobApplicationPage from '../pages/JobApplicationPage';


interface MainLayoutProps {
    currentPage: Page;
    navigate: (page: Page) => void;
    onLogout: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ currentPage, navigate, onLogout, theme, toggleTheme }) => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    
    const handleApplyNow = (job: Job) => {
        setSelectedJob(job);
        navigate('job_application');
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashboardPage navigate={navigate} onApplyNow={handleApplyNow} />;
            case 'jobs':
                return <JobsPage onApplyNow={handleApplyNow} />;
            case 'shorts':
                return <ShortsPage onApplyNow={handleApplyNow} />;
            case 'profile':
                return <ProfilePage />;
            case 'messages':
            case 'notifications': 
                return <MessagesPage />;
            case 'upload_video':
                return <UploadVideoPage navigate={navigate} />;
            case 'job_application':
                return <JobApplicationPage job={selectedJob} navigate={navigate} />;
            default:
                return <DashboardPage navigate={navigate} onApplyNow={handleApplyNow} />;
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Header navigate={navigate} onLogout={onLogout} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default MainLayout;
