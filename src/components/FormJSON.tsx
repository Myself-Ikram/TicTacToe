import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { Box } from "@mui/material";
import LoupeIcon from "@mui/icons-material/Loupe";

const schema = {
  type: "object",
  required: ["name", "desc", "category"],
  properties: {
    category: {
      type: "string",
      default: "Todo",
      enum: ["Todo", "Place", "Speak"],
    },
    name: { type: "string" },
    desc: { type: "string" },
    dueDate: { type: "string", format: "date" },
    priority: {
      type: "string",
      default: "low",
      enum: ["low", "medium", "high"],
    },
  },
};

const initialData = {
  name: "",
  desc: "",
  dueDate: "",
  category: "",
  priority: "",
};
function FormJSON({ setShowForm, addNewTopic }: any) {
  const [data, setData] = useState(initialData);
  function handleClick(e: any) {
    e.preventDefault();
    const { name, desc, dueDate, category, priority } = data;
    if (
      name === "" ||
      desc === "" ||
      dueDate === "" ||
      category === "" ||
      priority === ""
    ) {
      alert("Please insert the vacant fields!");
    } else {
      addNewTopic(data);
      setShowForm(false);
    }
  }
  return (
    <Box sx={{ backgroundColor: "white", padding: 2.5, boxShadow: 1 }}>
      <JsonForms
        schema={schema}
        data={data}
        renderers={materialRenderers}
        onChange={({ data }) => setData(data)}
      />
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        <LoupeIcon
          sx={{
            fontSize: 30,
            boxShadow: 2,
            borderRadius: 5,
            color: "#16a34a",
          }}
        />
      </p>
    </Box>
  );
}

export default FormJSON;
