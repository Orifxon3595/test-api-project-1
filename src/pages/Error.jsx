import { Link, useRouteError} from 'react-router-dom'
function Error() {
    const error = useRouteError()
  return (
    <main className='h-screen grid place-content-center text-center'>
        <h1 className='text-9xl mb-5'>404</h1>
        <p className='text-5xl mb-7'>Page Not Found</p>
        <Link className="btn btn-accent">GO TO HOME</Link>
    </main>
  )
}

export default Error