import { paths } from 'config'
import { Loadable } from 'shared/components'
import { ModuleRoute } from 'shared/types'

const routes: ModuleRoute[] = [
  {
    path: paths.login,
    exact: true,
    public: true,
    component: Loadable({
      component: () => import('./pages/Login'),
    }),
  },
  {
    path: paths.register,
    exact: true,
    public: true,
    component: Loadable({
      component: () => import('./pages/Register'),
    }),
  },
]

export default routes
