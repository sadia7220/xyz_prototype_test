import React from 'react'
import { TextField } from "@mui/material";

export default function TextInput({ label, type, name, value, onChange }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      color="primary"
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      fullWidth
      sx={{ mb: 3 }}
    />
  )
}

export function TextImport({ onChange }) {
  return (
    <TextField
      type={"file"}
      id={"csvFileInput"}
      accept={".csv"}
      onChange={onChange}
      sx={{ mb: 3, mr: 3 }}
    />
  )
}