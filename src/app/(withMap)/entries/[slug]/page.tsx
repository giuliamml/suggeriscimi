import data from "../../../api/dataMock.json";

const Entries = ({ params }) => {
  const entryName = params.slug;
  const decodedName = decodeURI(entryName);

  const entryData = data.entries.find((entry) => entry.name === decodedName);

  console.log(entryData);

  return (
    <div
      style={{
        backgroundColor: "red",
        width: "100%",
        height: "100px",
        position: "absolute",
        bottom: "0px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <h1>{entryData.name}</h1>
      <p>{entryData.description}</p>
      <p>{entryData.address}</p>
    </div>
  );
};

export default Entries;
