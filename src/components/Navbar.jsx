import React from 'react';
import { Link } from 'react-router-dom';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { AiFillFileAdd } from 'react-icons/ai';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-b-gray-900 p-4">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <BsFileEarmarkCodeFill />
        <h1 className="font-semibold tracking-tight">Dev's</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <>
            <Link to="/products/new" className="text-2xl">
              <AiFillFileAdd />
            </Link>
          </>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
