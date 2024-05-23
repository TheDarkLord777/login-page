import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  Button,
  Input,
  LoginBlock,
  LoginStyled,
  Text,
} from "./Login.styled.ts";
import ConfirmCode from "../ConfirmCode/ConfirmCode.tsx";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isValidCode, setIsValidCode] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler, so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return "";
    }

    const token = await executeRecaptcha("login");
    return token || "";
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify().then((res) => setToken(res));
  }, [handleReCaptchaVerify]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.replace(/\D/g, "");
    setPhoneNumber(input);
    setIsValid(input.length === 9);
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
            code: "",
            captcha: token, // Include reCAPTCHA token in the request payload
          },
        );

        if (response.status === 204) {
          setIsValidCode((prevState) => !prevState);
        } else {
          console.log("Unexpected response status:", response.status);
          setErrorMessage("An error occurred. Please try again later.");
        }
      } catch (error: any) {
        console.error("Error:", error);
        if (error.response && error.response.status === 404) {
          setErrorMessage("User topilmadi");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && isValid) {
      handleButtonClick(e as unknown as MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    (!isValidCode && (
      <LoginStyled>
        <Text>Tizimga kirish</Text>

        <LoginBlock>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+998"
            value={phoneNumber}
            autoFocus
            required
            maxLength={9}
            minLength={9}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <Button type="button" onClick={handleButtonClick} disabled={!isValid}>
            Kirish
          </Button>
        </LoginBlock>
        {errorMessage && (
          <Alert variant="danger">
            <Alert.Heading>{errorMessage}</Alert.Heading>
          </Alert>
        )}
      </LoginStyled>
    )) || <ConfirmCode phoneNumber={phoneNumber} token={token} />
  );
};

export default Login;
