import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

const Commission = () => {
  const commissions = [
    { name: "Spice Delight", orderId: "ORD20001", amount: 150, date: "2024-03-19" },
    { name: "Golden Bites", orderId: "ORD20002", amount: 200, date: "2024-03-18" },
    { name: "Tandoori Treats", orderId: "ORD20003", amount: 175, date: "2024-03-10" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const filterCommissions = () => {
    let today = new Date();
    return commissions.filter((commission) => {
      let commissionDate = new Date(commission.date);
      if (searchQuery && !commission.name.toLowerCase().includes(searchQuery.toLowerCase()) && !commission.orderId.includes(searchQuery)) {
        return false;
      }
      if (filter === "daily") {
        return commissionDate.toDateString() === today.toDateString();
      }
      if (filter === "weekly") {
        let oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);
        return commissionDate >= oneWeekAgo;
      }
      if (filter === "monthly") {
        return commissionDate.getMonth() === today.getMonth() && commissionDate.getFullYear() === today.getFullYear();
      }
      return true;
    });
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Heading size="md" mb={4}>Restaurant and Vendor Commissions</Heading>

      {/* Search and Filter */}
      <VStack spacing={3} align="stretch" mb={4}>
        <Input placeholder="Search by name or order ID" size="md" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Select placeholder="Filter by" onChange={(e) => setFilter(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      </VStack>

      {/* Commission Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Restaurant/Vendor Name</Th>
            <Th>Order ID</Th>
            <Th isNumeric>Commission Amount</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filterCommissions().map((commission, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "gray.500" : "white"}>
              <Td color={index % 2 === 0 ? "white" : "black"}>{commission.name}</Td>
              <Td color={index % 2 === 0 ? "white" : "black"}>{commission.orderId}</Td>
              <Td isNumeric color={index % 2 === 0 ? "white" : "black"}>₹{commission.amount}</Td>
              <Td color={index % 2 === 0 ? "white" : "black"}>{commission.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Commission;
