import {Link } from "react-router-dom";


const Header = () => {
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
     <Link to="/" className="nav-link active">
      Study
     </Link>
     <Link to="/words" className="nav-link">
      Word List
     </Link>
    </nav>
   </div>
  </header>
 );
};

export default Header;
