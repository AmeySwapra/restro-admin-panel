import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  VStack,
  HStack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

const RestroVendor = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedRestro, setSelectedRestro] = useState(null); 
  const [selectedVendor, setSelectedVendor] = useState(null); 
  const { isOpen: isRestroOpen, onOpen: onRestroOpen, onClose: onRestroClose } = useDisclosure();
  const { isOpen: isVendorOpen, onOpen: onVendorOpen, onClose: onVendorClose } = useDisclosure(); 


  const restaurants = [
    {
      id: 1,
      name: 'The Great Kitchen',
      cuisine: 'North Indian',
      location: 'Delhi',
      rating: 4.5,
      totalOrders: 120,
      lastOrder: '2023-10-05 - Butter Chicken (₹450)',
      feedbacks: ['Great food!', 'Excellent service.'],
      complaints: ['Late delivery once.'],
    },
    {
      id: 2,
      name: 'Spice Garden',
      cuisine: 'South Indian',
      location: 'Bangalore',
      rating: 4.2,
      totalOrders: 90,
      lastOrder: '2023-10-06 - Paneer Tikka (₹300)',
      feedbacks: ['Good experience.'],
      complaints: [],
    },
    {
      id: 3,
      name: 'Punjabi Dhaba',
      cuisine: 'Punjabi',
      location: 'Chandigarh',
      rating: 4.7,
      totalOrders: 150,
      lastOrder: '2023-10-07 - Sarson Ka Saag (₹200)',
      feedbacks: ['Authentic taste!'],
      complaints: [],
    },
    {
      id: 4,
      name: 'Chinese Wok',
      cuisine: 'Chinese',
      location: 'Mumbai',
      rating: 4.0,
      totalOrders: 80,
      lastOrder: '2023-10-08 - Hakka Noodles (₹180)',
      feedbacks: ['Tasty food.'],
      complaints: ['Late delivery once.'],
    },
    {
      id: 5,
      name: 'Italian Bistro',
      cuisine: 'Italian',
      location: 'Pune',
      rating: 4.4,
      totalOrders: 70,
      lastOrder: '2023-10-09 - Margherita Pizza (₹350)',
      feedbacks: ['Great ambiance.'],
      complaints: [],
    },
    {
      id: 6,
      name: 'Thai Corner',
      cuisine: 'Thai',
      location: 'Hyderabad',
      rating: 4.3,
      totalOrders: 60,
      lastOrder: '2023-10-10 - Green Curry (₹280)',
      feedbacks: ['Authentic Thai flavors.'],
      complaints: [],
    },
    {
      id: 7,
      name: 'Mexican Grill',
      cuisine: 'Mexican',
      location: 'Chennai',
      rating: 4.1,
      totalOrders: 50,
      lastOrder: '2023-10-11 - Tacos (₹220)',
      feedbacks: ['Spicy and delicious.'],
      complaints: [],
    },
    {
      id: 8,
      name: 'Sushi House',
      cuisine: 'Japanese',
      location: 'Kolkata',
      rating: 4.6,
      totalOrders: 100,
      lastOrder: '2023-10-12 - Sushi Platter (₹500)',
      feedbacks: ['Fresh and tasty.'],
      complaints: [],
    },
    {
      id: 9,
      name: 'Burger Junction',
      cuisine: 'American',
      location: 'Ahmedabad',
      rating: 4.0,
      totalOrders: 110,
      lastOrder: '2023-10-13 - Cheeseburger (₹150)',
      feedbacks: ['Juicy burgers.'],
      complaints: [],
    },
    {
      id: 10,
      name: 'Kebab Factory',
      cuisine: 'Mughlai',
      location: 'Lucknow',
      rating: 4.8,
      totalOrders: 130,
      lastOrder: '2023-10-14 - Chicken Kebab (₹300)',
      feedbacks: ['Best kebabs in town!'],
      complaints: [],
    },
  ];

 
  const vendors = [
    {
      id: 1,
      name: 'Fresh Grocery Store',
      category: 'Grocery Store',
      location: 'Delhi',
      rating: 4.3,
      totalOrders: 80,
      lastOrder: '2023-10-05 - Rice (₹200)',
      feedbacks: ['Fresh products!'],
      complaints: [],
    },
    {
      id: 2,
      name: 'Green Veggies Store',
      category: 'Veggies Store',
      location: 'Bangalore',
      rating: 4.0,
      totalOrders: 60,
      lastOrder: '2023-10-06 - Spinach (₹50)',
      feedbacks: ['Good quality veggies.'],
      complaints: ['Late delivery once.'],
    },
    {
      id: 3,
      name: 'Fruit Basket',
      category: 'Fruits Store',
      location: 'Mumbai',
      rating: 4.5,
      totalOrders: 90,
      lastOrder: '2023-10-07 - Apples (₹100)',
      feedbacks: ['Fresh and juicy fruits.'],
      complaints: [],
    },
    {
      id: 4,
      name: 'Meat Masters',
      category: 'Meat Store',
      location: 'Hyderabad',
      rating: 4.2,
      totalOrders: 70,
      lastOrder: '2023-10-08 - Chicken (₹300)',
      feedbacks: ['High-quality meat.'],
      complaints: [],
    },
    {
      id: 5,
      name: 'Liquor Land',
      category: 'Liquor Store',
      location: 'Pune',
      rating: 4.1,
      totalOrders: 50,
      lastOrder: '2023-10-09 - Whiskey (₹1200)',
      feedbacks: ['Great collection.'],
      complaints: [],
    },
    {
      id: 6,
      name: 'Organic Grocery',
      category: 'Grocery Store',
      location: 'Chennai',
      rating: 4.4,
      totalOrders: 85,
      lastOrder: '2023-10-10 - Organic Rice (₹250)',
      feedbacks: ['Healthy options.'],
      complaints: [],
    },
    {
      id: 7,
      name: 'Fresh Veggies',
      category: 'Veggies Store',
      location: 'Kolkata',
      rating: 4.0,
      totalOrders: 65,
      lastOrder: '2023-10-11 - Carrots (₹40)',
      feedbacks: ['Fresh and affordable.'],
      complaints: [],
    },
    {
      id: 8,
      name: 'Fruit Paradise',
      category: 'Fruits Store',
      location: 'Ahmedabad',
      rating: 4.6,
      totalOrders: 95,
      lastOrder: '2023-10-12 - Mangoes (₹150)',
      feedbacks: ['Best fruits in town!'],
      complaints: [],
    },
    {
      id: 9,
      name: 'Meat World',
      category: 'Meat Store',
      location: 'Lucknow',
      rating: 4.3,
      totalOrders: 75,
      lastOrder: '2023-10-13 - Mutton (₹500)',
      feedbacks: ['Premium quality meat.'],
      complaints: [],
    },
    {
      id: 10,
      name: 'Wine Cellar',
      category: 'Liquor Store',
      location: 'Chandigarh',
      rating: 4.7,
      totalOrders: 55,
      lastOrder: '2023-10-14 - Red Wine (₹800)',
      feedbacks: ['Excellent wine collection.'],
      complaints: [],
    },
  ];


  const filteredRestros = restaurants.filter((restro) => {
    return (
      restro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restro.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });


  const filteredVendors = vendors.filter((vendor) => {
    return (
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });


  const handleRestroClick = (restro) => {
    setSelectedRestro(restro);
    onRestroOpen();
  };


  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
    onVendorOpen();
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Restaurants & Vendors Management</Heading>

      {/* Search Bar */}
      <Input
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />

      {/* Tabs for Restaurants and Vendors */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Restaurants</Tab>
          <Tab>Vendors</Tab>
        </TabList>

        <TabPanels>
          {/* Restaurants Tab */}
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Cuisine</Th>
                  <Th>Location</Th>
                  <Th>Rating</Th>
                  <Th>Total Orders</Th>
                  <Th>Last Order</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredRestros.map((restro, index) => (
                  <Tr
                    key={restro.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? 'gray.500' : 'white', 
                      _hover: { backgroundColor: 'gray.100' },
                    }}
                  >
                    <Td>{restro.name}</Td>
                    <Td>{restro.cuisine}</Td>
                    <Td>{restro.location}</Td>
                    <Td>{restro.rating}</Td>
                    <Td>{restro.totalOrders}</Td>
                    <Td>{restro.lastOrder}</Td>
                    <Td>
                      <Button size="sm" onClick={() => handleRestroClick(restro)}>
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>

          {/* Vendors Tab */}
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Category</Th>
                  <Th>Location</Th>
                  <Th>Rating</Th>
                  <Th>Total Orders</Th>
                  <Th>Last Order</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredVendors.map((vendor, index) => (
                  <Tr
                    key={vendor.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? 'gray.500' : 'white', 
                      _hover: { backgroundColor: 'gray.100' }, 
                    }}
                  >
                    <Td>{vendor.name}</Td>
                    <Td>{vendor.category}</Td>
                    <Td>{vendor.location}</Td>
                    <Td>{vendor.rating}</Td>
                    <Td>{vendor.totalOrders}</Td>
                    <Td>{vendor.lastOrder}</Td>
                    <Td>
                      <Button size="sm" onClick={() => handleVendorClick(vendor)}>
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Restaurant Details Modal */}
      <Modal isOpen={isRestroOpen} onClose={onRestroClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Restaurant Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRestro && (
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Name:</strong> {selectedRestro.name}
                </Text>
                <Text>
                  <strong>Cuisine:</strong> {selectedRestro.cuisine}
                </Text>
                <Text>
                  <strong>Location:</strong> {selectedRestro.location}
                </Text>
                <Text>
                  <strong>Rating:</strong> {selectedRestro.rating}
                </Text>
                <Text>
                  <strong>Total Orders:</strong> {selectedRestro.totalOrders}
                </Text>
                <Text>
                  <strong>Last Order:</strong> {selectedRestro.lastOrder}
                </Text>
                <Text>
                  <strong>Feedbacks:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedRestro.feedbacks.length > 0 ? (
                    selectedRestro.feedbacks.map((feedback, index) => (
                      <Text key={index}>- {feedback}</Text>
                    ))
                  ) : (
                    <Text>No feedbacks yet.</Text>
                  )}
                </VStack>
                <Text>
                  <strong>Complaints:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedRestro.complaints.length > 0 ? (
                    selectedRestro.complaints.map((complaint, index) => (
                      <Text key={index}>- {complaint}</Text>
                    ))
                  ) : (
                    <Text>No complaints yet.</Text>
                  )}
                </VStack>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onRestroClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Vendor Details Modal */}
      <Modal isOpen={isVendorOpen} onClose={onVendorClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vendor Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedVendor && (
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Name:</strong> {selectedVendor.name}
                </Text>
                <Text>
                  <strong>Category:</strong> {selectedVendor.category}
                </Text>
                <Text>
                  <strong>Location:</strong> {selectedVendor.location}
                </Text>
                <Text>
                  <strong>Rating:</strong> {selectedVendor.rating}
                </Text>
                <Text>
                  <strong>Total Orders:</strong> {selectedVendor.totalOrders}
                </Text>
                <Text>
                  <strong>Last Order:</strong> {selectedVendor.lastOrder}
                </Text>
                <Text>
                  <strong>Feedbacks:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedVendor.feedbacks.length > 0 ? (
                    selectedVendor.feedbacks.map((feedback, index) => (
                      <Text key={index}>- {feedback}</Text>
                    ))
                  ) : (
                    <Text>No feedbacks yet.</Text>
                  )}
                </VStack>
                <Text>
                  <strong>Complaints:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedVendor.complaints.length > 0 ? (
                    selectedVendor.complaints.map((complaint, index) => (
                      <Text key={index}>- {complaint}</Text>
                    ))
                  ) : (
                    <Text>No complaints yet.</Text>
                  )}
                </VStack>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onVendorClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RestroVendor;