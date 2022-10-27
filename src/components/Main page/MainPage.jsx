import React, { useContext } from "react";
import Context from "../../Context";
import DocumentsPage from "../DocumentsPage/DocumentsPage";
import HomePage from "../HomePage/HomePage";

    const MainPage = () => {

        const {page, changePage} = useContext(Context) 

        if (page === 'home') {

            return (

                <HomePage />

            )

        }

        if (page === 'documents') {

            return (

                <DocumentsPage />

            )

        }
    }

export default MainPage