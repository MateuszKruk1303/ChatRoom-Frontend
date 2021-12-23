import { Redirect, Route, Switch } from 'react-router'
import { paths } from 'config'
import { ModuleRoute } from 'shared/types'
import PrivateRoute from '../PrivateRoute'
import { Container } from './Layout.style'

export interface LayoutProps {
  routes: ModuleRoute[]
}

const Layout = ({ routes }: LayoutProps) => {
  return (
    <Container>
      <Switch>
        {routes.map((route, i) => (
          <PrivateRoute key={`route-${i}`} {...route} />
        ))}
        <Route component={() => <Redirect to={paths.login} />} />
      </Switch>
    </Container>
  )
}

export default Layout
