import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container mx-auto px-4">
      <nav className="py-2 flex justify-between">
        <h2 className="mx-2 font-semibold">
          <Link to="/">
            Item Record System
          </Link>
        </h2>
        <ul className="flex">
          <li className="mx-2">
            <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? 'text-gray-500' : ''}`}>
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/add" className={({ isActive }) => `hover:underline ${isActive ? 'text-gray-500' : ''}`}>
              Add
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <main className="py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;