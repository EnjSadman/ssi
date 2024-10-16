import { Typography } from "@mui/material"

const PublicText = () => {
  return (
    <>
      <Typography
        align="center"
        variant="h1"
      >
          Public Page
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
          This is public page.
          This can be viewed without login
      </Typography>
    </>
  )
}

export default PublicText;