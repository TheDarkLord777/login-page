import {
  Button,
  Input,
  LoginBlock,
  LoginStyled,
  Text,
} from "../Login/Login.styled.ts";

const Change = () => {
  return (
    <LoginStyled style={{ background: "none" }}>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>

      <Text>O`zgartirish kiritish</Text>
      <LoginBlock style={{ height: "fit-content", gap: "10px" }}>
        <Input type="tel" name="phone" id="phone" placeholder="___" />
        <Input type="tel" name="phone" id="phone" placeholder="___" />
        <Input type="tel" name="phone" id="phone" placeholder="___" />
        <Input type="tel" name="phone" id="phone" placeholder="___" />
        <Input type="tel" name="phone" id="phone" placeholder="___" />
        <Button type="button">Submit</Button>
      </LoginBlock>
    </LoginStyled>
  );
};
export default Change;
