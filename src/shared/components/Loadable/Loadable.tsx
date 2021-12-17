import { Suspense, SuspenseProps, lazy } from 'react'
import PageLoader from '../PageLoader'
import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary'

export interface LoadableProps extends ErrorBoundaryProps {
  component(): Promise<{ default: React.ComponentType<any> }>
  loader?: () => SuspenseProps['fallback']
}

const Loadable = ({
  component,
  errorHandler,
  loader: renderLoader,
  ...errorBoundaryProps
}: LoadableProps) => {
  const Component = lazy(component)
  return <T extends {}>(componentProps: T) => (
    <ErrorBoundary errorHandler={errorHandler} {...errorBoundaryProps}>
      <Suspense fallback={renderLoader ? renderLoader() : <PageLoader />}>
        <Component {...componentProps} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Loadable
