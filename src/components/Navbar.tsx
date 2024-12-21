import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1E293B] py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            Huzur App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 