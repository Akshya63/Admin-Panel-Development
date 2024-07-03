import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
        <Link className="mx-2" to='/'>Home</Link>
        <Link className="mx-2"   to='/register'>Register</Link>
        <Link className="mx-2" to='/login'>Login</Link>
    </nav>
  )
}

export default navbar;
