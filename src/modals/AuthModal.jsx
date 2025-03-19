import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

const AuthModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

 
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem("rider"));
    
    if (existingUser && existingUser.email === signupData.email) {
      toast({
        title: "User already exists.",
        description: "Please log in instead.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    localStorage.setItem("rider", JSON.stringify(signupData));

    toast({
      title: "Signup Successful!",
      description: "You can now log in.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    });

    setSignupData({ name: "", email: "", password: "" });
  };

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("rider"));

    if (!storedUser || storedUser.email !== loginData.email || storedUser.password !== loginData.password) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      return;
    }

    toast({
      title: "Login Successful!",
      description: `Welcome back, ${storedUser.name}!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    localStorage.setItem("isAuthenticated", "true");

    setLoginData({ email: "", password: "" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent borderRadius="xl" p={4} bg="secondary" color="white">
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
          Welcome to FoodieBay
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Tabs isFitted variant="soft-rounded" colorScheme="blue">
            <TabList mb={4} bg="white.200" p={1} borderRadius="full">
              <Tab
                _selected={{ bg: "green.400", color: "white" }}
                borderRadius="full"
                fontWeight="bold"
              >
                Login
              </Tab>
              <Tab
                _selected={{ bg: "green.400", color: "white" }}
                borderRadius="full"
                fontWeight="bold"
              >
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              {/* Login Form */}
              <TabPanel>
                <VStack as="form" onSubmit={handleLoginSubmit} spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      bg="gray.700"
                      border="none"
                      color="white"
                      _focus={{ bg: "gray.600" }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      bg="gray.700"
                      border="none"
                      color="white"
                      _focus={{ bg: "gray.600" }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="green"
                    w="full"
                    borderRadius="full"
                    size="lg"
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>

              {/* Signup Form */}
              <TabPanel>
                <VStack as="form" onSubmit={handleSignupSubmit} spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      bg="gray.700"
                      border="none"
                      color="white"
                      _focus={{ bg: "gray.600" }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      bg="gray.700"
                      border="none"
                      color="white"
                      _focus={{ bg: "gray.600" }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      bg="gray.700"
                      border="none"
                      color="white"
                      _focus={{ bg: "gray.600" }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="green"
                    w="full"
                    borderRadius="full"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;


