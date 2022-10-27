import React, { useContext } from "react";
import Context from "../../Context";
import TreeButtons from "../buttons/TreeButtons";
import CertificateList from "./Certificates/CertificatesList/CertificatesList";
import classes from "./DocumentsPage.module.css"
import MainDocsList from "./MainDocs/DocsList/MainDocsList";

    const DocumentsPage = () => {

        const {mainDocsList, certList} = useContext(Context)

        return (

            <div>

                <div className={classes.DocumentsPageTreeButtons}>
                
                    <TreeButtons/>

                </div>

                <div className={classes.DocumentsPageContainer}>

                    <MainDocsList MainList={mainDocsList}/>


                    <div className={classes.CertificatesContainer}>

                        <div className={classes.DocumentsPageCertificatesText}> Certificates: </div>

                            <CertificateList CertList={certList}/>

                    </div>

                    <div className={classes.VisasContainer}>

                        <div className={classes.DocumentsPageVisasText}> Visas: </div>

                            bom bom bom

                    </div>

                </div>

            </div>

        )

    }

export default DocumentsPage