import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
 const [active, setActive] = useState(1);

 const headerButtons = [
  { id: 1, name: "Study", link: "/" },
  { id: 2, name: "Word List", link: "/words"},
 ];

 return (
  <header className="site-header">
   <div className="header-inner">
    <Link to="/" className="brand-link">
     <h1 className="logo">
      Card<span className="logo-accent">Forge</span>
     </h1>
     <p className="tagline">Build and study your own flashcards</p>
    </Link>

    <nav className="site-nav">
     {headerButtons.map((button) => (
      <Link
       key={button.id}
       to={button.link}
       onClick={() => setActive(button.id)}
       className={active === button.id ? "nav-link active" : "nav-link"}
      >
       {button.name}
      </Link>
     ))}
    </nav>
   </div>
  </header>
 );
};

export default Header;
