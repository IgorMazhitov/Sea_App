import React from "react";
import MainDocsCard from "./MainDocsCard/MainDocsCard";
import MainAdd from "./MainDocsVariants/MainAdd";
import classes from "./MainDocsElement.module.css"


    const MainDocsElement = (props) => {

        const {id, type} = props

        if (type === 'ADD') {

            return (

                <MainAdd key={id} {...props} />

            )

        } else {

            return (

                    <MainDocsCard key={id} {...props} />

            )

        }

    }

export default MainDocsElement