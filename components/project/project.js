import NextLink from 'next/link';
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Project = ({ children }) => (
  <Box>
    <NextLink href={'/projects'}>
      <Link>Проекты</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => {
  const colorSchemas = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink'
  ];
  return (
    <Badge
      colorScheme={
        colorSchemas[Math.floor(Math.random() * colorSchemas.length)]
      }
      variant={'outline'}
      ml={1}
      mr={3}
      p={1}
    >
      {children}
    </Badge>
  );
};
