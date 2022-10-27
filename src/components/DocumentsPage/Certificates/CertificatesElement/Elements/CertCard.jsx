import React, { useContext } from "react";
import Context from "../../../../../Context";
import DaysLeft from "../../../MainDocs/MainDocsElement/MainDocsCard/Elements /DaysLeft";
import classes from "./CertCard.module.css"
import CertDataCard from "./CertDataCard";
import CertInfoCard from "./CertInfoCard";

    const CertCard = (props) => {

        const {certList, setCertList} = useContext(Context)

        const {id, type, info, DataCard, number, duration, expire} = props

        let CertCardImg, CertInfoText

        switch (type) {

            case 'MEDICAL FIRST AID':
                CertCardImg = classes.MedImg
                CertInfoText = 'This endorsement and training in medical care at management level and is based on the provisions of table A-VI/4-1 and A-VI/4-2 of the STCW Code. This training is for employees with the responsibility of the medical care on board of a ship and they will be competent to participate effectively in co-ordinated schemes for medical assistance on ships at sea and to provide the sick or injured with a satisfactory standard of medical care while they remain on board.'
                break;
            
            case 'ADVANCED FIRE FIGHTING':
                CertCardImg = classes.FireImg
                CertInfoText = 'Seafarers are required to meet the requirements of the STCW Code 1978, as amended set out in Section A-VI/3 of the STCW Code to ensure knowledge and techniques required for fighting fire with particular emphasis on organization, tactics and command and control. With this endorsement and training, mariners will be able to develop a realistic shipboard fire prevention program, effectively organize fire teams and respond to fires aboard a ship.'
                break;
                
            case 'SURVIVAL CRAFT AND RESCUE BOATS':
                CertCardImg = classes.SurImg
                CertInfoText = 'Proficiency in fast rescue boats endorsement has completed approved training in fast rescue boats that meets the standard of competence set out in Section A-VI/2, paragraphs 7 to 10 of the STCW Code. The responsibilities and tasks include - control crowd in emergency situation on board; locate essential safety and emergency equipment on board; communicate effectively with passengers during emergency; demonstrate the use of personal life saving appliances;'
                break;

            case 'BASIC TRAINING':
                CertCardImg = classes.BasImg
                CertInfoText = 'The International Convention on Standards of Training, Certification and Watch-keeping for Seafarers, 1978, as amended (STCW), the associated Code (STCW Code) and Maritime Labour Convention 2006 (MLC 2006) require all seafarers and persons employed or engaged onboard a ship to have safety familiarization and basic training or instructions before being assigned any shipboard tasks or duties.'
                break;

            case 'POLAR WATERS':
                CertCardImg = classes.PolImg
                CertInfoText = 'SOLAS ships operating in polar waters will require a Polar Ship Certificate. This is a new statutory certificate issued by a vessels flag administration or its authorized representatives. The Certificate attests that the ship complies with the ship safety requirements in Part I-A of the Polar Code.'
                break;
            
        }

        const openInfo = (id) => {

            setCertList(
              
                certList.map(el => {
        
                    if (el.id === id) {
        
                        el.info = true
                
                    }
        
                    return el
        
                })
            
            )
        
        }

        const addData = (id) => {

            setCertList(

                certList.map(el => {

                    if (el.id === id) {

                        el.DataCard = true

                    }

                    return el

                })

            )

        }

        if (DataCard) {

            return (

                <CertDataCard {...props} />

            )

        } else if (info) {

            return (

                <CertInfoCard text={CertInfoText} {...props} />

            )

        } else {

            return (
    
                <div
                id={id}
                className={classes.CertCardContainer}>
    
                    <div
                    className={CertCardImg}>
    
                    {type}

                    {duration && <DaysLeft expire={expire} />}

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
                    className={classes.AddDataButContainer}
                    onClick={() => addData(id)}
                    > 
                        
                        <div
                        className={classes.AddDataBut}
                         >
    
                            {number ? 'EDIT' : 'ADD'}
                            
                        </div>
        
                    </div>
    
                </div>
    
            )

        }

    }

export default CertCard