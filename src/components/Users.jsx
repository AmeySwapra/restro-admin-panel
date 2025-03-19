import { useState } from "react";
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
} from "@chakra-ui/react";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const { isOpen, onOpen, onClose } = useDisclosure(); 

 
  const users = [
    {
      id: 1,
      name: "John Doe",
      phone: "+91 9876543210",
      joinDate: "2023-01-15",
      lastOrder: "2023-10-05 - Butter Chicken (₹450)",
      totalOrders: 12,
      feedbacks: ["Great service!", "Food was delicious."],
      complaints: ["Late delivery once."],
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+91 9876543211",
      joinDate: "2023-02-10",
      lastOrder: "2023-10-06 - Paneer Tikka (₹300)",
      totalOrders: 8,
      feedbacks: ["Good experience."],
      complaints: [],
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "+91 9876543212",
      joinDate: "2023-03-22",
      lastOrder: "2023-10-07 - Chicken Biryani (₹250)",
      totalOrders: 15,
      feedbacks: ["Loved the food!"],
      complaints: ["Wrong order once."],
    },
    {
      id: 4,
      name: "Bob Brown",
      phone: "+91 9876543213",
      joinDate: "2023-04-18",
      lastOrder: "2023-10-08 - Dal Makhani (₹200)",
      totalOrders: 20,
      feedbacks: ["Excellent service!"],
      complaints: [],
    },
    {
      id: 5,
      name: "Charlie Davis",
      phone: "+91 9876543214",
      joinDate: "2023-05-05",
      lastOrder: "2023-10-09 - Naan (₹100)",
      totalOrders: 5,
      feedbacks: [],
      complaints: ["Food was cold."],
    },
    {
      id: 6,
      name: "Diana Evans",
      phone: "+91 9876543215",
      joinDate: "2023-06-12",
      lastOrder: "2023-10-10 - Tandoori Roti (₹50)",
      totalOrders: 10,
      feedbacks: ["Fast delivery."],
      complaints: [],
    },
    {
      id: 7,
      name: "Eva Green",
      phone: "+91 9876543216",
      joinDate: "2023-07-19",
      lastOrder: "2023-10-11 - Veg Biryani (₹180)",
      totalOrders: 18,
      feedbacks: ["Great taste!"],
      complaints: [],
    },
    {
      id: 8,
      name: "Frank Harris",
      phone: "+91 9876543217",
      joinDate: "2023-08-25",
      lastOrder: "2023-10-12 - Chicken Curry (₹220)",
      totalOrders: 22,
      feedbacks: ["Awesome experience."],
      complaints: [],
    },
    {
      id: 9,
      name: "Grace Lee",
      phone: "+91 9876543218",
      joinDate: "2023-09-30",
      lastOrder: "2023-10-13 - Fish Curry (₹280)",
      totalOrders: 7,
      feedbacks: [],
      complaints: ["Late delivery."],
    },
    {
      id: 10,
      name: "Henry Wilson",
      phone: "+91 9876543219",
      joinDate: "2023-10-01",
      lastOrder: "2023-10-14 - Butter Naan (₹120)",
      totalOrders: 3,
      feedbacks: ["Good food."],
      complaints: [],
    },
   
    {
      id: 11,
      name: "Ivy Taylor",
      phone: "+91 9876543220",
      joinDate: "2023-01-20",
      lastOrder: "2023-10-15 - Paneer Butter Masala (₹350)",
      totalOrders: 14,
      feedbacks: ["Loved it!"],
      complaints: [],
    },
    {
      id: 12,
      name: "Jack White",
      phone: "+91 9876543221",
      joinDate: "2023-02-25",
      lastOrder: "2023-10-16 - Chicken Tikka (₹400)",
      totalOrders: 9,
      feedbacks: [],
      complaints: ["Order was delayed."],
    },
    {
      id: 13,
      name: "Karen Brown",
      phone: "+91 9876543222",
      joinDate: "2023-03-30",
      lastOrder: "2023-10-17 - Veg Fried Rice (₹150)",
      totalOrders: 11,
      feedbacks: ["Good service."],
      complaints: [],
    },
    {
      id: 14,
      name: "Leo Garcia",
      phone: "+91 9876543223",
      joinDate: "2023-04-05",
      lastOrder: "2023-10-18 - Chicken Noodles (₹200)",
      totalOrders: 6,
      feedbacks: [],
      complaints: ["Food was stale."],
    },
    {
      id: 15,
      name: "Mia Martinez",
      phone: "+91 9876543224",
      joinDate: "2023-05-10",
      lastOrder: "2023-10-19 - Veg Manchurian (₹180)",
      totalOrders: 13,
      feedbacks: ["Tasty food."],
      complaints: [],
    },
    {
      id: 16,
      name: "Noah Hernandez",
      phone: "+91 9876543225",
      joinDate: "2023-06-15",
      lastOrder: "2023-10-20 - Chicken Momos (₹120)",
      totalOrders: 4,
      feedbacks: [],
      complaints: ["Late delivery."],
    },
    {
      id: 17,
      name: "Olivia Lopez",
      phone: "+91 9876543226",
      joinDate: "2023-07-20",
      lastOrder: "2023-10-21 - Paneer Wrap (₹100)",
      totalOrders: 8,
      feedbacks: ["Good experience."],
      complaints: [],
    },
    {
      id: 18,
      name: "Peter Gonzalez",
      phone: "+91 9876543227",
      joinDate: "2023-08-25",
      lastOrder: "2023-10-22 - Chicken Wrap (₹150)",
      totalOrders: 10,
      feedbacks: [],
      complaints: ["Wrong order."],
    },
    {
      id: 19,
      name: "Quinn Perez",
      phone: "+91 9876543228",
      joinDate: "2023-09-30",
      lastOrder: "2023-10-23 - Veg Noodles (₹120)",
      totalOrders: 5,
      feedbacks: ["Nice food."],
      complaints: [],
    },
    {
      id: 20,
      name: "Rachel Torres",
      phone: "+91 9876543229",
      joinDate: "2023-10-05",
      lastOrder: "2023-10-24 - Chicken Biryani (₹250)",
      totalOrders: 7,
      feedbacks: [],
      complaints: ["Late delivery."],
    },
  ];

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery)
    );
  });


  const handleUserClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading mb={4}>All Users</Heading>

      {/* Search Bar */}
      <Input
        placeholder="Search by name or phone number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />

      {/* Users Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Join Date</Th>
            <Th>Last Order</Th>
            <Th>Total Orders</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUsers.map((user, index) => (
            <Tr
              key={user.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "gray.500" : "white",
                _hover: { backgroundColor: "gray.100" },
              }}
            >
              <Td>{user.name}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.joinDate}</Td>
              <Td>{user.lastOrder}</Td>
              <Td>{user.totalOrders}</Td>
              <Td>
                <Button size="sm" onClick={() => handleUserClick(user)}>
                  View Details
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* User Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedUser && (
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Name:</strong> {selectedUser.name}
                </Text>
                <Text>
                  <strong>Phone:</strong> {selectedUser.phone}
                </Text>
                <Text>
                  <strong>Join Date:</strong> {selectedUser.joinDate}
                </Text>
                <Text>
                  <strong>Last Order:</strong> {selectedUser.lastOrder}
                </Text>
                <Text>
                  <strong>Total Orders:</strong> {selectedUser.totalOrders}
                </Text>
                <Text>
                  <strong>Feedbacks:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedUser.feedbacks.length > 0 ? (
                    selectedUser.feedbacks.map((feedback, index) => (
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
                  {selectedUser.complaints.length > 0 ? (
                    selectedUser.complaints.map((complaint, index) => (
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
            <Button colorScheme="teal" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Users;
