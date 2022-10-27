import React, { useContext, useState } from "react";
import Context from "../../../../../Context";
import classes from "./CertAdd.module.css"

    const CertAdd = (props) => {

        const {id, type, card} = props
        const {certList, setCertList} = useContext(Context)
        const [openType, setOpenType] = useState(false)
        const [openDur, setOpenDur] = useState(false)

        let TypeArrow = openType ? classes.TypeArrowUp : classes.TypeArrowDown
        let DurArrow = openDur ? classes.DurArrowUp : classes.DurArrowDown

        const varCard = () => {

            setCertList([

                ...certList.map(el => {

                    if (el.id === id) {

                        el.card = 'varCard'

                    }

                    return el

                })

            ])

        }
        
        if (openType) {

            setTimeout(() => {

                let list = document.getElementsByClassName(classes.TypeOptionsList)[0].children
                    
                for (let i = 0; i < list.length; i++) {
        
                    list[i].addEventListener('click', (event) => {
        
                        if (event.target.classList.value === classes.TypeOption) {
        
                            event.target.classList.value = classes.TypeOptionSelected
            
                        } else {
        
                            event.target.classList.value = classes.TypeOption
            
                        }
        
                        document.getElementById('TypeValue').innerHTML = event.target.innerHTML
            
                        setOpenType(!openType)
        
                    })
        
                }

            }, 100)

        }

        if (openDur) {

            setTimeout(() => {

                let list = document.getElementsByClassName(classes.DurOptionsList)[0].children
                    
                for (let i = 0; i < list.length; i++) {
        
                    list[i].addEventListener('click', (event) => {
        
                        if (event.target.classList.value === classes.DurOption) {
        
                            event.target.classList.value = classes.DurOptionSelected
            
                        } else {
        
                            event.target.classList.value = classes.DurOption
            
                        }
        
                        document.getElementById('DurValue').innerHTML = event.target.innerHTML
            
                        setOpenDur(!openDur)
        
                    })
        
                }

            }, 100)

        }

        const addCert = () => {

            setCertList([

                ...certList.filter(el => el.id !== id), 

                {

                    id: Date.now(),
                    type: document.getElementById('TypeValue').innerHTML,
                    duration: document.getElementById('DurValue').innerHTML === 'LIMITED' ? true : false

                },

                {

                    id: Date.now() + 1,
                    type: 'ADD',
                    info: false

                }

            ])

        }




        if (card === 'varCard') {

            return (

                <div 
                id={id}
                className={classes.CertAddContainer}
                >
                    
                    <div className={classes.TypeContainer}>

                        <div className={classes.TypeSelectContainer}>

                            <span> Type </span>

                            <div 
                            className={classes.TypeSelect}
                            onClick={() => {
                                setOpenType(!openType)
                                setOpenDur(false)
                            }}
                            >

                                <span className={classes.TextTypeSelect} id="TypeValue"> Select type . . . </span>
                                <div className={TypeArrow}></div>

                            </div>

                        </div>

                        {openType && <div className={classes.TypeOptionsList}>
                            <div 
                            className={classes.TypeOption}
                            >MEDICAL FIRST AID</div>
                            <div 
                            className={classes.TypeOption}
                            >ADVANCED FIRE FIGHTING</div>
                            <div 
                            className={classes.TypeOption}
                            >SURVIVAL CRAFT AND RESCUE BOATS</div>
                            <div 
                            className={classes.TypeOption}
                            >BASIC TRAINING</div>
                            <div 
                            className={classes.TypeOption}
                            >POLAR WATERS</div>
                        </div>}

                    </div>

                    <div className={classes.DurationContainer}>

                        <div className={classes.DurSelectContainer}>

                            <span> Duration </span>

                            <div 
                            className={classes.DurSelect}
                            onClick={() => {
                                setOpenDur(!openDur)
                                setOpenType(false)
                            }}
                            >

                                <span className={classes.TextDurSelect} id="DurValue"> Select duration . . . </span>
                                <div className={DurArrow}></div>

                            </div>

                        </div>

                        {openDur && <div className={classes.DurOptionsList}>
                            <div 
                            className={classes.DurOption}
                            >LIMITED</div>
                            <div 
                            className={classes.DurOption}
                            >UNLIMITED</div>
                        </div>}

                    </div>

                    <div 
                    className={classes.VariantAdd}
                    onClick={addCert}
                    >
                        ADD
                    </div>

                    <div
                    id='VariantWrongHidden'
                    className={classes.VariantWrong}
                    >
                        Wrong input!
                    </div>

                </div>

            )

        } else {

            return (
    
                <div
                id={id}
                className={classes.CertAddContainer}>
    
                    <div
                    className={classes.CertAddBut}
                    onClick={varCard}
                    > {type} </div>
    
                </div>
    
            )

        }


    }

export default CertAdd