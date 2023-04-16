import { } from "@chakra-ui/react";
import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

const AboutUs: React.FC = () => {
  return (
        <>
<Box>
      <Heading size="md">Earn For Good</Heading>
      <Box mt={4} mb={8}>
        <Text>
          Welcome to our Blockchain-based project that is revolutionizing the way
          we consume and distribute content while promoting social good.
        </Text>
        <br></br>
        <Text>
          At our core, we are a video-sharing platform that rewards users for
          watching and sharing videos with cryptocurrency.
        </Text>
        <br></br>
        <Text>
          We believe that content creators and viewers should be compensated
          for their contributions, and we have built a platform that achieves
          this goal using blockchain technology.
        </Text>
        <br></br>
        <Text>
          Our mission is to make content creation and consumption accessible to
          everyone, while empowering users to support charitable causes.
        </Text>
        <br></br>
        <Text>
          Our team comprises experienced professionals who are passionate about
          blockchain technology, content creation, and social impact. We believe
          that our collective expertise and dedication will help us achieve our
          vision of a fairer, more equitable content-sharing platform.
        </Text>
        <br></br>
      </Box>
    </Box>
    
    </>
  );
};

export default AboutUs;