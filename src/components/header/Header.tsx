import Data from "../../app/api/dataMock.json";
import Button from "../button/Button";

const Header = () => {
  const layers = Data.layers;

  const navigation = layers.map((layer) => (
    <Button name={layer.name} color={layer.color} />
  ));

  return navigation;
};

export default Header;
