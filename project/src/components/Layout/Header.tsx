import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';
import AuthModal from '../Auth/AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'signup';
    userType: 'attendee' | 'partner';
  }>({
    isOpen: false,
    mode: 'login',
    userType: 'attendee'
  });
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Partners', href: '/partners' },
    { name: 'Book Demo', href: '/book-demo' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const openAuthModal = (mode: 'login' | 'signup', userType: 'attendee' | 'partner') => {
    setAuthModal({ isOpen: true, mode, userType });
  };

  const closeAuthModal = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
                  <img
                    src="https://i.imgur.com/jiLK2km.png"
                    alt="AdoptTech Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => openAuthModal('login', 'attendee')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('signup', 'attendee')}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm"
              >
                Sign Up
              </button>
              <button
                onClick={() => openAuthModal('signup', 'partner')}
                className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 border border-green-600 rounded-lg transition-colors duration-200"
              >
                Partner Signup
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openAuthModal('login', 'attendee');
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openAuthModal('signup', 'attendee');
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openAuthModal('signup', 'partner');
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-green-600 hover:text-green-700 border border-green-600 rounded-lg transition-colors duration-200"
                >
                  Partner Signup
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        userType={authModal.userType}
        additionalFields={{
          attendeeSignUp: authModal.mode === 'signup' && authModal.userType === 'attendee',
        }}
      />
    </>
  );
};

export default Header;


