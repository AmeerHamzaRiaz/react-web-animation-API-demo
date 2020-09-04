import React, { useEffect, useState } from 'react'
import cloud from '../images/cloud.png';
import useWebAnimations from '@wellyshen/use-web-animations';

const Cloud = (props) => {
    const { ref, playState, animate, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'translateX(100vw)' },
            { transform: 'translateX(-100vw)' }
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
            playbackRate: 1,
        }
    });

    useEffect(() => {
        document.addEventListener("click", (e) => {
            getAnimation().playbackRate *= 1.1;
            props.updatePlayBackRate(getAnimation().playbackRate);
        });
    }, [animate]);



    var speedDecay = () => {
        if (getAnimation()?.playbackRate > 0) {
            getAnimation().playbackRate *= 0.90;
            props.updatePlayBackRate(getAnimation().playbackRate);
        }
    }

    setInterval(speedDecay, 5000);

    return (
        <div ref={ref}>
            <img src={cloud} id="cloud1-sprite" width="250" />
            <img src={cloud} id="cloud2-sprite" width="150" />
            <img src={cloud} id="cloud3-sprite" width="300" />
            <img src={cloud} id="cloud4-sprite" width="200" />
        </div>
    )
}

export default Cloud
