import React from 'react'
import { Button } from "@mui/material";

export default function SharedButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="primary"
      type="submit"
      size="small"
      sx={{ mr: 2, mb: 2 }}
    >
      {children}
    </Button>
  )
}