import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-accent'>
        <div className='align-element flex justify-between items-center py-3'>
            <h1 className='text-3xl text-white'>
                <Link to="/">Recipe</Link>
            </h1>
            <Link className='btn btn-outline hover:border-white hover:bg-teal-300 text-white border-2 border-white' to="/create">Create</Link>
        </div>
    </div>
  )
}

export default Navbar