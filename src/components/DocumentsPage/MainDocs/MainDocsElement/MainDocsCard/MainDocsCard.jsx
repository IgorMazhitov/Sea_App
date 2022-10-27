import React, { useContext } from "react";
import Context from "../../../../../Context";
import DataCard from "./DataCard";
import DaysLeft from "./Elements /DaysLeft";
import InfoCard from "./InfoCard";
import classes from "./MainDocsCard.module.css"

    const MainDocsCard = (props) => {

        const {id, info, type, addCard, number, issue, expire} = props

        const {mainDocsList, setMainDocsList} = useContext(Context)

        let cardImg, infoText

        switch (type) {

            case 'Passport':

                cardImg = classes.PassportImg
                infoText = 'A travel document is an identity document issued by a government or international entity pursuant to international agreements to enable individuals to clear border control measures. Travel documents usually assure other governments that the bearer may return to the issuing country, and are often issued in booklet form to allow other governments to place visas as well as entry and exit stamps into them.'
                break;
            
            case `Seaman's Book`:
                cardImg = classes.ImgSB
                infoText = 'Seaman Service Book (SSB) is a continuous record of a seaman’s service. This document certifies that the person holding is a seaman as per the International Convention on Standards of Training, Certification and Watch keeping for Seafarers (STCW), 1978, as amended from time to time. Seaman Book is one of the compulsory document for applying crew transit visas.'
                break;

            case 'Diploma':
                cardImg = classes.DiplomaImg
                infoText = 'A diploma is a document awarded by an educational institution (such as a college or university) testifying the recipient has graduated by successfully completing their courses of studies. Historically, it has also referred to a charter or official document of diplomacy.'
                break;

            case 'Endorsment':
                cardImg = classes.EndorImg
                infoText = 'Your endorsement is valid for five years and can be renewed. With this endorsement, you can work on tankers carrying the type of cargo described on your endorsement and perform duties to the designated level (basic or advanced).'
                break;

            case 'Medicine':
                cardImg = classes.MedImg
                infoText = 'What Does Medical Examination Mean? A medical examination, also known as a physical examination, refers to a standard health procedure to assess vital signs including blood pressure, body temperature, pulse rate, and respiration.'
                break;

            default:
                cardImg = classes.PassportImg
                infoText = 'A travel document is an identity document issued by a government or international entity pursuant to international agreements to enable individuals to clear border control measures. Travel documents usually assure other governments that the bearer may return to the issuing country, and are often issued in booklet form to allow other governments to place visas as well as entry and exit stamps into them.'
                break;
        }


        const openInfo = (id) => {

            setMainDocsList(
              
                mainDocsList.map(el => {
        
                    if (el.id === id) {
        
                        el.info = true
                
                    }
        
                    return el
        
                })
            
            )
        
        }

        const openAdd = (id) => {

            setMainDocsList(

                mainDocsList.map(el => {

                    if (el.id === id) {

                        el.addCard = true

                    }

                    return el

                })

            )

        }

        if (addCard) {

            return (

                <DataCard {...props}/>

            )

        } else if (info) {

            return (

                <InfoCard {...props} text={infoText}/>

            )

        } else {

            return (
    
                <div
                id={id}
                className={classes.MainDocsCard}
                >
    
                    <div 
                    className={cardImg}
                    >
    
                        <div
                        className={classes.text}
                        > {type} </div>

                        {expire ? <DaysLeft {...props} /> : ''}
    
                    </div>
    
                    <div
                    className={classes.infoButton}
                    onClick={() => openInfo(id)}
                    > 
                    
                        <div
                        className={classes.infoButtonText}
                        > INFO </div>
    
                    </div>

                    <div
                    className={classes.addInfoButton}
                    onClick={() => openAdd(id)}
                    > 
                    
                        <div
                        className={classes.addInfoButtonText}
                        >

                            {number ? 'EDIT' : 'ADD'}
                        
                        </div>
    
                    </div>
    
                </div>
    
            )

        }

    }

export default MainDocsCard