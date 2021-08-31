import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Welcome</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
