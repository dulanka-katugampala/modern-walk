import { Link } from "react-router-dom";

interface HeaderProps {
  link: string;
  title: string;
}

const Header = ({ link, title }: HeaderProps) => {
  return (
    <header className="bg-primary-grey shadow-primary border-b border-primary-border-grey fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Link to={link}>
          <h1 className="text-main-header font-bold text-primary-black">
            {title}
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
