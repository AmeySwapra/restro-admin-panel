import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaMoneyBillWave,
  FaChartLine,
  FaUsers,
  FaTruck,
  FaStore,
} from "react-icons/fa";
import banner from "../assets/banner/dashbaord-banner.png";

const AdminDashboard = () => {

  const [data] = useState({
    totalUsers: Math.floor(Math.random() * 1000),
    totalRestaurants: Math.floor(Math.random() * 150),
    totalVendors: Math.floor(Math.random() * 200),
    totalDeliveryAgents: Math.floor(Math.random() * 100),
    ordersToday: Math.floor(Math.random() * 300),
    revenueToday: Math.floor(Math.random() * 50000),
  });


  const stats = [
    {
      label: "Total Users",
      value: data.totalUsers,
      icon: <FaUsers size={24} />,
      link: "users",
    },
    {
      label: "Total Restaurants",
      value: data.totalRestaurants,
      icon: <FaUtensils size={24} />,
      link: "restaurants",
    },
    {
      label: "Total Vendors",
      value: data.totalVendors,
      icon: <FaStore size={24} />,
      link: "vendors",
    },
    {
      label: "Total Delivery Agents",
      value: data.totalDeliveryAgents,
      icon: <FaTruck size={24} />,
      link: "delivery-agents",
    },
    {
      label: "Orders Today",
      value: data.ordersToday,
      icon: <FaChartLine size={24} />,
      link: "orders-today",
    },
    {
      label: "Revenue Today",
      value: `₹${data.revenueToday}`,
      icon: <FaMoneyBillWave size={24} />,
      link: "revenue-today",
    },
  ];

 
  const cardStyles = [
    { bgGradient: "linear(to-r, red.400, red.600)", color: "white" },
    { bgGradient: "linear(to-r, green.400, green.600)", color: "white" },
    { bgGradient: "linear(to-r, yellow.400, yellow.600)", color: "black" },
    { bgGradient: "linear(to-r, blue.400, blue.600)", color: "white" },
    { bgGradient: "linear(to-r, purple.400, purple.600)", color: "white" },
    { bgGradient: "linear(to-r, orange.400, orange.600)", color: "white" },
  ];

  return (
    <Box p={4} minHeight="100%" overflowY="auto">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        color={useColorModeValue("gray.800", "white")}
      >
        Admin Dashboard
      </Text>
      <Image
        src={banner}
        alt="Admin Banner"
        w="full"
        borderRadius="md"
        mb={4}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {stats.map((stat, index) => (
          <Link to={`/${stat.link}`} key={index}>
            <Stat p={4} borderRadius="md" boxShadow="lg" {...cardStyles[index]}>
              <Flex align="center" justify="space-between">
                <Box>{stat.icon}</Box>
                <Box textAlign="right">
                  <StatLabel>{stat.label}</StatLabel>
                  <StatNumber>{stat.value}</StatNumber>
                </Box>
              </Flex>
            </Stat>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AdminDashboard;
