import {
    Container,
    Heading,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Text,
    Divider,
    Flex,
    VStack,
  } from '@chakra-ui/react';
  import { Configuration, EndaomentSdkApi } from '@endaoment/sdk';
  import { ConnectKitButton } from 'connectkit';
  import { useNetwork } from 'wagmi';
  import CharitableGiving from './CharitableGiving';
  
  import Discoverability from './Discoverability';
  import EntityDeploy from './EntityDeploy';
  import VideoComponent from './VideoComponent';
  
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
  
  import HomeComponent from './HomeComponent';
import AboutUs from './AboutUs';
//   import ethers from 'ether'; 
  
  // const config = new Configuration({ network: 'local' });
  const config = new Configuration({ network: 'mainnet' });
  const sdk = new EndaomentSdkApi(config);
  
  const CustomTabPanel = ({
    title,
    description,
    children,
  }: {
    title: string;
    description: string;
    children: JSX.Element;
  }) => (
    <TabPanel>
      <Heading my={4} size="md">
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
  
      <Divider my="4" />
  
      {children}
    </TabPanel>
  );
  
  function App() {
    const { chain } = useNetwork();
  
    return (
      
      <Container maxW="4xl" p="4" mt="16" bgColor='#f5f5f5'>
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/charity" element={<CharitableGiving sdk={sdk}/>} />
          <Route path="/video" element={<VideoComponent videoUrl={"https://www.shutterstock.com/shutterstock/videos/1057665724/preview/stock-footage-a-seconds-countdown-introduction-with-beautiful-slick-graphics.webm"} />
           } />
        </Routes>
      </Router> */}
  
        <Flex justifyContent="space-between" alignItems="center" mb={8}>
          <Heading size="lg" >Earn For Good</Heading>
          <VStack spacing="1">
            <ConnectKitButton theme="soft" />
            {chain && (
              <Text fontSize="xs">
                Chain: {chain.name} ({chain.id})
              </Text>
            )}
          </VStack>
        </Flex>
  
        <Tabs variant="enclosed-colored">
          <TabList>
            <Tab>Charitable Giving</Tab>
            <Tab>Video Component</Tab>
            <Tab>About Us</Tab>
          </TabList>
  
          <TabPanels>
           

            <CustomTabPanel
              title=""
              description=" Doctors Without Borders - (Org EIN - 133433452);
              International Rescue Committee - (Org EIN - 135660870);
              Project Hope - (Org EIN - 530242962)"
    
              >
              <CharitableGiving sdk={sdk} />
            </CustomTabPanel>
           
  
            <CustomTabPanel
              title="Video Component"
              description="Video Component"
            >
              <VideoComponent videoUrl={"https://www.shutterstock.com/shutterstock/videos/1057665724/preview/stock-footage-a-seconds-countdown-introduction-with-beautiful-slick-graphics.webm"} />
            </CustomTabPanel>
            
            <CustomTabPanel
              title="About Us"
              description="Welcome to our Blockchain-based project that is revolutionizing the way we consume and distribute content while promoting social good."
            >
              <AboutUs/>  
              </CustomTabPanel>

          </TabPanels>
        </Tabs>
      </Container>
      
    );
  }
  
  export default App;
  