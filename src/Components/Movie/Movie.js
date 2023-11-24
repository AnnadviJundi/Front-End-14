import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'; 
import React from 'react'; 
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
 
const Movie = (props) => { 
    const { item } = props 
    const url_image = `https://image.tmdb.org/t/p/w300/${item.poster_path}`
    const bg_image = `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
     
    console.log(item) 
 
    return ( 
        <Center py={6} m={5}> 
          <Box 
            height={'750px'} 
            w={'300px'} 
            bg={useColorModeValue('white', 'black')} 
            boxShadow={'2xl'} 
            rounded={'lg'} 
            overflow={'hidden'}> 
            <Image 
              h={'auto'} 
              w={'full'} 
              src={ 
                url_image 
              } 
              objectFit="cover" 
              alt="#" 
            /> 
     
            <Box p={6}> 
              <Stack spacing={0} align={'center'} mb={5} > 
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}> 
                  {item.title} 
                </Heading> 
                <Text color={'gray.500'}>{item.release_date}</Text> 
              </Stack> 
     
              <Stack direction={'row'} justify={'center'} spacing={6}mb={5}> 
                <Stack spacing={0} align={'center'}> 
                  <Text fontWeight={600}>{item.vote_average}</Text> 
                  <Text fontSize={'sm'} color={'gray.500'}> 
                  Vote Average 
                  </Text> 
                </Stack> 
                <Stack spacing={0} align={'center'}> 
                  <Text fontWeight={600}>{item.vote_count}</Text> 
                  <Text fontSize={'sm'} color={'gray.500'}> 
                  Vote Count 
                  </Text> 
                </Stack> 
              </Stack> 
     
              <Link to={`/movie/${item.id}`}> 
                <Button variant="primary">Detail</Button> 
              </Link> 
            </Box> 
          </Box> 
        </Center> 
      ) 
} 
 
 
export default Movie;
