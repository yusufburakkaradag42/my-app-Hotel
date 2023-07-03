import React, { useEffect, useState }  from 'react';
import { Box, IconButton, useBreakpointValue ,Container, HStack,Link, Select} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';



const Links = ['HOME','RESIDENCE','LAND/FARM','WORKPLACE','LAKE','HISTORIC','REST/FUN'];


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Header = () => {
  const [otel,setOtel] =useState([])

  const fetchOtels=  async ()=>  {
    try {
     const respone= await fetch('https://6405db5a40597b65de4320e7.mockapi.io/todos')
     const data =await respone.json()
     setOtel(data)
     console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {

   fetchOtels()
  },[]
  ) 









  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <>
   <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
    
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
     
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
   
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>  
    </Box>
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
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
     </Box>
     <Box>
        <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
     </Box>
     <Box>
        <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
     </Box>
     <Box>
        <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
     </Box>
     {/* <Box>
     <StarRatingComponent
                  // name="rate"
                  starCount={5}
                  // value={rate / 2}
                  editing={true}
                />
     </Box> */}
     </Box>
    </Container>
 
 </>
   
  );
}
export default Header;