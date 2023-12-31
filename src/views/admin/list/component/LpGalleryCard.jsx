import {
    Badge,
    Box,
    Flex,
    Text,
    Stack,
    CheckboxGroup,
    Checkbox,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LpGalleryCard = ({ id, title, description, tags, subTasks, colorScheme }) => {

    const [checkBox, setCheckBox] = useState(() => {
        let data = subTasks.filter((item) => {
            return item.status && item.subTaskTitle;
        })
        .map((item) => item.subTaskTitle);
        return data;
    });

    return (
        <Box
            _hover={{border: "1px solid white", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}
            width="100%"
            borderRadius="10px"
            margin="auto"
            marginTop="7%"
            marginBottom="3%"
            padding="5%"
            border="1px solid green"
            backgroundColor="white"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        >
            <Box>
                <Flex>
                    <Text fontWeight="bold" color="blue">{title}</Text>
                </Flex>
            </Box>
            <Box>
                <Stack 
                    direction={{base: "column",sm: "column", md: "column",lg: "row", xl: "row"}}
                    width="fit-content"
                >
                    {tags.length && tags.map((item, index) => {
                        return <Badge colorScheme={colorScheme} key={index}>{item}</Badge>
                    })}
                </Stack>
            </Box>
            <Box>
                <Flex>
                    <Text 
                        fontWeight="500"
                        marginTop="3%"
                        marginBottom="3%"
                        color="green"
                    >{description}</Text>
                </Flex>
            </Box>
            <Box display="flex" flexDirection="column" paddingLeft={{base: "15%"}}>
                <CheckboxGroup value={checkBox}>
                    {subTasks.length > 0 && subTasks.map((item, index) => {
                        return <Checkbox color="#470122" fontWeight="500"  value={item.subTaskTitle} key={index}>{item.subTaskTitle}</Checkbox>
                    })}
                </CheckboxGroup>
            </Box>
        </Box>
    );
};

export default LpGalleryCard;
