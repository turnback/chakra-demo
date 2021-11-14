import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Image,
  useColorModeValue
} from "@chakra-ui/core";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import chakraUILight from "../assets/images/chakra-ui-light.png";
import chakraUIDark from '../assets/images/chakra-ui-dark.png';

export default function Form() {
  const index = 0
  const bgColor = useColorModeValue('white');
  const chakraUI = useColorModeValue(chakraUILight, chakraUIDark)
  const [tabIndex, setTabIndex] = React.useState(0)
  return (
    <Box bgColor={bgColor} p={50} pb={30} w="400px" boxShadow="lg" borderRadius="4px">
      <Tabs
      isFitted
      colorScheme="#ea6f5a"
      defaultIndex={0}
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}>
        <TabList mb={50}>
          <Tab _focus={{ boxShadow: "none", color: "#ea6f5a" }} h="40px">登录</Tab>
          <Box p={2} h="40px">·</Box>
          <Tab _focus={{ boxShadow: "none", color: "#ea6f5a" }} h="40px">注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <SignUp />
          </TabPanel>
          <TabPanel p={0}>
            <SignIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
