import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import SideBar from '../components/common/SideBar';
import AdminPastOrders from '../components/AdminPastOrders';



function PastOrderPage() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1">
        <SideBar />
        <Box flex="1" p={4} bg="bg">
         <AdminPastOrders/>
        </Box>
      </Flex>
    </Flex>
  );
}

export default PastOrderPage;
