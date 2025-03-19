import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Progress,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AdminOrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      restaurant: "The Gourmet Haven",
      items: [
        { name: "Margherita Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 2 },
      ],
      status: "Pending",
      preparationProgress: 0,
      deliveryStatus: "Not Started",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      restaurant: "Savory Bites",
      items: [
        { name: "Spaghetti Carbonara", quantity: 1 },
        { name: "Caesar Salad", quantity: 1 },
      ],
      status: "Accepted",
      preparationProgress: 50,
      deliveryStatus: "Not Started",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      restaurant: "Spice Symphony",
      items: [
        { name: "Cheeseburger", quantity: 2 },
        { name: "Fries", quantity: 1 },
      ],
      status: "Preparing",
      preparationProgress: 75,
      deliveryStatus: "Not Started",
    },
    {
      id: 4,
      customerName: "Bob Brown",
      restaurant: "Urban Eats",
      items: [
        { name: "Grilled Chicken Salad", quantity: 1 },
        { name: "Iced Tea", quantity: 2 },
      ],
      status: "Ready",
      preparationProgress: 100,
      deliveryStatus: "Out for Delivery",
    },
    {
      id: 5,
      customerName: "Charlie Davis",
      restaurant: "Tasty Delights",
      items: [
        { name: "Chocolate Lava Cake", quantity: 1 },
        { name: "Vanilla Ice Cream", quantity: 1 },
      ],
      status: "Delivered",
      preparationProgress: 100,
      deliveryStatus: "Delivered",
    },
  ]);
  

  const [selectedOrder, setSelectedOrder] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.status === "Delivered") return order; 

          let newStatus = order.status;
          let newPreparationProgress = order.preparationProgress;
          let newDeliveryStatus = order.deliveryStatus;

        
          switch (order.status) {
            case "Pending":
              newStatus = "Accepted";
              break;
            case "Accepted":
              newStatus = "Preparing";
              newPreparationProgress = 50;
              break;
            case "Preparing":
              newStatus = "Ready";
              newPreparationProgress = 100;
              break;
            case "Ready":
              newStatus = "Out for Delivery";
              newDeliveryStatus = "Out for Delivery";
              break;
            case "Out for Delivery":
              newStatus = "Delivered";
              newDeliveryStatus = "Delivered";
              break;
            default:
              break;
          }

          return {
            ...order,
            status: newStatus,
            preparationProgress: newPreparationProgress,
            deliveryStatus: newDeliveryStatus,
          };
        })
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "yellow";
      case "Accepted":
        return "blue";
      case "Preparing":
        return "orange";
      case "Ready":
        return "green";
      case "Out for Delivery":
        return "purple";
      case "Delivered":
        return "teal";
      default:
        return "gray";
    }
  };

  return (
    <Box p={6}>
      <Heading mb={6}>Admin Order Management</Heading>

      {/* Orders Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer</Th>
            <Th>Restaurant</Th>
            <Th>Items</Th>
            <Th>Status</Th>
            <Th>Delivery Status</Th>
            <Th>Preparation Progress</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.restaurant}</Td>
              <Td>
                <VStack align="start">
                  {order.items.map((item, index) => (
                    <Text key={index}>
                      {item.quantity}x {item.name}
                    </Text>
                  ))}
                </VStack>
              </Td>
              <Td>
                <Badge colorScheme={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </Td>
              <Td>
                <Badge colorScheme={getStatusColor(order.deliveryStatus)}>
                  {order.deliveryStatus}
                </Badge>
              </Td>
              <Td>
                <Progress
                  value={order.preparationProgress}
                  size="sm"
                  colorScheme="teal"
                />
              </Td>
              <Td>
                <Button size="sm" onClick={() => handleViewOrder(order)}>
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Order Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOrder && (
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Order ID:</strong> {selectedOrder.id}
                </Text>
                <Text>
                  <strong>Customer:</strong> {selectedOrder.customerName}
                </Text>
                <Text>
                  <strong>Restaurant:</strong> {selectedOrder.restaurant}
                </Text>
                <Text>
                  <strong>Status:</strong>{" "}
                  <Badge colorScheme={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </Text>
                <Text>
                  <strong>Delivery Status:</strong>{" "}
                  <Badge colorScheme={getStatusColor(selectedOrder.deliveryStatus)}>
                    {selectedOrder.deliveryStatus}
                  </Badge>
                </Text>
                <Text>
                  <strong>Items:</strong>
                </Text>
                <VStack align="start" spacing={2}>
                  {selectedOrder.items.map((item, index) => (
                    <Text key={index}>
                      {item.quantity}x {item.name}
                    </Text>
                  ))}
                </VStack>
                <Text>
                  <strong>Preparation Progress:</strong>
                </Text>
                <Progress
                  value={selectedOrder.preparationProgress}
                  size="sm"
                  colorScheme="teal"
                />
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

export default AdminOrderManagement;