import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  RadioGroup,
  Radio,
  Select,
  Switch,
  FormLabel,
  Flex,
  Button,
  FormControl,
  Box,
  Spacer,
  Image,
  Checkbox,
  InputLeftElement
} from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaCheck, FaMobile, FaMobileAlt } from "react-icons/fa";

import weixin from "../assets/images/weixin.png";
import weibo from "../assets/images/weibo.png";
import qq from "../assets/images/QQ.png";

import axios from "axios"

export default function SignUp() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onConfirm = () => {
    axios.post({
      url: "https://conduit.productionready.io/users/login",
      method: 'post',
      data: {
        email,
        password
      }
    }).then(_ => {
      console.log('登录成功')
    })
  }

  return (
    <form>
      <Stack spacing="2">
        <FormControl isInvalid>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              style={{top:'50%', transform: "translateY(-50%)"}}
              children={<FaMobileAlt color="#969696" />}
            />
              <Input placeholder="手机号或邮箱" pl={38} onChange={e=>setEmail(e.target.value)} />
          </InputGroup>
        </FormControl>
        <InputGroup>
        <InputLeftElement
            pointerEvents="none"
            style={{top:'50%', transform: "translateY(-50%)"}}
            children={<FaLock color="#969696" />}
          />
          <Input type="password" placeholder="密码" pl={38} onChange={e=>setPassword(e.target.value)} />
        </InputGroup>
        <Flex justify="space-between" wrap="nowrap" w="100%">
          <Flex align="center">
            <Checkbox id="deal" colorScheme="#0075ff" defaultIsChecked />
            <FormLabel htmlFor="deal" fontSize="14px">记住我</FormLabel>
          </Flex>
          <Box p="4" fontSize="14px">登陆遇到困难?</Box>
        </Flex>
      </Stack>
      <Button
        _hover={{ bgColor: "#319795" }}
        w="100%"
        borderRadius="25px"
        bg="#3194d0"
        height="43px"
        color="white"
        w="100%"
        mt={15}
        onClick={onConfirm}
        colorScheme="teal">
          登录
        </Button>
        <Flex justify="center" mt={50}>社交账号登录</Flex>
        <Flex justify="space-between" align="center" h={50} pl={100} pr={100}>
          <Image src={weibo} />
          <Image src={weixin} />
          <Image src={qq} />
        </Flex>
    </form>
  );
}
