import React, { useState } from "react";
import { Stack, Image, Text, Flex, Button, Tooltip } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Link from "next/link";
const Card = ({ cardData }) => {
  const [star, setstar] = useState("hidden");
  const [fillStar, setfillStar] = useState(true);
 
  const handleStar = () => {
    setstar("visible");
  };
  return (
    <Link href={`/fruitesvegetables/${cardData._id}`} key={cardData._id}>
      <Stack
        h="445px"
        borderRight="1px solid rgb(238, 238, 238)"
        _hover={{ boxShadow: "3px 4px 4px 1px #d3d3d3" }}
        onMouseEnter={handleStar}
        onMouseLeave={() => {
          setstar("hidden");
        }}
        p={3}
        fontSize="14px"
        align="center"
        spacing={3}
        justify="center"
      >
        <Tooltip
          hasArrow
          label="ADD TO FAVOURITES"
          color="white"
          bg="green"
          arrowSize={15}
        >
          <Button
            variant="ghost"
            _hover={{ bg: "none" }}
            fontSize="28px"
            ml="90%"
            mb="-50px"
            visibility={star}
          >
            {fillStar ? (
              <AiOutlineStar
                color="#92be4d"
                onMouseEnter={() => {
                  setfillStar(false);
                }}
              />
            ) : (
              <AiFillStar
                color="#92be4d"
                onMouseLeave={() => {
                  setfillStar(true);
                }}
              />
            )}
          </Button>
        </Tooltip>
        <Image
          p={2}
          src={
            !cardData.image
              ? "https://d1z88p83zuviay.cloudfront.net/Images/no-images425x425.jpg"
              : cardData.image
          }
          w="100%"
          h="60%"
          borderRadius="10px"
          border="0.2px solid rgb(238, 238, 238)"
          boxShadow="1px 2px #efe9e9"
         
        />
        <Text>{cardData.title}</Text>
        <Flex gap={3}>
          {/* {cardData.piece} */}
          {cardData.piece &&
            cardData.piece.map((e) => {
              return <Text key = {e}>{e}</Text>;
            })}
        </Flex>
        <Text>{cardData.category}</Text>
        <Flex gap={2}>
          <Button
            colorScheme="white"
            fontSize="13px"
            bg="none"
            fontWeight="normal"
            borderRadius="10px"
            _hover={{ bg: "none" }}
            color="black"
            border="1px solid #cfcfcf"
          >{`MRP ₹ ${cardData.price}`}</Button>
          <Button bg="#92be4d" _hover={{ bg: "#92be4d" }} p="0">
            <Image
              src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
              w="100%"
            />
          </Button>
        </Flex>
      </Stack>
    </Link>
  );
};

export default Card;
