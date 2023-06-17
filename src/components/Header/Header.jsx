import React from "react";
import Button from "../Button/Button";

const Header =() => {
    const tg = window.Telegram.WebApp;

    const onClose =()=> {
        tg.close()
      }
    rerurn (
      <div className={"header"}>
        <Button onClick={onClose}>Закрити</Button>
        <span className={"username"}>
            {tg.initDataUnsafe?.user?.username}
        </span>
      </div>  

    );
};