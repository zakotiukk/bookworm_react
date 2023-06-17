import React, { useCallback, useEffect } from "react";
import "./Form.css";
import {useState} from 'react';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const[city, setCity]= useState('');
    const[street, setStreet]= useState('');
    const[subject, setSubject]= useState('physical');
    const {tg} = useTelegram();


    const onSendData = useCallback(() => {
        const data={
            city, street, subject
        }
        tg.sendData(JSON.stringify(data));
    },[city,street,subject])

    useEffect( () => {
        tg.onEvent('mainButtonClicked', onSendData)
        return ()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData] )

    useEffect( () => {
        tg.MainButton.setParams({
            text:"Надіслати дані"
        })
    }, [] )


    useEffect( () => {
        if(!city || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [city,street] )

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введіть Ваші дані</h3>
            <input className={"input"} type="text" placeholder={"Місто"} value={city} onChange={onChangeCity}/>
            <input className={"input"} type="text" placeholder={"Вулиця"} value={street} onChange={onChangeStreet} />

            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Фізична особа</option>
                <option value={"legal"}>Юридична особа</option>
            </select>
        </div>

    );
};

export default Form;