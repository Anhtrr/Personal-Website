import React from 'react'
import MyyResume from '../../assets/Resume.pdf'
import './myResume.css'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const MyResume = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });
    return (
    <section className='resume' id='#'>
        <div className='resume__container'>
            <h5>RESUME</h5>
            <h2>MY CURRENT RESUME</h2>
            <div className='resumeButtons'>
                <a href={MyyResume} download className='btn'>DOWNLOAD MY RESUME</a>
                <a href="#contact" className='btn btn-primary'>CONTACT ME</a>
            </div>
            <div className="pdfSection">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                    <div className='viewww'>
                    <Viewer fileUrl={MyyResume} theme='dark' plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker>
            </div>
        </div>
    </section>
  )
}

export default MyResume