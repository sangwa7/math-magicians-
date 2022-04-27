import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="homeHeader">
    <div className="headerTitle">
      <h1> Math Magician  </h1>
    </div>
    <div className="headerMenu">
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/calculator">Calculator</Link></li>
        <li><Link className="link" to="/quote">Quote</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
