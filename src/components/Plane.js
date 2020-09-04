import React, { useEffect } from 'react'
import plane from '../images/plane-shoot.png';
import useWebAnimations from '@wellyshen/use-web-animations';

const Plane = () => {
    const { ref, playState, animate } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" }, // Move by 500px
            { transform: "translateY(-100%)" }, // Go through three colors
        ],
        timing: {
            easing: "steps(5, end)",
            direction: "reverse",
            duration: 500,
            playbackRate: 1,
            iterations: Infinity
        },
    });

    return (
        <div id="plane-div" >
            <img ref={ref} src={plane} width="443" width="302" id="plane-sprite" />
        </div>
    )
}

export default Plane
