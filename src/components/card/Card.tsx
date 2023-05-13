import Image from "next/image";
import DoisArcos from "../../../public/assets/images/dois-arcos.jpg";
import CopySvg from "../../../public/assets/icons/copy.svg";
import ShareSvg from "../../../public/assets/icons/share.svg";

const Card = (props) => {
  const splitString = (str) => {
    const refactoredString = str.split(/(?=[A-Z])/).join(" ");

    return refactoredString;
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          right: "20px",
          top: "10px",
          gap: "10px",
        }}
      >
        <Image src={CopySvg} alt="" />
        <Image src={ShareSvg} alt="" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gridGap: "16px",
        }}
      >
        <div>
          <Image src={DoisArcos} alt="" style={{ height: "100%" }} />
        </div>
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.25px",
              color: "orange", // TODO: get parent layers color
              lineHeight: "16px",
              textTransform: "uppercase",
            }}
          >
            {splitString(props.data.parentLayer)}
          </p>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "500",
              letterSpacing: "0.25px",
              color: "#000000DE",
            }}
          >
            {props.data.name}
          </h1>
          <p
            style={{
              color: "#00000099",
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0.25px",
            }}
          >
            {props.data.address}
          </p>
        </div>
      </div>
      <p
        style={{
          paddingBlockStart: "1.5rem",
          color: "#00000099",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.25px",
        }}
      >
        {props.data.description}
      </p>
    </div>
  );
};

export default Card;
