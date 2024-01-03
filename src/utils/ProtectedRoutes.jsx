import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const ProtectedRoute = () => {
	let { user } = useAuthContext();

	// const location = useLocation();
	// const role = location.pathname.split('/')[1].slice(0, -1);
	// user.role !== role ? <Navigate to={`${user.role}s/dashboard`} /> : <Outlet />;
	// !user ? <Navigate to="/login" /> : <Outlet />;
	// return;
	return !user ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
