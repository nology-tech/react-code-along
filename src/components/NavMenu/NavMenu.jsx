import { Link } from "react-router-dom";
import blackCross from "../../assets/images/black-cross.png";
import "./NavMenu.scss";

const NavMenu = (props) => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={blackCross}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={toggleNav}
        />
        <Link className="nav-menu__item" to="/" onClick={toggleNav}>
          Home
        </Link>

        <Link className="nav-menu__item" to="/albums" onClick={toggleNav}>
          All Albums
        </Link>

        <Link className="nav-menu__item" to="/albums/rated" onClick={toggleNav}>
          Rated Albums
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
