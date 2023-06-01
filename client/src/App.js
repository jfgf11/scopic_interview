import {ChakraProvider, Heading, Container,Wrap, Image, Input, Button} from "@chakra-ui/react";
import axios from "axios";
import {useState} from "react";

function App() {
  const [image, updateImage] = useState()
  const [prompt, updatePrompt] = useState()

  const generate = async prompt => {
    const res = await axios.get("http://127.0.0.1:8000/?prompt="+prompt)
    updateImage(res.data)
  }

  return (
    <ChakraProvider>
      <Container>
        <Heading>Stable Diffusion</Heading>
        <Wrap>
          <Input value={prompt} onChange={e => updatePrompt(e.target.value)} width={"350px"}></Input>
          <Button onClick={e => generate(prompt)} colorScheme={"green"}>Generate</Button>
        </Wrap>

        {image? <Image src={"data:image/png;base64," + image}/> : null}
      </Container>
    </ChakraProvider>
  );
}

export default App;
