import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { RestaurantProvider } from "./context/RestaurantContext";
const theme = extendTheme({
  fonts: {
    heading: "'Alice', serif",
    body: "'Alice', serif",
  },
  colors: {
    bg: "#F9FAFB",      
    text: "#1E293B",   
    primary: "#2563EB",
    secondary: "#b962e8", 
    hover: "#1E40AF",   
    white: "#FFFFFF",
  },
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RestaurantProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RestaurantProvider>
  </React.StrictMode>
);
