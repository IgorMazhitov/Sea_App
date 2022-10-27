import React, { useContext } from "react";
import Context from "../../../../../Context";
import classes from "./MainDocsCard.module.css"



    const InfoCard = (props) => {

        const {mainDocsList, setMainDocsList} = useContext(Context)

        const {id, text, number, issue, expire, type} = props

        const closeInfo = (id) => {

            setMainDocsList(
        
              mainDocsList.map(el => {
        
                if (el.id === id) {
        
                  el.info = false
        
                }
        
                return el
        
              })
        
            )
        
        }

        if (number || issue || expire) {

            return (

                <div
                className={classes.MainDocsCard}
                > 

                <div
                className={classes.InfoNumber}>

                    <div
                    className={classes.InfoNumberText}
                    >{type} number</div>
                    <div
                    className={classes.InfoNumberData}
                    > {number} </div>

                </div>

                <div
                className={classes.InfoIssue}
                >

                    <div
                    className={classes.InfoNumberText}
                    > Date of issue </div>
                    <div
                    className={classes.InfoNumberData}
                    > {issue} </div>

                </div>

                <div
                className={classes.InfoExpire}
                >

                    <div
                    className={classes.InfoNumberText}
                    > Date of expire </div>
                    <div
                    className={classes.InfoNumberData}
                    > {expire ? expire : 'UNLIMITED'} </div>

                </div>

                <div
                className={classes.InfoDataBack}
                onClick={() => closeInfo(id)}
                >
                    BACK
                </div>

                </div>

            )

        } else {

            return (
                
                <div className={classes.MainDocsCard}>
    
                    <div className={classes.infoCardText}>
                        {text}
                    </div>
                    <div 
                    className={classes.infoCardBack}
                    onClick={() => closeInfo(id)}
                    >
                        BACK
                    </div>
    
                </div>
    
            )

        }

    }

export default InfoCard