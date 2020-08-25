import Marquee3k from 'marquee3000';
import React from 'react'

class Marquee extends React.Component {
    componentDidMount () {
        Marquee3k.init();
        Marquee3k.refreshAll();
    }

    render() {
        return (
            <div class="marquee3k"
            data-speed="0.5"
            >
                <h2>Cillum et veniam reprehenderit mollit magna occaecat velit id sit.</h2>
            </div>
        )
    }
}

export default Marquee;