import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        href={href}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'container.md'}
        wrap={'wrap'}
        align={'center'}
        justify={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <NextLink href={'/'}>
            <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'} style={{userSelect: "none", cursor: "pointer"}}>
              dadyarri
            </Heading>
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/projects'} path={path}>
            Проекты
          </LinkItem>
          <LinkItem href={'/posts'} path={path}>
            Публикации
          </LinkItem>
        </Stack>
        <Box flex={1} align={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Options'}
              ></MenuButton>
              <MenuList>
                <NextLink href={'/'} passHref>
                  <Link>
                    <MenuItem>Обо мне</MenuItem>
                  </Link>
                </NextLink>
                <NextLink href={'/projects'} passHref>
                  <Link>
                    <MenuItem>Проекты</MenuItem>
                  </Link>
                </NextLink>
                <NextLink href={'/posts'} passHref>
                  <Link>
                    <MenuItem>Публикации</MenuItem>
                  </Link>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
