import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Divider,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import avatar from "../../assets/avatar/avatar.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";

const Sidebar = () => {
  const deliveryAgent = {
    name: "John Doe",
    profileImage: avatar,
    earnings: "$1200",
    completedOrders: 45,
    rating: 4.5,
  };

  const buttonStyles = {
    w: "100%",
    justifyContent: "flex-start",
    variant: "ghost",
    color: "bg",
    fontSize: "lg",
    fontWeight: "normal",
    pl: 4,
    _hover: { bg: "text" },
  };

  const { restaurant } = useContext(RestaurantContext);

  return (
    <Box w="250px" bg="secondary" h="100%" p={4}>
      <Flex direction="column" align="center">
        <Image
          borderRadius="full"
          boxSize="100px"
          src={deliveryAgent.profileImage}
          alt={deliveryAgent.name}
          mb={4}
        />

        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {restaurant.name}
        </Text>

        <Divider mb={4} />

        <VStack w="100%" spacing={1} align="start">
          <Link to="/">
            <Button {...buttonStyles}>Dashboard</Button>
          </Link>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Orders
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/orders">
                    <Button {...buttonStyles} pl={8}>
                      Current Orders
                    </Button>
                  </Link>
                  <Link to={"/past-orders"}>
                    <Button {...buttonStyles} pl={8}>
                      Past Orders
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Partners
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/users">
                    <Button {...buttonStyles} pl={8}>
                      Users
                    </Button>
                  </Link>
                  <Link to={"/restro-vendor"}>
                    <Button {...buttonStyles} pl={8}>
                      Restro & vendors
                    </Button>
                  </Link>
                  <Link to="/delivery-agents">
                    <Button {...buttonStyles} pl={8}>
                      Delivery Agents
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Reports
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/week-report">
                    <Button {...buttonStyles} pl={8}>
                      Weekly Reports
                    </Button>
                  </Link>
                  <Link to={"/monthly-report"}>
                    <Button {...buttonStyles} pl={8}>
                      Monthly Reports 
                    </Button>
                  </Link>
                  <Link to="/vendor-report">
                    <Button {...buttonStyles} pl={8}>
                    Vender/Restaurant 
                    </Button>
                  </Link>
                  <Link to="/customer-report">
                    <Button {...buttonStyles} pl={8}>
                    Customer Reports
                    </Button>
                  </Link>
                  <Link to="/delivery-agent-report">
                    <Button {...buttonStyles} pl={8}>
                    Delivery Agents 
                    </Button>
                  </Link>
                  <Link to="/area-report">
                    <Button {...buttonStyles} pl={8}>
                      Area Wise Reports
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Discounts & Coupons
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/admin-discount">
                    <Button {...buttonStyles} pl={8}>
                      Admin Discounts
                    </Button>
                  </Link>
                  <Link to={"/restro-discount"}>
                    <Button {...buttonStyles} pl={8}>
                      Restro Discounts
                    </Button>
                  </Link>
                  <Link to="/coupon-code">
                    <Button {...buttonStyles} pl={8}>
                     Coupon Codes
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

         

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Earnings
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/commission">
                    <Button {...buttonStyles} pl={8}>
                      Commission
                    </Button>
                  </Link>
                  <Link to={"/cod"}>
                    <Button {...buttonStyles} pl={8}>
                      COD
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Feedbacks
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/customer-rating">
                    <Button {...buttonStyles} pl={8}>
                      Customer Feedbacks
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent" }}
                {...buttonStyles}
              >
                <Box flex="1" textAlign="left">
                  Notifications
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2} pl={4}>
                <VStack align="start" spacing={1}>
                  <Link to="/customer-notification">
                    <Button {...buttonStyles} pl={8}>
                      Customers
                    </Button>
                  </Link>
                  <Link to={"/vendor-notification"}>
                    <Button {...buttonStyles} pl={8}>
                      Restros
                    </Button>
                  </Link>
                  <Link to="/delivery-agent-notification">
                    <Button {...buttonStyles} pl={8}>
                      Delivery Agents
                    </Button>
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Link to="/profile">
            <Button {...buttonStyles}>Profile</Button>
          </Link>

          <Button {...buttonStyles} colorScheme="red" mt={4}>
            Logout
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
