import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import '../styles/main.scss';

export default function Resources() {
    return (
        <div>
            <header>
                <Nav activeTab="SCHEDULE" />
                <div id="logo-container">
                    <Logo />
                </div>
            </header>
            <div id="body-container">
                <div id="body-center-content">
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
            <div id='marquee-container'>
                <Marquee />
            </div>

        </div>
    );
}