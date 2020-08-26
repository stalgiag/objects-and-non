import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import Markdown from '../components/Markdown';

class Resources extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <header>
                    <Nav activeTab="RESOURCES" />
                    <div id="logo-container">
                        <Logo />
                    </div>
                </header>
                <div id="body-container">
                    <div className="body-center-content">
                        <Markdown category="RESOURCES" />
                    </div>
                </div>
                <div id='marquee-container'>
                    <Marquee />
                </div>

            </div>
        );
    }
}

export default Resources;