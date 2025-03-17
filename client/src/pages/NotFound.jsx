import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='font-bold text-2xl'>
            404 Not Found
            <br />
            <Link to='/' className='text-blue-950'>Home</Link>
        </div>
    )
}

export default NotFound