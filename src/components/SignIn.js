import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  Button,
  Link,
  Flex,
  Text,
  Image,
  Box,
  FormControl,InputLeftElement
} from "@chakra-ui/core";
// import {
//   InputLeftElement
// } from "@chakra-ui/input";
import { LockIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaUserAlt, FaLock, FaCheck, FaMobileAlt } from "react-icons/fa";
import weixin from "../assets/images/weixin.png";
import qq from "../assets/images/QQ.png" 

import axios from 'axios'

export default function SignIn() {

  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const confirmClick = () => {
    axios.post({
      url: 'https://conduit.productionready.io/users',
      method: 'post',
      data: {
        username,
        email,
        password
      }
    }).then(_ => {
      console.log('注册成功')
    })
  }

  return (
    <form>
      <Stack spacing="2">
        <FormControl isInvalid>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              placeholder="你的昵称"
              style={{top:'50%', transform: "translateY(-50%)"}}
              children={<FaUserAlt color="#969696" />}
            />
            <Input placeholder="你的昵称" pl={38} onChange={e=>setUsername(e.target.value)}></Input>
          </InputGroup>
          {/* <FormHelperText>手机号或邮箱是填项</FormHelperText> */}
        </FormControl>
        <InputGroup>
        <InputLeftElement
            pointerEvents="none"
            style={{top:'50%', transform: "translateY(-50%)"}}
            children={<FaMobileAlt color="#969696" pl={38} />}
          />
        <Input type="tel" placeholder="手机号" pl={38} onChange={e=>setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup>
          {/* <InputLeftAddon children={<FaLock />} /> */}
          <InputLeftElement
            pointerEvents="none"
            style={{top:'50%', transform: "translateY(-50%)"}}
            children={<FaLock color="#969696" />}
          />
          
          <Input type="password" placeholder="设置密码" pl={38} onChange={e=>setPassword(e.target.value)} />
          {/* <InputRightAddon children={<FaCheck />} /> */}
        </InputGroup>
      </Stack>
      <Button
          _hover={{ bgColor: "tomato" }}
          bg="#42c02e"
          height="43px"
          color="white"
          w="100%"
          mt={15}
          onClick={confirmClick}
          borderRadius="25px">
          注册
        </Button>
        <Flex fontSize="12px" direction="column" align="center" mt="10px">
          <Box>点击 “注册” 即表示您同意并愿意遵守简书</Box>
          <Box>
            <Link color="#3194d0" href="/">
              用户协议
            </Link>
            和
            <Link color="#3194d0" href="/">
              隐私政策
            </Link>
          </Box>
        </Flex>
        <Flex justify="center" mt={50} fontSize="12px">社交账号直接注册</Flex>
        <Flex justify="space-between" align="center" h={50} pl={100} pr={100}>
          <Image src={weixin} />
          <Image src={qq} />
        </Flex>
    </form>
  );
}
