import React, { KeyboardEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Input,
  LoginBlock,
  LoginStyled,
  Text,
} from "../Login/Login.styled.ts";
import Alert from "react-bootstrap/Alert";

const ConfirmCode = ({
  token,
  phoneNumber,
}: {
  token: string;
  phoneNumber: string;
}) => {
  const [code, setCode] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const isValid = code.length === 6;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setCode(input);
  };

  const handleButtonClick = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (isValid) {
      try {
        const response = await axios.post(
          "https://edu.fermermaktab.uz/api/v1/auth/login",
          {
            phone: "998" + phoneNumber,
            code: code,
            captcha: token, // Include reCAPTCHA token in the request payload
          },
        );

        console.log(response);
        if (response.status === 200) {
          console.log(response.data.id);
          localStorage.setItem("accessToken", response.data.accessToken);
          console.log("LocalStorage:" + localStorage.getItem("accessToken"));
          navigate("/select-platform");
        }
      } catch (error) {
        console.error("Error:", error);
        setShowAlert(true); // Show alert if an error occurs
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && isValid) {
      handleButtonClick(e as unknown as MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <LoginStyled>
      <Text>Sizga kod jonatildi</Text>
      <LoginBlock>
        <Input
          type="tel"
          name="code"
          id="code"
          placeholder="******"
          autoFocus
          required
          maxLength={6}
          minLength={6}
          value={code}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <Button type="button" onClick={handleButtonClick} disabled={!isValid}>
          Davom etish
        </Button>
      </LoginBlock>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          The entered code is incorrect. Please try again.
        </Alert>
      )}
    </LoginStyled>
  );
};

export default ConfirmCode;
