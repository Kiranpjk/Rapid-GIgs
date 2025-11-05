
import React from 'react';
import { Page } from '../../types';
import { ArrowUpOnSquareIcon } from '../icons/Icons';

interface UploadVideoPageProps {
    navigate: (page: Page) => void;
}

const UploadVideoPage: React.FC<UploadVideoPageProps> = ({ navigate }) => {
    return (
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-2 tracking-tighter">Upload Your Introduction</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Showcase your skills and personality with a short video.</p>
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <div>
                        <label htmlFor="video-title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Video Title</label>
                        <input type="text" id="video-title" placeholder="e.g., Senior React Developer with a Passion for UX" className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
                        <textarea id="description" rows={4} placeholder="Share more about your skills and what you're looking for..." className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tags</label>
                        <input type="text" id="tags" placeholder="e.g., React, UI/UX, Backend (comma-separated)" className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="duration-limit" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Max Duration</label>
                            <select id="duration-limit" className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-chevron-down">
                                <option>1 Minute</option>
                                <option>2 Minutes</option>
                                <option>5 Minutes</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                            <select id="category" className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-chevron-down">
                                <option>Web Development</option>
                                <option>Mobile Development</option>
                                <option>UI/UX Design</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-indigo-500 transition-colors px-6 py-10">
                            <div className="text-center">
                                <ArrowUpOnSquareIcon className="mx-auto h-12 w-12 text-slate-400" />
                                <div className="mt-4 flex text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-indigo-500 dark:text-indigo-400 focus-within:outline-none hover:text-indigo-600 dark:hover:text-indigo-300">
                                        <span>Click to upload</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-slate-500">MP4, MOV, AVI (Max 50MB)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={() => navigate('profile')} className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">Cancel</button>
                        <button type="button" className="bg-slate-500 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg">Preview</button>
                        <button type="submit" onClick={() => {alert('Video Uploaded!'); navigate('profile')}} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadVideoPage;
