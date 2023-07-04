import { Box,Container, HStack,Link, Select} from '@chakra-ui/react';
import React from 'react'
import StarRatingComponent from "react-star-rating-component";


const Links = ['HOME','RESIDENCE','LAND/FARM','WORKPLACE','LAKE','HISTORIC','REST/FUN'];


const Main = ({otel,setOtel}) => {
  const allValues = otel.map((item)=> item.rent)
  const uniqueRentValues = [...new Set(allValues)];// tekrar eden kelimeleri kaldırır
  const options = uniqueRentValues.map((rent) => (
    
    <>
    <option value='Rent'>{country}</option>
    {/* <option value='Rent'>{}</option> */}
    </>

  ));

  return (

    <Container maxW='container.xl' centerContent rounded={'12'} position="absolute" bottom="0" left="50%" transform="translateX(-50%)" p="4" bg="white">
    <Box p={15} color={'gray.400'}>
    <HStack spacing={8} alignItems={'center'}>
      
        <HStack 
          spacing={10}
          display={{ md: 'flex' }}>
          {Links.map((link) => (
         <Link  key={link}>{link}  </Link>
          ))}
        </HStack>
      </HStack>
    </Box> 


     {/* select  */}
   
     
  
    <Box display={'flex'} gap={4} mt={10} justifyContent={'space-between'} >

    
    <Box> 
     
      <Select placeholder='Rent/Sales'>
       {options}
      </Select> 
   </Box>
   {/* <Box>
      <Select placeholder='Country'>
        {options.Country}
        
      </Select>
   </Box>  */}
   {/*
   <Box>
      <Select placeholder='State'>
        <option value='State'>{item.state}</option>
       
      </Select>
   </Box>
   <Box>
      <Select placeholder='Room'>
        <option value='Room'>{item.room}</option>
      </Select>
   </Box> */}
   <Box>
   <StarRatingComponent
                // name="rate"
                starCount={5}
                // value={item.reSale}
                editing={true}
              />
   </Box>
   
  
   </Box>  
  </Container>
  )
}

export default Main