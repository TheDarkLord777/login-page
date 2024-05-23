import {
  LoginStyledOne,
  SelectLink,
  SelectPageContainer,
  TextNumber2,
} from "./SelectPage.styled.ts";
import { Button } from "antd";

const SelectPage = () => {
  return (
    <LoginStyledOne>
      <TextNumber2>Platformani tanlang</TextNumber2>
      <SelectPageContainer>
        <Button type="primary" size={"large"}>
          <SelectLink href="/tomorqa">Tomorqa</SelectLink>
        </Button>
        <Button type="primary" size={"large"}>
          <SelectLink href="/fermerlar">Yosh fermerlar</SelectLink>
        </Button>
      </SelectPageContainer>
    </LoginStyledOne>
  );
};
export default SelectPage;
