import React, { useEffect, useState } from "react"; 
import Button from "../ui/Button"; 
 
import { 
  Flex, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  useBreakpointValue, 
} from "@chakra-ui/react"; 
 
const Hero = () => { 
  const [movie, setMovie] = useState({}); 
 
  async function getDataApi() { 
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"; 
 
    const response = await fetch(url); 
    const data = await response.json(); 
 
    setMovie(data); 
  } 
 
  useEffect(function () { 
    getDataApi(); 
  }, []); 
 
  console.log(movie); 
 
  return ( 
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}> 
      <Flex p={8} flex={1} align={"center"} justify={"center"}> 
        <Stack spacing={6} w={"full"} maxW={"lg"}> 
          <Heading 
            fontSize={'55px'} 
            color={"#7752FE"} 
          > 
            <Text color={"#00A9FF"} as={"span"}> 
              {movie.Title} 
            </Text>{" "} 
          </Heading> 
          <Text 
            fontSize={'30px'} 
            color={"#3A98B9"} 
            width={"fit-content"} 
          > 
            {movie.Genre} 
          </Text> 
          <Text fontSize={'25px'} color={"#78C1F3"}> 
            {movie.Plot} 
          </Text> 
          <Text fontSize={'20px'} color={"#ACBCFF"}> 
            {movie.Writer} 
          </Text> 
          <Stack direction={{ base: "column", md: "row" }} spacing={4}> 
            <Button variant="primary">Watch</Button> 
            <Button variant="secondary">Trailer</Button> 
          </Stack> 
        </Stack> 
      </Flex> 
      <Flex flex={1} justifyContent={'flex-end'}> 
        <Image 
          alt={"Login Image"} 
          marginTop={"150px"} 
          maxHeight={"600px"} 
          width={"auto"} 
          objectFit={"cover"} 
          borderRadius={"25px"} 
          src={movie.Poster} 
        /> 
      </Flex> 
    </Stack> 
  ); 
}; 
 
export default Hero;
