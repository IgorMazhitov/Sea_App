import React from "react";
import classes from "./CertificatesList.module.css"
import CertificatesElement from "../CertificatesElement/CertificatesElement";

    const CertificateList = (props) => {

        const list = props.CertList

        return (

            <div className={classes.CertListContainer}>

                {list.map(el => <CertificatesElement key={el.id} {...el} />)}

            </div>

        )

    }

export default CertificateList