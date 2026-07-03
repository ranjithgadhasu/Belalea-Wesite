import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import SearchIcon from "../../assets/images/SearchIcon.png";
import NavbarLogoOne from "../../assets/images/NavbarLogoOne.png";
import CartIcon from "../../assets/images/CartIcon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-6">
          <div className="flex h-20 lg:h-24 items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <img
                src={NavbarLogoOne}
                alt="Belaléa"
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link
                to="/about"
                className="text-[#1F3B5B] font-semibold text-[15px] hover:text-[#76B77B]"
              >
                О нас
              </Link>
              <Link
                to="/catalog"
                className="flex items-center gap-1 text-[#1F3B5B] font-semibold text-[15px] hover:text-[#76B77B]"
              >
                КАТАЛОГ
                <span className="text-xs">▼</span>
              </Link>
              <Link
                to="/landing-page"
                className="text-[#1F3B5B] font-semibold text-[15px] hover:text-[#76B77B]"
              >
                Диллерам
              </Link>
              <Link
                to="/blog"
                className="text-[#1F3B5B] font-semibold text-[15px] hover:text-[#76B77B]"
              >
                Новости
              </Link>
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center">
              <div className="relative w-44">
                <input
                  type="text"
                  className="w-full h-10 rounded-full bg-[#F8F8F8] pl-4 pr-12 outline-none"
                />

                <button className="absolute right-5 top-0 flex h-10 w-10 items-center justify-center">
                  <img
                    src={SearchIcon}
                    alt="Search"
                    className="w-10 h-10"
                  />
                </button>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="ml-4 flex items-center rounded-full border border-gray-200 px-2 py-1.5 transition hover:shadow-md"
              >
                <img
                  src={CartIcon}
                  alt="Contact"
                  className="w-10 h-10"
                />

                <span className="ml-3 mr-2 text-sm font-semibold text-[#1F3B5B]">
                  Контакты
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-[#274C5B]"
            >
              <HiOutlineMenuAlt3 size={34} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />
          {/* Modal */}
          <div className="absolute top-5 right-5 w-[300px] rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <img
                src={NavbarLogoOne}
                alt="Logo"
                className="h-10"
              />
              <button
                type="button"
                onClick={closeMenu}
              >
                <HiOutlineX
                  size={30}
                  className="text-[#274C5B]"
                />
              </button>
            </div>
            {/* Menu */}
            <div className="flex flex-col gap-6 p-6">
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-lg font-semibold text-[#274C5B]"
              >
                О нас
              </Link>
              <Link
                to="/catalog"
                onClick={closeMenu}
                className="text-lg font-semibold text-[#274C5B]"
              >
                Каталог
              </Link>
              <Link
                to="/landing-page"
                onClick={closeMenu}
                className="text-lg font-semibold text-[#274C5B]"
              >
                Диллерам
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className="text-lg font-semibold text-[#274C5B]"
              >
                Новости
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-lg font-semibold text-[#274C5B]"
              >
                Контакты
              </Link>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-12 w-full rounded-full bg-[#F8F8F8] pl-5 pr-14 outline-none"
                />

                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute right-4 top-3 h-6 w-6"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;