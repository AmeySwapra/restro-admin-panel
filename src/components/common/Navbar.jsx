import { useContext, useState } from "react";
import { Flex, Box, Button, Spacer, Image } from "@chakra-ui/react";
import logo from "../../assets/logo/logo.png";
import AuthModal from "../../modals/AuthModal";
import { RestaurantContext } from "../../context/RestaurantContext";


const Navbar = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const { restaurant } = useContext(RestaurantContext);
  return (
    <>
      <Flex bg="secondary" p={4} color="white" w="100%" align="center">
        <Image src={logo} alt="FoodieBay Logo" boxSize="100px" mr={4} />
        <Box fontSize="5xl" fontWeight="bold">
          {restaurant.name}
        </Box>
        <Spacer />
        <Button
          color="text"
          bg="bg"
          size="lg"
          mr="20px"
          _hover={{ bg: "black", color: "bg" }}
          onClick={() => setAuthModalOpen(true)} 
        >
          Login
        </Button>
      </Flex>

    
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;



