import { Components } from '@mui/material'
import { forwardRef } from 'react'
import { Link, LinkProps } from 'react-router-dom'

/**
 * This maps Material-UI's link behavior to React Router.
 */
const RouterLink = forwardRef<
  any,
  Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>(({ href, ...props }, ref) => <Link ref={ref} to={href} {...props} />)

const overrides: Components = {
  MuiButton: {
    defaultProps: {
      fullWidth: true,
    },
  },
  MuiLink: {
    defaultProps: {
      // @ts-ignore
      component: RouterLink,
      underline: 'hover',
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
  },
}

export default overrides
