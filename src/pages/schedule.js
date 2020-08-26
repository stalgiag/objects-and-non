import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import Markdown from '../components/Markdown';
import '../styles/main.scss';

export default function Resources() {
    return (
        <>
            <header>
                <Nav activeTab="SCHEDULE" />
                <div id="logo-container">
                    <Logo />
                </div>
            </header>
            <div id="body-container">
                <div className="body-center-content">
                    <Markdown category="SCHEDULE" />
                </div>
            </div>
            <div id='marquee-container'>
                <Marquee />
            </div>

        </ >
    );
}