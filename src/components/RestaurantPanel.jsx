import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
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
  Input,
  VStack,
  HStack,
  Image,
  Badge,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const StorePanel = () => {
  const [storeItems, setStoreItems] = useState({
    Restaurant: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        image: "https://logo.clearbit.com/pizza.com",
        offer: "10% off",
      },
      {
        id: 2,
        name: "Spaghetti Carbonara",
        price: 14.99,
        image: "https://logo.clearbit.com/pasta.com",
        offer: "",
      },
      {
        id: 3,
        name: "Grilled Chicken Salad",
        price: 9.99,
        image: "https://logo.clearbit.com/salad.com",
        offer: "",
      },
      {
        id: 4,
        name: "Cheeseburger",
        price: 8.99,
        image: "https://logo.clearbit.com/burger.com",
        offer: "Buy 1 Get 1 Free",
      },
      {
        id: 5,
        name: "Chocolate Lava Cake",
        price: 6.99,
        image: "https://logo.clearbit.com/dessert.com",
        offer: "",
      },
    ],
    GroceryStore: [
      {
        id: 1,
        name: "Organic Milk",
        price: 4.99,
        image: "https://logo.clearbit.com/milk.com",
        offer: "",
      },
      {
        id: 2,
        name: "Whole Grain Bread",
        price: 3.99,
        image: "https://logo.clearbit.com/bread.com",
        offer: "",
      },
      {
        id: 3,
        name: "Organic Eggs",
        price: 5.99,
        image: "https://logo.clearbit.com/eggs.com",
        offer: "",
      },
      {
        id: 4,
        name: "Almond Butter",
        price: 7.99,
        image: "https://logo.clearbit.com/almond.com",
        offer: "20% off",
      },
      {
        id: 5,
        name: "Quinoa",
        price: 6.99,
        image: "https://logo.clearbit.com/quinoa.com",
        offer: "",
      },
    ],
    VeggiesStore: [
      {
        id: 1,
        name: "Organic Tomatoes",
        price: 2.99,
        image: "https://logo.clearbit.com/tomatoes.com",
        offer: "",
      },
      {
        id: 2,
        name: "Bell Peppers",
        price: 3.99,
        image: "https://logo.clearbit.com/peppers.com",
        offer: "",
      },
      {
        id: 3,
        name: "Carrots",
        price: 1.99,
        image: "https://logo.clearbit.com/carrots.com",
        offer: "",
      },
      {
        id: 4,
        name: "Broccoli",
        price: 2.49,
        image: "https://logo.clearbit.com/broccoli.com",
        offer: "",
      },
      {
        id: 5,
        name: "Spinach",
        price: 2.99,
        image: "https://logo.clearbit.com/spinach.com",
        offer: "",
      },
    ],
    FruitsStore: [
      {
        id: 1,
        name: "Organic Apples",
        price: 3.99,
        image: "https://logo.clearbit.com/apples.com",
        offer: "",
      },
      {
        id: 2,
        name: "Bananas",
        price: 1.99,
        image: "https://logo.clearbit.com/bananas.com",
        offer: "",
      },
      {
        id: 3,
        name: "Strawberries",
        price: 4.99,
        image: "https://logo.clearbit.com/strawberries.com",
        offer: "",
      },
      {
        id: 4,
        name: "Oranges",
        price: 2.99,
        image: "https://logo.clearbit.com/oranges.com",
        offer: "",
      },
      {
        id: 5,
        name: "Grapes",
        price: 5.99,
        image: "https://logo.clearbit.com/grapes.com",
        offer: "",
      },
    ],
    MeatStore: [
      {
        id: 1,
        name: "Organic Chicken",
        price: 9.99,
        image: "https://logo.clearbit.com/chicken.com",
        offer: "",
      },
      {
        id: 2,
        name: "Grass-Fed Beef",
        price: 14.99,
        image: "https://logo.clearbit.com/beef.com",
        offer: "",
      },
      {
        id: 3,
        name: "Pork Chops",
        price: 8.99,
        image: "https://logo.clearbit.com/pork.com",
        offer: "",
      },
      {
        id: 4,
        name: "Lamb Chops",
        price: 16.99,
        image: "https://logo.clearbit.com/lamb.com",
        offer: "",
      },
      {
        id: 5,
        name: "Turkey Breast",
        price: 12.99,
        image: "https://logo.clearbit.com/turkey.com",
        offer: "",
      },
    ],
    LiquorStore: [
      {
        id: 1,
        name: "Vodka",
        price: 19.99,
        image: "https://logo.clearbit.com/vodka.com",
        offer: "",
      },
      {
        id: 2,
        name: "Whiskey",
        price: 29.99,
        image: "https://logo.clearbit.com/whiskey.com",
        offer: "",
      },
      {
        id: 3,
        name: "Rum",
        price: 24.99,
        image: "https://logo.clearbit.com/rum.com",
        offer: "",
      },
      {
        id: 4,
        name: "Tequila",
        price: 34.99,
        image: "https://logo.clearbit.com/tequila.com",
        offer: "",
      },
      {
        id: 5,
        name: "Gin",
        price: 22.99,
        image: "https://logo.clearbit.com/gin.com",
        offer: "",
      },
    ],
  });

  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Restaurant");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddOrUpdateItem = (item) => {
    if (editingItem) {
      // Update existing item
      setStoreItems((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].map((i) =>
          i.id === editingItem.id ? { ...i, ...item } : i
        ),
      }));
    } else {
      // Add new item
      setStoreItems((prev) => ({
        ...prev,
        [activeTab]: [
          ...prev[activeTab],
          { ...item, id: prev[activeTab].length + 1, image: "https://logo.clearbit.com/food.com" },
        ],
      }));
    }
    setEditingItem(null);
    onClose();
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    onOpen();
  };

  const handleDeleteItem = (id) => {
    setStoreItems((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((item) => item.id !== id),
    }));
  };

  return (
    <Box p={6}>
      <Heading mb={6}>Store Panel</Heading>

      {/* Tabs for Store Types */}
      <Tabs variant="enclosed" onChange={(index) => setActiveTab(Object.keys(storeItems)[index])}>
        <TabList>
          <Tab>Restaurant</Tab>
          <Tab>Grocery Store</Tab>
          <Tab>Veggies Store</Tab>
          <Tab>Fruits Store</Tab>
          <Tab>Meat Store</Tab>
          <Tab>Liquor Store</Tab>
        </TabList>

        <TabPanels>
          {Object.keys(storeItems).map((storeType) => (
            <TabPanel key={storeType}>
              {/* Add Item Button */}
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                mb={6}
                onClick={onOpen}
              >
                Add Item
              </Button>

              {/* Items List */}
              <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {storeItems[storeType].map((item) => (
                  <Box
                    key={item.id}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p={4}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      boxSize="150px"
                      objectFit="cover"
                      mx="auto"
                    />
                    <VStack align="start" mt={4}>
                      <Text fontSize="xl" fontWeight="bold">
                        {item.name}
                      </Text>
                      <Text fontSize="lg" color="gray.600">
                        ${item.price}
                      </Text>
                      {item.offer && (
                        <Badge colorScheme="green" fontSize="sm">
                          {item.offer}
                        </Badge>
                      )}
                      <HStack spacing={2} mt={2}>
                        <Button
                          leftIcon={<EditIcon />}
                          size="sm"
                          onClick={() => handleEditItem(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* Add/Edit Item Modal */}
      <MenuModal
        isOpen={isOpen}
        onClose={() => {
          setEditingItem(null);
          onClose();
        }}
        onSubmit={handleAddOrUpdateItem}
        item={editingItem}
      />
    </Box>
  );
};

// Menu Modal Component
const MenuModal = ({ isOpen, onClose, onSubmit, item }) => {
  const [formData, setFormData] = useState(
    item || { name: "", price: "", offer: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item ? "Edit Item" : "Add Item"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Item Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter item name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Offer</FormLabel>
              <Input
                name="offer"
                value={formData.offer}
                onChange={handleChange}
                placeholder="Enter offer (e.g., 10% off)"
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            {item ? "Update" : "Add"}
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StorePanel;