import { paths } from 'config'
import { Loadable } from 'shared/components'
import { ModuleRoute } from 'shared/types'

const routes: ModuleRoute[] = [
  {
    path: paths.home,
    exact: true,
    component: Loadable({
      component: () => import('./pages/Home'),
    }),
  },
]

export default routes
