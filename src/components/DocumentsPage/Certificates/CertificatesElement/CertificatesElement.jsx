import React from "react";
import CertAdd from "./CertDocsVariants/CertAdd";
import CertCard from "./Elements/CertCard";

    const CertificatesElement = (props) => {

        const {type} = props

        if (type === 'ADD') {

            return (

                <CertAdd {...props} />
    
            )

        } else {

            return (

                <CertCard {...props} />

            )

        }


    }

export default CertificatesElement