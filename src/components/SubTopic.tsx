import React, { useState } from "react";
import { Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
type Task = {
  name: string;
  desc: string;
  date: string;
  priority: string;
};

type Params = {
  task: Task;
  delTopic: Function;
  title: string;
};
function SubTopic({ task, delTopic, title }: Params) {
  const [show, setShow] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      delTopic(title, task.name);
    }
  }

  return (
    <Box
      sx={{ paddingX: 2, textDecoration: completed ? "line-through" : "none" }}
    >
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <input type="checkbox" onChange={() => setCompleted(!completed)} />
          <h4 style={{ textDecoration: completed ? "line-through" : "none" }}>
            {task.name}
          </h4>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            component={"p"}
            sx={{
              color: "white",
              backgroundColor:
                task.priority === "high"
                  ? "#F87171"
                  : task.priority === "medium"
                  ? "#FBBF24"
                  : "#34D399",
              paddingX: 1,
              borderRadius: 1,
            }}
          >
            {task.priority}
          </Box>
          <p onClick={handleClick}>
            <DeleteOutlineIcon style={{ color: "red" }} />
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: -4.5,
        }}
        onClick={() => setShow(!show)}
      >
        <h5>{task.date}</h5>
        <ArrowDropDownCircleIcon
          sx={{ color: "black", transform: show ? "rotate(180deg)" : "none" }}
        />
      </Box>
      <Box
        sx={{
          display: show ? "" : "none",
          marginTop: -2.5,
        }}
      >
        <p
          style={{
            fontSize: 15,
            marginTop: -5,
            color: "#374151",
            fontStyle: "italic",
          }}
        >
          "{task.desc}"
        </p>
      </Box>
    </Box>
  );
}

export default SubTopic;
