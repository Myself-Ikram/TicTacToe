import React, { useState } from "react";
import { Box } from "@mui/material";
import TopicBox from "./TopicBox";
import NewTopic from "./NewTopic";
import { initialValues } from "./data";

function Body() {
  const { initialTodo, initialSpeak, initialPlace } = initialValues;
  const [todo, setTodo] = useState([initialTodo]);
  const [speak, setSpeak] = useState([initialSpeak]);
  const [place, setPlace] = useState([initialPlace]);

  function addNewTopic(data: any) {
    const { name, desc, dueDate, priority, category } = data;

    switch (category) {
      case "Speak":
        setSpeak([...speak, { name, desc, date: dueDate, priority }]);
        break;
      case "Place":
        setPlace([...place, { name, desc, date: dueDate, priority }]);
        break;
      default:
        setTodo([...todo, { name, desc, date: dueDate, priority }]);
        break;
    }
  }
  function delTopic(category: string, name: string) {
    switch (category) {
      case "PERSON TO SPEAK":
        setSpeak(speak.filter((item) => item.name !== name));
        break;
      case "PLACES TO VISIT":
        setPlace(place.filter((item) => item.name !== name));
        break;
      default:
        setTodo(todo.filter((item) => item.name !== name));
        break;
    }
  }

  return (
    <Box
      sx={{
        display: { xs: "flex" },
        flexDirection: { xs: "column" },
        gap: 5,
        paddingX: { md: 5 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <NewTopic addNewTopic={addNewTopic} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          },
          overflow: { xs: "scroll", sm: "unset" },
          gap: 5,
          paddingX: 5,
          paddingY: 2,
        }}
      >
        <TopicBox title={"TODO"} allTopics={todo} delTopic={delTopic} />
        <TopicBox
          title={"PERSON TO SPEAK"}
          allTopics={speak}
          delTopic={delTopic}
        />
        <TopicBox
          title={"PLACES TO VISIT"}
          allTopics={place}
          delTopic={delTopic}
        />
      </Box>
    </Box>
  );
}

export default Body;
