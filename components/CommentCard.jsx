import {Avatar, Box, Flex, Heading, Text} from "@chakra-ui/react"
import {BrandGithub} from "tabler-icons-react"
import React from "react"
import {Link, Typography} from "components"

// CommentCard
export function CommentCard({body, author}) {
  return <>
    <Flex padding="1.5rem" border="1px solid lightgray" borderRadius="4px" background="white">
      <Flex direction={["column", "row"]} gap="1rem">
        <Avatar size="md" name="Dan Abrahmov" src={author.avatarUrl}/>
        <Typography>
          <Heading as="h3" size="sm" display="flex" gap=".5rem" alignItems="center">
            {author.fullname}
          </Heading>
          <Text marginTop="-1rem!important" color="gray">
            {author.title}
          </Text>
          <Box height="100%">
            <Text
              as="div"
              marginTop="-1.5rem"
              noOfLines={3}
              dangerouslySetInnerHTML={{__html: body}}
            />
          </Box>
        </Typography>
      </Flex>
    </Flex>
  </>
}
