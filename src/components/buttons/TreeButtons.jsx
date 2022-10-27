import React, { useContext, useState } from "react";
import Context from "../../Context";
import classes from "./TreeButtons.module.css"

    const TreeButtons = () => {

        const {page, changePage} = useContext(Context)


        return (
            <div className={classes.treeButtonsContainer}>
                <div 
                className={classes.treeButtonsElement}
                
                >
                    <div 
                    className={classes.treeButtonsBorder}
                    onClick={e => changePage('home')}
                    >    
                        <div className={classes.treeButtonsText}> HOME </div>
                    </div>
                </div>
                <div 
                className={classes.treeButtonsElement}
                onClick={e => changePage('documents')}
                >
                    <div className={classes.treeButtonsBorder}>
                        <div className={classes.treeButtonsText}> DOCUMENTS </div>
                    </div>
                </div>
                <div 
                className={classes.treeButtonsElement}
                onClick={e => changePage('contacts')}
                >
                    <div className={classes.treeButtonsBorder}>
                        <div className={classes.treeButtonsText}> CONTACTS </div>
                    </div>
                </div>
            </div>
        )
    }

export default TreeButtons