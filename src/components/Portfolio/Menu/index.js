import {
  MenuItem,
  MenuItemLink,
  Wrapper,
  Inner,
} from "./Menu.styles";

const Menu = ({ items }) => {
  var output = items.map((item) => (
    <MenuItem key={item.text}>
      <MenuItemLink href={item.href}>{item.text}</MenuItemLink>
    </MenuItem>
  ));
  return (
    <Wrapper>
      <Inner>{output}</Inner>
    </Wrapper >
  );
};

export default Menu;
