import React from 'react';
import Doc from '../components/Doc';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import '../styles/main.scss';

export default function Home() {
    return (
        <>
            <header>
                <Nav activeTab="SYLLABUS"/>
                <div id="logo-container">
                    <Logo />
                </div>
            </header>
            <div id="body-container">
                <div className="body-center-content">
                    <div className="iframe-container">
                        <Doc className="doc" id="syllabus" src="https://docs.google.com/document/d/e/2PACX-1vQChal8gieJQHXMQzcowXwuHigp3zAAXjFWbRNL2ICcXfl8srSCd1bsrYtZe9LqhmKDkp_L8lpD7Z0U/pub?embedded=true" />
                    </div>
                </div>
            </div>
            <div id='marquee-container'>
                <Marquee />
            </div>

        </>
    );
}
