import React, { useContext, useState } from "react";
import Context from "../../../../../Context";
import classes from "./CertCard.module.css"

    const CertDataCard = (props) => {

        const {id, type, duration, info, DataCard} = props
        const {certList, setCertList} = useContext(Context)
        const [number, setNumber] = useState('')
        const [expire, setExpire] = useState('')

        let DurStyle = duration ? classes.InputsContainer : classes.InputsContainerUnlim
        
        const DD = (value) => {

            function callback() {

                return value.split('').splice(-2).join('')

            }

            return callback()

        }

        const MM = (value) => {

            function callback() {

                return value.split('').splice(5, 2).join('')
                
            }

            return callback()

        }

        const YYYY = (value) => {

            function callback() {

                return value.split('').splice(0, 4).join('')
                
            }

            return callback()

        }

        const closeData = (id) => {

            setCertList(

                certList.map(el => {

                    if (el.id === id) {

                        el.DataCard = false

                    }

                    return el

                })

            )

        }

        const submitData = (id) => {

            setCertList(

                certList.map(el => {

                    if (el.id === id) {


                        el.number = number
                        el.issue = (document.querySelector('#CertIsYear').value + '-' + document.querySelector('#CertIsMonth').value + '-' + document.querySelector('#CertIsDay').value)

                        if (document.querySelector('#CertExYear') !== null) {

                            el.expire = (document.querySelector('#CertExYear').value + '-' + document.querySelector('#CertExMonth').value + '-' + document.querySelector('#CertExDay').value) 

                        }

                        el.DataCard = false

                    }

                    return el

                })

            )



        }

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

        return (

            <div
            id={id}
            className={classes.CertDataContainer}
            >

                <div className={DurStyle}>

                    <div className={classes.numberInput}>
                        <label htmlFor="CertNumber">Number</label>
                        <input
                        className={classes.inputField}
                        type="text" 
                        id="CertNumber"
                        value={number}
                        placeholder={props.number ? props.number : 'Enter number . . .'}
                        onChange={e => setNumber(e.target.value)}/>
                    </div>

                    <div className={classes.issueInput}>
                        <div>Date of issue: </div>
                        <div className={classes.IssueInputFields}>

                            <input
                            id="CertIsDay"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.issue ? DD(props.issue) : 'DD'}
                            maxLength={2}
                            max={31}
                            />

                            <input
                            id="CertIsMonth"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.issue ? MM(props.issue) : 'MM'}
                            maxLength={2}
                            max={12}
                            />

                            <input
                            id="CertIsYear"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.issue ? YYYY(props.issue) : 'YYYY'}
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
                            id="CertExDay"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.expire ? DD(props.expire) : 'DD'}
                            maxLength={2}
                            max={31}
                            />
                            <input
                            id="CertExMonth"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.expire ? MM(props.expire) : 'MM'}
                            maxLength={2}
                            max={12}
                            />
                            <input
                            id="CertExYear"
                            onChange={e => maxLength(e)}
                            type="number" 
                            placeholder={props.expire ? YYYY(props.expire) : 'YYYY'}
                            maxLength={4}
                            max={2100}
                            />
                        </div>
                    </div>}

                </div>
            
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

        )

    }

export default CertDataCard