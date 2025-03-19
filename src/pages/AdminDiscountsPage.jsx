import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import AdminDiscounts from "../components/AdminDiscounts";

function AdminDiscountPage() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1">
        <SideBar />
        <Box flex="1" p={4} bg="bg">
          <AdminDiscounts />
        </Box>
      </Flex>
    </Flex>
  );
}

export default AdminDiscountPage;
