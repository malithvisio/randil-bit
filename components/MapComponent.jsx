"use client";
import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "800px",
  width: "100%",
  position: "relative",
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

const MapComponent = ({ destinations }) => {
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDhvu4X1-gdF8bfiF-M4dE03R1j5LTg4Es", // Replace with your API key
  });

  const redMarkerIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  };

  const whiteDotIcon = {
    path: isLoaded ? google.maps.SymbolPath.CIRCLE : "", // Ensure google is defined
    scale: 6,
    fillColor: "white",
    fillOpacity: 1,
    strokeColor: "blue",
    strokeWeight: 2,
  };

  const handleApiLoaded = useCallback(() => {
    if (!isLoaded || destinations.length < 2) return;

    const directionsService = new google.maps.DirectionsService();

    const waypoints = destinations.slice(1, -1).map((destination) => ({
      location: { lat: destination.lat, lng: destination.lng },
      stopover: true,
    }));

    directionsService.route(
      {
        origin: { lat: destinations[0].lat, lng: destinations[0].lng },
        destination: {
          lat: destinations[destinations.length - 1].lat,
          lng: destinations[destinations.length - 1].lng,
        },
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);

          const route = result.routes[0];
          const legs = route.legs;
          let totalDistance = 0;
          let totalDuration = 0;

          legs.forEach((leg) => {
            totalDistance += leg.distance?.value || 0;
            totalDuration += leg.duration?.value || 0;
          });

          setDistance((totalDistance / 1000).toFixed(1) + " km");
          setDuration(
            Math.floor(totalDuration / 3600) +
              " hr " +
              Math.floor((totalDuration % 3600) / 60) +
              " min"
          );
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  }, [isLoaded, destinations]);

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div style={{ position: "relative" }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        onLoad={handleApiLoaded}
      >
        {destinations.map((destination, index) => (
          <Marker
            key={index}
            position={{ lat: destination.lat, lng: destination.lng }}
            icon={
              index === 0 || index === destinations.length - 1
                ? redMarkerIcon
                : whiteDotIcon
            }
            title={destination.name}
          />
        ))}

        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "blue",
                strokeWeight: 6,
              },
              suppressMarkers: true,
            }}
          />
        )}
      </GoogleMap>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          zIndex: 1000,
        }}
      >
        <h4 style={{ margin: 0, color: "#333" }}>Distance: {distance}</h4>
        <h4 style={{ margin: 0, color: "#333" }}>Duration: {duration}</h4>
      </div>
    </div>
  );
};

export default MapComponent;