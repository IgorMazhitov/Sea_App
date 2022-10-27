import React from "react";
import classes from "../MainDocsCard.module.css"

    const DaysLeft = (props) => {

        const {expire} = props

        const dateNow = Date.now()
        const expDate = (new Date(expire)).getTime()
        const left = Math.round((expDate - dateNow) / (1000*60*60*24))
        console.log(dateNow, expDate, left)
        const text = `days left: ${left}`

        return (

            <div
            className={classes.DaysLeft}
            >
                {left <= 0 ? 'expired' : text}
            </div>
            
        )

    }

export default DaysLeft
