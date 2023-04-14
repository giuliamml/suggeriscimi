"use client";

import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../../app/api/dataMock.json";
import Image from "next/image";
import MarkerSvg from "../../../public/marker.svg";
import Link from "next/link";

const MapboxMap = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  // const handleMarkerClick = (marker, url) => {
  //   window.location.href = url;
  //   setSelectedMarker(marker);
  //   setShowPopup(true);
  // };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMarker(null);
  };

  return (
    <Map
      initialViewState={{
        latitude: 38.7223,
        longitude: -9.1393,
        zoom: 12,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      {data.entries.map((entry, index) => (
        <Marker
          key={index}
          latitude={entry.coordinates[0]}
          longitude={entry.coordinates[1]}
          anchor="bottom"
        >
          <Link href={`/entries/${entry.slug}`} as={`/entries/${entry.slug}`}>
            <Image src={MarkerSvg} alt={"marker"} width={40} height={40} />
          </Link>
        </Marker>
      ))}

      {showPopup && selectedMarker !== null ? (
        <Link
          href={`/entries/${data.entries[selectedMarker].slug}`}
          as={`/entries/${data.entries[selectedMarker].slug}`}
        >
          <div
            className="popup"
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
            <button
              style={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={() => handleClosePopup()}
            >
              X
            </button>
            <h1
              style={{
                fontSize: "2rem",
                paddingLeft: "10%",
                paddingTop: "1rem",
              }}
            >
              {data.entries[selectedMarker].name}
            </h1>
          </div>{" "}
        </Link>
      ) : (
        <div
          style={{
            backgroundColor: "green",
            width: "100%",
            height: "100px",
            position: "absolute",
            bottom: "0px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <h1
            style={{ fontSize: "2rem", paddingLeft: "10%", paddingTop: "1rem" }}
          >
            List of all layers
          </h1>
        </div>
      )}
    </Map>
  );
};

export default MapboxMap;
