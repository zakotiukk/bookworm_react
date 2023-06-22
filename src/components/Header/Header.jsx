import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
const Header =() => {
    const {user,onClose} =useTelegram();
    const navigate = useNavigate();
    const location = useLocation();
    
  const navigateToProductList = () => {
    navigate("/");
  };
  const isProductDetailsPage = location.pathname.includes("/product/");
    return (
      <div className={"header"}>
        {isProductDetailsPage && (
        <Button title={"Назад"} type={"back"} onClick={navigateToProductList} />
      )}
        <span className={"username"}>
            {user?.username}
        </span>
      </div>  

    );
};

export default Header;