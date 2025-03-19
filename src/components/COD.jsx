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
  Switch,
  FormControl,
  FormLabel,
  VStack,
  Input,
  Select,
} from "@chakra-ui/react";

const COD = () => {
  const codTransactions = [
    { agent: "Ravi Sharma", orderId: "ORD10001", amount: 500, depositedTo: "Rajesh Verma", date: "2024-03-19" },
    { agent: "Amit Kumar", orderId: "ORD10002", amount: 750, depositedTo: "Sunil Mehta", date: "2024-03-18" },
    { agent: "Priya Singh", orderId: "ORD10003", amount: 600, depositedTo: "Deepak Joshi", date: "2024-03-12" },
  ];

  const [isCODEnabled, setIsCODEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const filterTransactions = () => {
    let today = new Date();
    return codTransactions.filter((transaction) => {
      let transactionDate = new Date(transaction.date);
      if (searchQuery && !transaction.agent.toLowerCase().includes(searchQuery.toLowerCase()) && !transaction.orderId.includes(searchQuery)) {
        return false;
      }
      if (filter === "daily") {
        return transactionDate.toDateString() === today.toDateString();
      }
      if (filter === "weekly") {
        let oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);
        return transactionDate >= oneWeekAgo;
      }
      if (filter === "monthly") {
        return transactionDate.getMonth() === today.getMonth() && transactionDate.getFullYear() === today.getFullYear();
      }
      return true;
    });
  };

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mt={6}>
      <Heading size="md" mb={4}>Cash on Delivery (COD) Transactions</Heading>

      {/* COD Toggle */}
      <FormControl display="flex" alignItems="center" mb={4}>
        <FormLabel htmlFor="cod-toggle" mb="0">Enable COD After 10 PM</FormLabel>
        <Switch
          id="cod-toggle"
          isChecked={isCODEnabled}
          onChange={() => setIsCODEnabled(!isCODEnabled)}
          colorScheme="teal"
        />
      </FormControl>

      {/* Search and Filter */}
      <VStack spacing={3} align="stretch" mb={4}>
        <Input placeholder="Search by agent or order ID" size="md" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Select placeholder="Filter by" onChange={(e) => setFilter(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      </VStack>

      {/* COD Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Delivery Agent</Th>
            <Th>Order ID</Th>
            <Th isNumeric>COD Amount</Th>
            <Th>Deposited To</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filterTransactions().map((transaction, index) => (
            <Tr key={index} bg={index % 2 === 0 ? "gray.500" : "white"}>
              <Td color={index % 2 === 0 ? "white" : "black"}>{transaction.agent}</Td>
              <Td color={index % 2 === 0 ? "white" : "black"}>{transaction.orderId}</Td>
              <Td isNumeric color={index % 2 === 0 ? "white" : "black"} >₹{transaction.amount}</Td>
              <Td color={index % 2 === 0 ? "white" : "black"}>{transaction.depositedTo}</Td>
              <Td color={index % 2 === 0 ? "white" : "black"}>{transaction.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default COD;
