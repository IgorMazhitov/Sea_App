import React, { useContext } from "react";
import Context from "../../../../../Context";
import classes from "./MainAdd.module.css"

    const MainAdd = (props) => {

        const {id, type, card} = props
        
        const {mainDocsList, setMainDocsList} = useContext(Context)

        const varCard = () => {

            setMainDocsList([

                ...mainDocsList.map(el => {

                    if (el.id === id) {

                        el.card = 'varCard'

                    }

                    return el

                })

            ])

        }

        const addCard = () => {

            let type = document.getElementById('TypeSelect').value
            let duration = document.getElementById('DurationSelect').value

            if (type === '' || duration === '') {

                document.getElementById('VariantWrongHidden').style.display = 'flex'
                setTimeout(() => {

                    document.getElementById('VariantWrongHidden').style.display = 'none'

                }, 1500)

            } else {

                setMainDocsList([
                    ...mainDocsList.filter(el => el.type !== 'ADD'),
    
                    {
    
                        id: Date.now(),
                        type: type,
                        duration: duration === 'Limited' ? true : false,
                        info: false
    
                    },
    
                    {
    
                        id: Date.now() + 1,
                        type: 'ADD'
    
                    }
                ])

            }


        }

        if (card === 'varCard') {

            return (

                <div 
                id={id}
                className={classes.VariantContainer}
                >
                
                    <div className={classes.TypeContainer}>

                        <div>Type</div>

                        <select 
                        className={classes.TypeSelect}
                        id='TypeSelect'
                        name="card-type" 
                        >

                            <option value=""> Choose. . . </option>
                            <option value="Passport"> Passport </option>
                            <option value="Seaman's Book"> Seaman's Book </option>
                            <option value="Diploma"> Diploma </option>
                            <option value="Endorsment"> Endorsment </option>
                            <option value="Medicine"> Medicine </option>

                        </select>

                    </div>

                    <div className={classes.DurationContainer}>

                        <div>Duration</div>

                        <select 
                        className={classes.DurationSelect}
                        id="DurationSelect"
                        name="card-duration" 
                        >

                            <option value=""> Choose. . . </option>
                            <option value="Unlimited"> Unlimited </option>
                            <option value="Limited"> Limited </option>

                        </select>

                    </div>

                    <div 
                    className={classes.VariantAdd}
                    onClick={addCard}
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

        }

        return (

            <div 
            id={id}
            className={classes.AddDocElement}
            >

                <div
                className={classes.AddDocElButtonContainer}
                onClick={varCard}
                > {type} </div>

            </div>

        )

    }

export default MainAdd