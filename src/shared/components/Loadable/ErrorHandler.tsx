import { Box, Button, Alert, AlertTitle } from '@mui/material'

export interface ErrorHandlerProps {
  error: Error
  reset: () => void
}

const ErrorHandler = ({ error, reset }: ErrorHandlerProps) => {
  return (
    <Box padding={4}>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={reset}>
            xd
          </Button>
        }
      >
        <AlertTitle>xd</AlertTitle>
        {error.message}
      </Alert>
    </Box>
  )
}

export default ErrorHandler
