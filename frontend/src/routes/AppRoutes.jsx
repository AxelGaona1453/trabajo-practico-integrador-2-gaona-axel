import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../Pages/Profile';
import { Register } from '../Pages/Register';
import { Tasks } from '../pages/Task';
import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Navigate to="/login" />} />
				<Route path="/" element={<Navigate to="/login" />} />
			</Route>
			<Route element={<PrivateRoute />}>
				<Route path="/home" element={<Home />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Navigate to="/home" />} />
				<Route path="/" element={<Navigate to="/home" />} />
			</Route>
		</Routes>
	);
};
