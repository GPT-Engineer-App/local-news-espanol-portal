import { Container, VStack, Heading, Text, Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const newsArticles = [
  {
    title: "Nuevo Parque Inaugurado en la Ciudad",
    description: "El nuevo parque central ha sido inaugurado con una gran ceremonia que incluyó música en vivo y actividades para toda la familia.",
    image: "https://images.unsplash.com/photo-1611584401681-8d229fa6c69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGFyayUyMGluYXVndXJhdGlvbnxlbnwwfHx8fDE3MTY0NDEwMDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Aumento en la Tarifa del Transporte Público",
    description: "Las autoridades han anunciado un aumento en la tarifa del transporte público que entrará en vigor el próximo mes.",
    image: "https://images.unsplash.com/photo-1532353902070-95caa80c7228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc3BvcnQlMjBmYXJlJTIwaW5jcmVhc2V8ZW58MHx8fHwxNzE2NDQxMDA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Festival Cultural este Fin de Semana",
    description: "Este fin de semana se llevará a cabo el festival cultural anual con la participación de artistas locales e internacionales.",
    image: "https://images.unsplash.com/photo-1660855428134-3f92498d0dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsfGVufDB8fHx8MTcxNjQ0MTAwNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Noticias Locales
        </Heading>
        {newsArticles.map((article, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {article.title}
              </Heading>
              <Text mb={4}>{article.description}</Text>
              <HStack spacing={4}>
                <IconButton aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
