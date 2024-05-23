import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("src/assets/images/LoginBackground.jpg");
  background-size: cover;
  background-position: center;
`;
export const LoginBlock = styled.form`
  min-width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset -5px -5px rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 40px;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  font-family: ALSRegular, sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset -3px -3px rgba(0, 0, 0, 0.5);
  color: white;
  outline: none;

  &:first-child {
    margin-top: 50px;
  }

  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset -3px -3px rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: auto 0;
  font-family: ALSBold, sans-serif;
  font-size: 18px;

  &:hover {
    background-color: rgba(255, 2555, 255, 0.1); /* Darker blue on hover */
  }
`;
export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset -5px -5px rgba(0, 0, 0, 0.5);
`;
export const Text = styled.p`
  background: black;
  color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 350px;
  text-align: center;
  font-family: ALSBold, sans-serif;
  font-size: 20px;
`;
