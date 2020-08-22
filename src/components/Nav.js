import React from "react"

export default function Nav(props) {
    return (
        <nav>
            <ul>
                <li id='active-nav-tab'><a href="/index/">SYLLABUS</a></li>
                <li><a href="/resources/">RESOURCES</a></li>
                <li><a href="/arena/">ARE.NA</a></li>
                <li><a href="/work/">WORK</a></li>
            </ul>
        </nav>
    )
}
