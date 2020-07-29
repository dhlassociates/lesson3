import React from "react";
import Particles from "react-particles-js"
import {makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    particlesCanvas :{
        position: "absolute",
        opacity: "0.3"
    }
})

const ParticlesCanvas = () => {
    const classes = useStyles();
    
    return (
        <div>
          <Particles canvasClassName={classes.particlesCanvas}
            params={{
                particles:{
                    number: {
                        value: 45,
                        density:{
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape:{
                        type: "circle",
                        stroke:{
                            width: 1,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 8,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 8,
                            size_min:0.1,
                            sync: true
                        }
                    }
                }
            }}
        />
            
        </div>
    )
}

export default ParticlesCanvas
