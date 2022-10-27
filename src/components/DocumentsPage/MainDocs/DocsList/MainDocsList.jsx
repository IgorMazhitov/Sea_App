import React from "react";
import MainDocsElement from "../MainDocsElement/MainDocsElement";
import classes from "./MainDocsList.module.css"

    const MainDocsList = (props) => {

        const list = props.MainList

        return (

            <div>

                <div className={classes.DocumentsPageMainDocsText}> Main Docs: </div>

            
                <div className={classes.MainDocsListContainer}>

                        {list.map(el => <MainDocsElement key={el.id} id={el.id} {...el}/>)}

                </div>

            </div>

        )

    }

export default MainDocsList