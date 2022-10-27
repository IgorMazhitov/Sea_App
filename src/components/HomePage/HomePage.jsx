import React from "react";
import TreeButtons from "../buttons/TreeButtons";
import classes from "./HomePage.module.css"


    const HomePage = () => {

        const treeButtonsStyleHome = {
            position: 'absolute', 
            left: 419 + 'px',
            top: 321 + 'px'
        }

        return (

            <div
            className={classes.HomePageContainer} 
            >

                <div 
                className={classes.HomePageBlue}
                >

                    <div
                    className={classes.HomePageSeapp}
                    >

                        SEAPP

                    </div>

                </div>

                <div style={treeButtonsStyleHome}> <TreeButtons /> </div>

                <div>

                    <div
                    className={classes.HomePageImage}
                    >

                    </div>

                    <div>

                        <div
                        className={classes.HomePageTextHeader}
                        >
                             Hello, Seafarer! 
                             </div>
                        <div
                        className={classes.HomePageTextMain}
                        >
                             This site will help you to organize you docs. 
                             <br />
                             <br />
                             That’s simple. No more need to calculate, how many days your certificates will be valid! 
                             <br />
                             <br /> 
                             Everything is there, try now! 
                             </div>

                    </div>

                </div>

            </div>

        )

    }

export default HomePage