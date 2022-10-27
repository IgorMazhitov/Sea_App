import React, { useContext, useEffect, useState } from "react";
import Context from "../../../../../Context";
import classes from "./MainDocsCard.module.css"

    const DataCard = (props) => {

        const {id, type, duration} = props
        const {mainDocsList, setMainDocsList} = useContext(Context)
        const [number, setNumber] = useState('')
        const [expire, setExpire] = useState('')
            
        const maxLength = (evt) => {

            let check = evt.target.value

            if (check.length > evt.target.maxLength) {

                evt.target.value = check.split('').splice(0, 2).join('')

            }

            setTimeout(() => {

                if (check < 0) {

                    evt.target.maxLength === 4 ? evt.target.value = 2000 : evt.target.value = 1

                }

                if (check > evt.target.max) {
    
                    evt.target.value = evt.target.max
        
                }

            }, 1000)

        }

        let cardImg

        switch (type) {

            case 'Passport':

                cardImg = classes.PassportDataImg
                break;
            
            case `Seaman's Book`:
                cardImg = classes.ImgDataSB
                break;

            case 'Diploma':
                cardImg = classes.DiplomaDataImg
                break;

            case 'Endorsment':
                cardImg = classes.EndorDataImg
                break;

            case 'Medicine':
                cardImg = classes.MedDataImg
                break;

            default:
                cardImg = classes.PassportDataImg
                break;
        }

        const closeData = (id) => {

            setMainDocsList(

                mainDocsList.map(el => {

                    if (el.id === id) {

                        el.addCard = false

                    }

                    return el

                })

            )

        }

        const submitData = (id) => {

            setMainDocsList(

                mainDocsList.map(el => {

                    if (el.id === id) {


                        el.number = number
                        el.issue = (document.querySelector('#IsYear').value + '-' + document.querySelector('#IsMonth').value + '-' + document.querySelector('#IsDay').value)
                        console.log(document.querySelector('#ExYear'))
                        if (document.querySelector('#ExYear') !== null) {

                            el.expire = (document.querySelector('#ExYear').value + '-' + document.querySelector('#ExMonth').value + '-' + document.querySelector('#ExDay').value) 

                        }

                        el.addCard = false

                    }

                    return el

                })

            )



        }

        return (

            <div 
            id={id}
            className={classes.MainDocsCard}>

                <div className={cardImg}>
                </div>

                <div className={classes.GradientContainer}>

                    <div className={classes.numberInput}>
                        <label htmlFor="number">Number</label>
                        <input
                        className={classes.inputField}
                        type="text" 
                        id="number"
                        value={number}
                        placeholder="Enter number"
                        onChange={e => setNumber(e.target.value)}/>
                    </div>

                    <div className={classes.issueInput}>
                        <div>Date of issue: </div>
                        <div className={classes.IssueInputFields}>
                            <input
                            id="IsDay"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="DD"
                            maxLength={2}
                            max={31}
                            />
                            <input
                            id="IsMonth"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="MM"
                            maxLength={2}
                            max={12}
                            />
                            <input
                            id="IsYear"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="YYYY" 
                            maxLength={4}
                            max={2100}
                            />
                        </div>
                        
                    </div>

                    {duration && 
                    <div className={classes.expireInput}>
                        <div>Date of expiration: </div>
                        <div className={classes.ExpireInputFields}>
                            <input
                            id="ExDay"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="DD"
                            maxLength={2}
                            max={31}
                            />
                            <input
                            id="ExMonth"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="MM"
                            maxLength={2}
                            max={12}
                            />
                            <input
                            id="ExYear"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder="YYYY" 
                            maxLength={4}
                            max={2100}
                            />
                        </div>
                    </div>}

                    <div
                    onClick={() => closeData(id)}
                    className={classes.DataBackButton}
                    > 
                        BACK 
                    </div>

                    <div
                    onClick={() => submitData(id)}
                    className={classes.DataSubButton}
                    > 
                        SUBMIT 
                    </div>


                </div>

            </div>

        )

    }

export default DataCard