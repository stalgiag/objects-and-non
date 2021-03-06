import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import Markdown from '../components/Markdown';
import Footer from '../components/Footer';
import '../styles/main.scss';

import mobile from 'is-mobile';

export default function Resources() {
    if (mobile()) {
        return (
            <div>
                Mobile is not currently available for this class site; check back on a desktop or laptop
            </div>
        );
    }
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
            <Footer />
        </ >
    );
}