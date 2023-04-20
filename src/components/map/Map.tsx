"use client";

import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { entries } from "../../app/api/db.js";
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
      {entries.map((entry, index) => (



        <Marker
          key={index}
          latitude={entry.coordinates[0]}
          longitude={entry.coordinates[1]}
          color="pink"
          anchor="bottom"
        >
          <Link href={`/entries/${entry.slug}`} as={`/entries/${entry.slug}`}>
            {/* <Image src={MarkerSvg} alt={"marker"} width={40} height={40}/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              className={`icon my-color-${entry.layer.color}`}
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 85.333c-164.95 0-298.667 133.739-298.667 298.667C213.333 548.95 512 938.667 512 938.667S810.667 548.949 810.667 384c0-164.928-133.718-298.667-298.667-298.667zm0 448a149.333 149.333 0 1 1 0-298.666 149.333 149.333 0 0 1 0 298.666z"
              />
            </svg>
          </Link>
        </Marker>
      ))}

      {showPopup && selectedMarker !== null ? (
        <Link
          href={`/entries/${entries[selectedMarker].slug}`}
          as={`/entries/${entries[selectedMarker].slug}`}
        >
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
              {entries[selectedMarker].name}
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
