import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li id='active-nav-tab'><Link href="/">SYLLABUS</Link></li>
                <li><Link to="/schedule">SCHEDULE</Link></li>
                <li><Link href="/resources">RESOURCES</Link></li>
                <li><Link href="/arena/">ARE.NA</Link></li>
                <li><Link href="/work/">WORK</Link></li>
            </ul>
        </nav>
    );
}
