import { Typography } from "@mui/material"

const PrivateText = () => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
      >
          Add page
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
          This page is private. You redirected to login page, when logged out 
      </Typography>
    </>
  )
}

export default PrivateText;

