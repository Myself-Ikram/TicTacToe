import React, { useState } from "react";
import { Box } from "@mui/material";

import SubTopic from "./SubTopic";

type Params = {
  title: string;
  allTopics: Topic[];
  delTopic: Function;
};

type Topic = {
  name: string;
  desc: string;
  date: string;
  priority: string;
};

function TopicBox({ title, allTopics, delTopic }: Params) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 2,
        borderRadius: 5,
        height: "fit-content",
        paddingY: 2,
        width: { xs: "65vw", sm: "auto" },
        "&:hover": { boxShadow: 5 },
      }}
    >
      <Box
        component={"h4"}
        sx={{
          backgroundColor:
            title === "TODO"
              ? "#60A5FA"
              : title === "PERSON TO SPEAK"
              ? "#F472B6"
              : "#A78BFA",
          width: "fit-content",
          padding: 1,
          marginLeft: 0,
          boxShadow: 2,
        }}
      >
        {title}
      </Box>
      {allTopics.map((task, index) => (
        <SubTopic task={task} key={index} title={title} delTopic={delTopic} />
      ))}
    </Box>
  );
}

export default TopicBox;
