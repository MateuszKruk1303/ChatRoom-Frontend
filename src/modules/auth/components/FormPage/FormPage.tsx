import { Grid, CardContent } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Title, Link, Card } from './FormPage.style'

interface FormPageProps {
  route: string
  linkText: string
  title: string
}

const FormPage = ({
  children,
  route,
  linkText,
  title,
}: PropsWithChildren<FormPageProps>) => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Card>
        <CardContent>
          <Grid container alignItems="center" justifyContent="center">
            <Title>{title}</Title>
          </Grid>
          {children}
          <Grid container alignItems="center" justifyContent="center">
            <Link to={route}>{linkText}</Link>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default FormPage
