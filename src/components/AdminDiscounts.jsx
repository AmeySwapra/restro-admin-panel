import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Badge,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const AdminDiscountComponent = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedDiscount, setSelectedDiscount] = useState(null); 
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [isEditing, setIsEditing] = useState(false); 
  const [discountType, setDiscountType] = useState('percentage');
  const [discountValue, setDiscountValue] = useState(0); 
  const [minOrderAmount, setMinOrderAmount] = useState(0); 
  const [maxDiscountAmount, setMaxDiscountAmount] = useState(0); 
  const [activeTab, setActiveTab] = useState(0);
  const [restaurantDiscounts, setRestaurantDiscounts] = useState([
    {
      id: 1,
      code: 'RESTRO10',
      type: 'percentage',
      value: 10,
      minOrder: 200,
      maxDiscount: 50,
      description: 'Get 10% off on orders above ₹200 (max discount ₹50).',
    },
    {
      id: 2,
      code: 'RESTRO50',
      type: 'amount',
      value: 50,
      minOrder: 500,
      maxDiscount: 50,
      description: 'Get ₹50 off on orders above ₹500.',
    },
  ]); 
  const [vendorDiscounts, setVendorDiscounts] = useState([
    {
      id: 1,
      code: 'INSTA20',
      type: 'percentage',
      value: 20,
      minOrder: 300,
      maxDiscount: 100,
      description: 'Get 20% off on orders above ₹300 (max discount ₹100).',
    },
    {
      id: 2,
      code: 'INSTA100',
      type: 'amount',
      value: 100,
      minOrder: 1000,
      maxDiscount: 100,
      description: 'Get ₹100 off on orders above ₹1000.',
    },
  ]); 

  
  const handleSaveDiscount = () => {
    const newDiscount = {
      id: selectedDiscount ? selectedDiscount.id : Date.now(),
      code: `CODE${Date.now()}`,
      type: discountType,
      value: discountValue,
      minOrder: minOrderAmount,
      maxDiscount: maxDiscountAmount,
      description: `Get ${discountType === 'percentage' ? `${discountValue}%` : `₹${discountValue}`} off on orders above ₹${minOrderAmount}${discountType === 'percentage' ? ` (max discount ₹${maxDiscountAmount}).` : '.'}`,
    };

    if (isEditing) {
      
      if (selectedDiscount.code.startsWith('RESTRO')) {
        setRestaurantDiscounts((prev) =>
          prev.map((discount) =>
            discount.id === selectedDiscount.id ? newDiscount : discount
          )
        );
      } else {
        setVendorDiscounts((prev) =>
          prev.map((discount) =>
            discount.id === selectedDiscount.id ? newDiscount : discount
          )
        );
      }
    } else {
   
      if (activeTab === 0) {
        
        setRestaurantDiscounts((prev) => [...prev, newDiscount]);
      } else {
     
        setVendorDiscounts((prev) => [...prev, newDiscount]);
      }
    }

    onClose(); 
  };


  const handleDeleteDiscount = (discount) => {
    if (discount.code.startsWith('RESTRO')) {
      setRestaurantDiscounts((prev) =>
        prev.filter((d) => d.id !== discount.id)
      );
    } else {
      setVendorDiscounts((prev) => prev.filter((d) => d.id !== discount.id));
    }
  };

  
  const handleEditDiscount = (discount) => {
    setSelectedDiscount(discount);
    setDiscountType(discount.type);
    setDiscountValue(discount.value);
    setMinOrderAmount(discount.minOrder);
    setMaxDiscountAmount(discount.maxDiscount);
    setIsEditing(true);
    onOpen();
  };

  
  const handleAddDiscount = () => {
    setSelectedDiscount(null);
    setDiscountType('percentage');
    setDiscountValue(0);
    setMinOrderAmount(0);
    setMaxDiscountAmount(0);
    setIsEditing(false);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Admin Discount Management</Heading>

      {/* Search Bar */}
      <Input
        placeholder="Search by discount code"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />

      {/* Tabs for Restaurants and Vendors */}
      <Tabs variant="enclosed" onChange={(index) => setActiveTab(index)}>
        <TabList>
          <Tab>Restaurant Discounts</Tab>
          <Tab>Vendor Discounts</Tab>
        </TabList>

        <TabPanels>
          {/* Restaurant Discounts Tab */}
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {restaurantDiscounts
                .filter((discount) =>
                  discount.code.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((discount) => (
                  <Card key={discount.id} variant="outline">
                    <CardHeader>
                      <HStack justify="space-between">
                        <Text fontSize="lg" fontWeight="bold">
                          {discount.code}
                        </Text>
                        <Badge colorScheme="green">{discount.type}</Badge>
                      </HStack>
                    </CardHeader>
                    <CardBody>
                      <VStack align="start" spacing={2}>
                        <Text>{discount.description}</Text>
                        <Text>
                          <strong>Min Order:</strong> ₹{discount.minOrder}
                        </Text>
                        {discount.type === 'percentage' && (
                          <Text>
                            <strong>Max Discount:</strong> ₹{discount.maxDiscount}
                          </Text>
                        )}
                      </VStack>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          onClick={() => handleEditDiscount(discount)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          onClick={() => handleDeleteDiscount(discount)}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </CardFooter>
                  </Card>
                ))}
            </SimpleGrid>
          </TabPanel>

          {/* Vendor Discounts Tab */}
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {vendorDiscounts
                .filter((discount) =>
                  discount.code.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((discount) => (
                  <Card key={discount.id} variant="outline">
                    <CardHeader>
                      <HStack justify="space-between">
                        <Text fontSize="lg" fontWeight="bold">
                          {discount.code}
                        </Text>
                        <Badge colorScheme="blue">{discount.type}</Badge>
                      </HStack>
                    </CardHeader>
                    <CardBody>
                      <VStack align="start" spacing={2}>
                        <Text>{discount.description}</Text>
                        <Text>
                          <strong>Min Order:</strong> ₹{discount.minOrder}
                        </Text>
                        {discount.type === 'percentage' && (
                          <Text>
                            <strong>Max Discount:</strong> ₹{discount.maxDiscount}
                          </Text>
                        )}
                      </VStack>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          onClick={() => handleEditDiscount(discount)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          onClick={() => handleDeleteDiscount(discount)}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </CardFooter>
                  </Card>
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Add New Discount Button */}
      <Button mt={4} colorScheme="teal" onClick={handleAddDiscount}>
        Add New Discount
      </Button>

      {/* Add/Edit Discount Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEditing ? 'Edit Discount' : 'Add New Discount'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Discount Type</FormLabel>
                <Select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                >
                  <option value="percentage">Percentage</option>
                  <option value="amount">Amount</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Discount Value</FormLabel>
                <NumberInput
                  value={discountValue}
                  onChange={(value) => setDiscountValue(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Minimum Order Amount</FormLabel>
                <NumberInput
                  value={minOrderAmount}
                  onChange={(value) => setMinOrderAmount(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              {discountType === 'percentage' && (
                <FormControl>
                  <FormLabel>Maximum Discount Amount</FormLabel>
                  <NumberInput
                    value={maxDiscountAmount}
                    onChange={(value) => setMaxDiscountAmount(value)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSaveDiscount}>
              Save
            </Button>
            <Button ml={2} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminDiscountComponent;