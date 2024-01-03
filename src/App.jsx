import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Home from "./Pages/Home";
import GetStarted from "./Pages/GetStarted";
import AffiliatesResourses from "./Pages/AffiliatesResourses";
import VendorsResourses from "./Pages/VendorsResourses";
import Login from './Components/Authentication/Login';
import VendorSignup from "./Components/Authentication/VendorSignup";
import BuyersLogin from "./Components/Authentication/BuyersLogin";
import BuyersSignup from "./Components/Authentication/BuyersSignup";

import AffiliateDashboard from './Pages/Dashboards/AffiliateDashboard';
import AffiliateMarketPlace from "./Pages/Dashboards/AffiliateDashboard/Components/AffiliateMarketPlace";
import AffiliateLeaderboard from "./Pages/Dashboards/AffiliateDashboard/Components/Leaderboard";
import AffiliatePerformance from "./Pages/Dashboards/AffiliateDashboard/Components/Performance";
import AffiliateTransactions from "./Pages/Dashboards/AffiliateDashboard/Components/Transactions";
import AffiliateSettings from "./Pages/Dashboards/AffiliateDashboard/Components/Settings";
import AffiliateProfile from "./Pages/Dashboards/AffiliateDashboard/Components/Profile";

import BuyerDashboard from './Pages/Dashboards/BuyerDashboard';
import BuyerProfile from './Pages/Dashboards/BuyerDashboard/Components/Profile';

import VendorDashboard from './Pages/Dashboards/VendorDashboard';
import VendorProductCatalogue from './Pages/Dashboards/VendorDashboard/Components/ProductCatalogue';
import VendorPerformance from './Pages/Dashboards/VendorDashboard/Components/Performance';
import VendorLeaderboard from './Pages/Dashboards/VendorDashboard/Components/Leaderboard';
import VendorTransactions from "./Pages/Dashboards/VendorDashboard/Components/Transactions";
import VendorSettings from "./Pages/Dashboards/VendorDashboard/Components/Settings";
import VendorProfile from "./Pages/Dashboards/VendorDashboard/Components/Profile";
import Chat from "./Pages/Dashboards/AffiliateDashboard/Components/Chat";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Protected Routes */}
				<Route element={<ProtectedRoute />}>
					{/* Affiliates */}
					<Route path="/affiliates/dashboard" element={<AffiliateDashboard />}></Route>
					<Route path="/affiliates/marketplace" element={<AffiliateMarketPlace />}></Route>
					<Route path="/affiliates/marketplace/:category" element={<AffiliateMarketPlace />}></Route>
					<Route path="/affiliates/leaderboard" element={<AffiliateLeaderboard />}></Route>
					<Route path="/affiliates/performance" element={<AffiliatePerformance />}></Route>
					<Route path="/affiliates/transactions" element={<AffiliateTransactions />}></Route>
					<Route path="/affiliates/settings" element={<AffiliateSettings />}></Route>
					<Route path="/affiliates/profile" element={<AffiliateProfile />}></Route>
					<Route path="/affiliates/chats" element={<Chat />}></Route>

					{/* Buyers */}
					<Route path="/buyers/dashboard" element={<BuyerDashboard />}></Route>
					<Route path="/buyers/profile" element={<BuyerProfile />}></Route>

					{/* Vendors */}
					<Route path="/vendors/dashboard" element={<VendorDashboard />}></Route>
					<Route path="/vendors/product-catalogue" element={<VendorProductCatalogue />}></Route>
					<Route path="/vendors/performance" element={<VendorPerformance />}></Route>
					<Route path="/vendors/leaderboard" element={<VendorLeaderboard />}></Route>
					<Route path="/vendors/transactions" element={<VendorTransactions />}></Route>
					<Route path="/vendors/settings" element={<VendorSettings />}></Route>
					<Route path="/vendors/profile" element={<VendorProfile />}></Route>
				</Route>


				{/* Landing page */}
				<Route path="/" element={<Home />}></Route>
				<Route path="/get-started" element={<GetStarted />}></Route>
				<Route path="/affiliate-resourses" element={<AffiliatesResourses />}></Route>
				<Route path="/vendor-resourses" element={<VendorsResourses />}></Route>

				{/* Auth pages */}
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<VendorSignup />}></Route>
				<Route path="/vendor/signup/:type" element={<VendorSignup />}></Route>
				<Route path="/buyers/login" element={<BuyersLogin />}></Route>
				<Route path="/buyers/signup" element={<BuyersSignup />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
