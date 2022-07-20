import {Box, Container, Flex} from "@chakra-ui/react"
import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"
import {ChevronRight, ChevronLeft} from "tabler-icons-react"
import {CommentCard} from "components"

const testimonials = [
  {
    body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
    author: {fullname: "Dan Abramov1", avatarUrl: "https://bit.ly/dan-abramov", title: "Frontend Developer"},
  },
  {
    body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p>",
    author: {fullname: "Dan Abramov2", avatarUrl: "https://bit.ly/dan-abramov", title: "Frontend Developer"},
  },
  // {
  //   body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p>",
  //   author: {fullname: "Dan Abramov3", avatarUrl: "https://bit.ly/dan-abramov", title: "Frontend Developer"},
  // },
  // {
  //   body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p>",
  //   author: {fullname: "Dan Abramov4", avatarUrl: "https://bit.ly/dan-abramov", title: "Frontend Developer"},
  // },
  // {
  //   body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque eos eum illum ipsa nobis officiis pariatur unde veritatis, voluptatibus. At aut cum cumque inventore nemo quasi quo quos voluptatibus!</p>",
  //   author: {fullname: "Dan Abramov5", avatarUrl: "https://bit.ly/dan-abramov", title: "Frontend Developer"},
  // },
]

export default function DemoPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return <Box background="#eee" height="100vh">
    <Container maxWidth="2xl">
      <Box
        borderRadius="4px"
        className="commentCarousel"
        position="relative"
      >
        <Flex
          gap=".5rem"
          justify="right"
          position="absolute"
          top="1.5rem"
          right="1.5rem"
          zIndex={1}
        >
          <IconContainer hint="left" onClick={scrollPrev}>
            <ChevronLeft strokeWidth={1} size="1.5rem"/>
          </IconContainer>
          <IconContainer hint="right" onClick={scrollNext}>
            <ChevronRight strokeWidth={1} size="1.5rem"/>
          </IconContainer>
        </Flex>
        <Box overflow="hidden">
          <Box className="viewport" ref={emblaRef}>
            <Flex className="container" align="stretch" gap="1rem">
              {testimonials.map((testimonial, i) => {
                return <Box
                  key={i}
                  flexShrink="0"
                  flexBasis="100%"
                  height="100%"
                  width="100%"
                >
                  <CommentCard {...testimonial}/>
                </Box>
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
}

// IconContainer
function IconContainer({children, hint, onClick}) {
  return <Flex
    align="center"
    justify="center"
    borderRadius="50%"
    background="#eee"
    height="2rem"
    width="2rem"
    onClick={onClick}
    cursor="pointer"
  >
    <RepositionSVG hint={hint} offset={2}>
      {children}
    </RepositionSVG>
  </Flex>
}

// RepositionSVG
function RepositionSVG({children, hint, offset = 1}) {
  return <Box
    position="relative"
    left={(hint == "left" ? -1 : 1) * offset + "px"}
    sx={{
      "& > svg": {
        display: "block"
      }
    }}
  >
    {children}
  </Box>
}
