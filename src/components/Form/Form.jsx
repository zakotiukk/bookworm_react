/*import React, { useCallback, useEffect } from "react";
import "./Form.css";
import {useState} from 'react';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const[city, setCity]= useState('');
    const[subject, setSubject]= useState('physical');
    const [phoneNumber, setPhoneNumber] = useState('+380');

    const {tg} = useTelegram();


    const onSendData = useCallback(() => {
        const data={
            name,surname,email,phoneNumber, city, subject
        }
        tg.sendData(JSON.stringify(data));
    },[name,surname,email, phoneNumber,city,subject])

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
        if(!email || !name || !surname|| !city ) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name,surname,email,city] )

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }


    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Введіть Ваші дані</h3>
            <input className={"input"} type="text" placeholder={"Ім'я"} value={name} onChange={onChangeName} />
            <input className={"input"} type="text" placeholder={"Прізвище"} value={surname} onChange={onChangeSurname} />
            <input className={"input"} type="text" placeholder={"Електронна пошта"} value={email} onChange={onChangeEmail} />
            <input className={"input"} type="text" placeholder={"Телефон"} value={phoneNumber} onChange={onChangePhoneNumber} />
            <input className={"input"} type="text" placeholder={"Місто"} value={city} onChange={onChangeCity}/>
            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Фізична особа</option>
                <option value={"legal"}>Юридична особа</option>
            </select>
        </div>

    );
};

export default Form;
*/
import React, { useCallback, useEffect } from "react";
import "./Form.css";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("physical");
  const [phoneNumber, setPhoneNumber] = useState("+380");

  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      name,
      surname,
      email,
      phoneNumber,
      city,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [name, surname, email, phoneNumber, city, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Надіслати дані",
    });
  }, []);

  useEffect(() => {
    if (!email || !name || !surname || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [name, surname, email, city]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введіть Ваші дані</h3>
      <label htmlFor="name">Ім'я:</label>
      <input
        className={"input"}
        id="name"
        type="text"
        placeholder={"Ім'я"}
        value={name}
        onChange={onChangeName}
      />

      <label htmlFor="surname">Прізвище:</label>
      <input
        className={"input"}
        id="surname"
        type="text"
        placeholder={"Прізвище"}
        value={surname}
        onChange={onChangeSurname}
      />

      <label htmlFor="email">Електронна пошта:</label>
      <input
        className={"input"}
        id="email"
        type="text"
        placeholder={"Електронна пошта"}
        value={email}
        onChange={onChangeEmail}
      />

      <label htmlFor="phoneNumber">Телефон:</label>
      <input
        className={"input"}
        id="phoneNumber"
        type="text"
        placeholder={"Телефон"}
        value={phoneNumber}
        onChange={onChangePhoneNumber}
      />

      <label htmlFor="city">Місто:</label>
      <input
        className={"input"}
        id="city"
        type="text"
        placeholder={"Місто"}
        value={city}
        onChange={onChangeCity}
      />

      <label htmlFor="subject">Тип особи:</label>
      <select
        id="subject"
        value={subject}
        onChange={onChangeSubject}
        className={"select"}
      >
        <option value={"physical"}>Фізична особа</option>
        <option value={"legal"}>Юридична особа</option>
      </select>
    </div>
  );
};

export default Form;
