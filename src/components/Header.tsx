import React from "react";
import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: -1,
          marginBottom: 5,
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TaskAltIcon
          sx={{
            backgroundColor: "white",
            boxShadow: 2,
            borderRadius: 5,
            fontSize: 35,
          }}
        />
        <Box
          component={"h1"}
          sx={{
            backgroundColor: "white",
            padding: 1,
            boxShadow: 2,
            borderRadius: 5,
          }}
        >
          Task Lists
        </Box>
      </Box>
      <Box
        component={"p"}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { xs: 15, sm: 20 },
          fontStyle: "italic",
          fontWeight: "bold",
          paddingX: 2,
        }}
      >
        <i style={{ color: "#16a34a" }}>"""</i>Discover the secrets to turning
        your to-do list into a symphony of accomplishments{" "}
        <i style={{ color: "#16a34a" }}>"""</i>
      </Box>
    </Box>
  );
}

export default Header;
