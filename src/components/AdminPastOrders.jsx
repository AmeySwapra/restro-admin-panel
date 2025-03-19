import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Badge,
  VStack,
  HStack,
} from '@chakra-ui/react';
import Pagination from './common/Pagination';

const AdminPastOrders = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const orders = [
    { id: 1, status: 'completed', hotelName: 'The Great Kitchen', dishName: 'Butter Chicken', customerName: 'John Doe', customerNumber: '+91 9876543210', distance: '2.5 km', orderDate: '2023-10-01', deliveryTime: '30 mins', paymentMethod: 'UPI', totalAmount: '₹450' },
    { id: 2, status: 'completed', hotelName: 'Tasty Treats', dishName: 'Paneer Tikka', customerName: 'Jane Smith', customerNumber: '+91 9876543211', distance: '1.8 km', orderDate: '2023-10-02', deliveryTime: '25 mins', paymentMethod: 'Cash on Delivery', totalAmount: '₹300' },
    { id: 3, status: 'rejected', hotelName: 'Food Paradise', dishName: 'Chicken Biryani', customerName: 'Alice Johnson', customerNumber: '+91 9876543212', distance: '3.2 km', orderDate: '2023-10-03', deliveryTime: '20 mins', paymentMethod: 'Credit Card', totalAmount: '₹250' },
    { id: 4, status: 'completed', hotelName: 'Spice Hub', dishName: 'Dal Makhani', customerName: 'Bob Brown', customerNumber: '+91 9876543213', distance: '4.0 km', orderDate: '2023-10-04', deliveryTime: '35 mins', paymentMethod: 'UPI', totalAmount: '₹200' },
    { id: 5, status: 'completed', hotelName: 'The Great Kitchen', dishName: 'Naan', customerName: 'Charlie Davis', customerNumber: '+91 9876543214', distance: '5.5 km', orderDate: '2023-10-05', deliveryTime: '40 mins', paymentMethod: 'Credit Card', totalAmount: '₹100' },
    { id: 6, status: 'rejected', hotelName: 'Tasty Treats', dishName: 'Tandoori Roti', customerName: 'Diana Evans', customerNumber: '+91 9876543215', distance: '1.2 km', orderDate: '2023-10-06', deliveryTime: '15 mins', paymentMethod: 'UPI', totalAmount: '₹50' },
    { id: 7, status: 'completed', hotelName: 'Food Paradise', dishName: 'Veg Biryani', customerName: 'Eva Green', customerNumber: '+91 9876543216', distance: '2.8 km', orderDate: '2023-10-07', deliveryTime: '28 mins', paymentMethod: 'Cash on Delivery', totalAmount: '₹180' },
    { id: 8, status: 'completed', hotelName: 'Spice Hub', dishName: 'Chicken Curry', customerName: 'Frank Harris', customerNumber: '+91 9876543217', distance: '1.5 km', orderDate: '2023-10-08', deliveryTime: '10 mins', paymentMethod: 'UPI', totalAmount: '₹220' },
    { id: 9, status: 'rejected', hotelName: 'The Great Kitchen', dishName: 'Fish Curry', customerName: 'Grace Lee', customerNumber: '+91 9876543218', distance: '2.0 km', orderDate: '2023-10-09', deliveryTime: '18 mins', paymentMethod: 'Credit Card', totalAmount: '₹280' },
    { id: 10, status: 'completed', hotelName: 'Tasty Treats', dishName: 'Butter Naan', customerName: 'Henry Wilson', customerNumber: '+91 9876543219', distance: '3.7 km', orderDate: '2023-10-10', deliveryTime: '32 mins', paymentMethod: 'UPI', totalAmount: '₹120' },
  ];

  
  const filteredOrders = orders.filter((order) => {
    return (
      (filter === 'all' || order.status === filter) &&
      (order.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.dishName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredOrders.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>All Past Orders (Admin View)</Heading>

      <HStack spacing={4} mb={4}>
        <Input
          placeholder="Search by restaurant, customer, or dish"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          maxW="300px"
        />

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          maxW="200px"
        >
          <option value="all">All Orders</option>
          <option value="completed">Completed Orders</option>
          <option value="rejected">Rejected Orders</option>
        </Select>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {currentCards.map((order) => (
          <Card key={order.id} variant="outline" boxShadow={'dark-lg'}>
            <CardHeader>
              <HStack justify="space-between">
                <Text fontSize="lg" fontWeight="bold">
                  Order #{order.id}
                </Text>
                <Badge
                  colorScheme={order.status === 'completed' ? 'green' : 'red'}
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {order.status === 'completed' ? 'Completed' : 'Rejected'}
                </Badge>
              </HStack>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={2}>
                <Text><strong>Hotel:</strong> {order.hotelName}</Text>
                <Text><strong>Dish:</strong> {order.dishName}</Text>
                <Text><strong>Customer:</strong> {order.customerName}</Text>
                <Text><strong>Phone:</strong> {order.customerNumber}</Text>
                <Text><strong>Order Date:</strong> {order.orderDate}</Text>
                <Text><strong>Payment Method:</strong> {order.paymentMethod}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Text fontSize="lg" fontWeight="bold">Total: {order.totalAmount}</Text>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default AdminPastOrders;
