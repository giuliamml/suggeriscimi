import Data from "../../app/api/dataMock.json";
import Button from "../button/Button";

const Header = (): JSX.Element => {
  const layers = Data.layers;

  return (
    <div>
      {layers.map((layer, i) => (
        <Button key={i} name={layer.name} color={layer.color} />
      ))}
    </div>
  );
};

export default Header;
