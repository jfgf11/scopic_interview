import {ChakraProvider, Heading, Container,Wrap, Text, Box, Image, Input, Button, Spinner, AbsoluteCenter, Link} from "@chakra-ui/react";
import axios from "axios";
import {useState} from "react";

function App() {
  const [image, updateImage] = useState()
  const [prompt, updatePrompt] = useState()
  const [loading, updateLoading] = useState()

  const generate = async prompt => {
    updateLoading(true)
    const res = await axios.get("http://127.0.0.1:8000/?prompt="+prompt)
    updateImage(res.data)
    updateLoading(false)
  }

  return (
    <ChakraProvider>
      <Container>
        <Heading>Stable Diffusion</Heading>
        <Wrap marginButton={"10px"}>
          <Text marginBottom={"1px"}>
            This application generates an image based on an input text using the Stabel Diffusion Learning model.
            Stable Diffusion was made possible thanks to a collaboration with Stability AI and Runway. 
            Its GitHub repository can be found <Link color='teal.500' href="https://github.com/CompVis/stable-diffusion"> here </Link>.
            The original paper that allowed the stable diffusion creation is

            <Link color='teal.500' href="https://arxiv.org/abs/2112.10752"> High-Resolution Image Synthesis with Latent Diffusion Models </Link>.
          </Text>
          <Input value={prompt} onChange={e => updatePrompt(e.target.value)} width={"350px"}></Input>
          <Button onClick={e => generate(prompt)} colorScheme={"green"}>Generate</Button>
        </Wrap>

        {loading? 
          (<Box position='relative' h='300px'>
            <AbsoluteCenter>
              <Spinner size='xl'/>
            </AbsoluteCenter>
          </Box>):
          (image? <Image marginTop={'10px'} src={"data:image/png;base64," + image}/> : null)}
      </Container>
    </ChakraProvider>
  );
}

export default App;
