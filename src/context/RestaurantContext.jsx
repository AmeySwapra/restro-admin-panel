// RestaurantContext.js
import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
    name: "FoodieBay",
    email: "info@foodiebay.com",
    phone: "+91 9876543210",
    address: "123, Main Street, City, Country",
    cuisineType: "Italian",
    profileCompletion: 60,
    kyc: {
      gst: "GST123456789",
      pan: "ABCDE1234F",
    },
    approvalStatus: "Pending",
    documents: {
      gstCertificate: null,
      panCard: null,
      fssaiLicense: null,
    },
  });

  return (
    <RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};