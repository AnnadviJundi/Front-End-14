import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Image as ChakraImage,
  } from '@chakra-ui/react';
import Button from '../../Components/ui/Button';

const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie]  = useState({})


    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    
    const getDetail = async(id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
    }

    useEffect(() => {
        getDetail(id)
    },[id]) 


    console.log(movie);


    return (
        <Box margin="1rem">
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Box marginBottom="1rem" flexBasis={{ base: '100%', md: '40%' }} >
              <Heading color="#7752FE" fontSize="2.44rem" marginBottom="1rem">
                {movie.title}
              </Heading>
              <Heading color="#00A9FF" fontSize="1.5rem" marginBottom="1rem">
                {movie.original_title}
              </Heading>
              <Text color="#3A98B9" fontSize="1.59rem" marginBottom="0">
                Genres:
              </Text>
              <Text color="#4477CE" fontSize="1.59rem" marginBottom="1rem">
                {movie.genres && movie.genres.map((genre) => genre.name).join(', ')}
              </Text>
              <Text color="#78C1F3" fontSize="1.2rem" marginBottom="1rem">
                Synopsys: {movie.overview}
              </Text>
              <Text color="#79E0EE" fontSize="1.2rem" marginBottom="1rem">
                <strong>Waktu Rilis:</strong> {movie.release_date}
              </Text>
              <Text color="#79E0EE" fontSize="1.2rem" marginBottom="1rem">
                <strong>Duration:</strong> {movie.runtime} menit
              </Text>
              <Text color="#79E0EE" fontSize="1.2rem" marginBottom="1rem">
                <strong>popularity:</strong> {movie.popularity}
              </Text>
              <Link
                color="#64748b"
                target="_blank"
                href={movie.homepage}
                marginBottom="1rem"
                fontSize="1.2rem"
              >
                Kunjungi Situs
              </Link> <br/>
              <Button variant="primary" >
                Watch
              </Button>
              <Button variant="secondary" >
                Trailer
              </Button>
            </Box>
            <Box marginLeft={{ md: '1rem' }} flexBasis={{ base: '100%', md: '60%' }}>
              <ChakraImage
                src={url_image}
                alt={movie.title}
                justifyContent="center"
                margin="50px"
                maxW="auto"
                height="100%"
                marginTop="1rem"
                borderRadius="20px"
                borderColor="black"
                border="solid"
              />
            </Box>
          </Flex>
        </Box>
      );
    };
export default Detail;
