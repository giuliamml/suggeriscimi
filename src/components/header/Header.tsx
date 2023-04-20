import Data from "../../app/api/dataMock.json";
import Button from "../button/Button";

const Header = (): JSX.Element => {
  const layers = Data.layers;

  return (
    <div style={{position: 'absolute', zIndex: '1', paddingInline: '1rem', paddingBlock: '1rem'}}>
      {layers.map((layer, i) => (
        <Button key={i} name={layer.buttonText} color={layer.color} />
      ))}
    </div>
  );
};

export default Header;
