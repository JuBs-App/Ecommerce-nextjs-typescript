import React, { Children } from 'react'
import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Stack,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
// import { Avatar, Badge } from 'antd'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack>
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <Image src={'/logo.png'} h="50px" />

          <HStack as="nav" spacing="5">
            <Link href="/">
              <Button variant="nav"> Home </Button>
            </Link>
            <Link href="/about-us">
              <Button variant="nav"> About us </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="nav"> Contact us </Button>
            </Link>
            <Link href="/login">
              <Button variant="nav"> Login </Button>
            </Link>
          </HStack>

          <HStack>
            {/* <Badge
              count={5}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: '#e01709',
              }}
            >
              <Avatar
                shape="square"
                size="large"
                style={{ backgroundColor: '#e01709' }}
              >
                <AiOutlineShoppingCart />
              </Avatar>
            </Badge> */}
            <IconButton
              css={css`
                position: relative !important;
              `}
              py={'2'}
              colorScheme={'gray'}
              aria-label={'Notifications'}
              size={'lg'}
              icon={
                <>
                  <AiOutlineShoppingCart color={'gray.750'} />
                  <Box
                    as={'span'}
                    color={'white'}
                    position={'absolute'}
                    top={'6px'}
                    right={'4px'}
                    fontSize={'0.7rem'}
                    bgColor={'red'}
                    borderRadius={'10px'}
                    zIndex={9999}
                    p={'1px'}
                  >
                    {5}
                  </Box>
                </>
              }
            />
          </HStack>
        </Flex>
      </chakra.header>
      {children}
    </Stack>
  )
}

export default Layout
