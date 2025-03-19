import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PastOrderPage from "./pages/PastOrderPage";
import ProfilePage from "./pages/ProfilePage";
import CustomerRatingPage from "./pages/CustomerRatingPage";
import OrdersPage from "./pages/OrdersPage";
import MenuPage from "./pages/MenuPage";
import RestroEarningPage from "./pages/RestroEarningPage";
import UserPage from "./pages/UserPage";
import RestroVendorPage from "./pages/RestroVendorPage";
import DeliveryAgentPage from "./pages/DeliveryAgentPage";
import AdminDiscountPage from "./pages/AdminDiscountsPage";
import RestroDiscountPage from "./pages/RestroDiscountPage";
import CoupounCodePage from "./pages/CoupounCodePage";
import CODPage from "./pages/CODPage";
import CommissionPage from "./pages/CommissionPage";
import VendorNotificationPage from "./pages/VendorNotificationPage";
import CustomerNotificationPage from "./pages/CustomerNotificationPage";
import DeliveryPartnerNotificationPage from "./pages/DeliveryPartnerNotificationPage";
import MonthWiseReportPage from "./pages/MonthWiseReportPage";
import WeekWiseReportPage from "./pages/WeekWiseReportPage";
import AreaWiseReportPage from './pages/AreaWiseReportPage';
import VendorWiseReportPage from './pages/VendorWiseReportPage';
import DeliveryAgentReportPage  from './pages/DeliveryAgentReportPage';
import CustomerWiseReportPage from './pages/CustomerWiseReportPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/past-orders" element={<PastOrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/customer-rating" element={<CustomerRatingPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/restro-earnings" element={<RestroEarningPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/restro-vendor" element={<RestroVendorPage />} />
          <Route path="/delivery-agents" element={<DeliveryAgentPage />} />
          <Route path="/admin-discount" element={<AdminDiscountPage />} />
          <Route path="/restro-discount" element={<RestroDiscountPage />} />
          <Route path="/coupon-code" element={<CoupounCodePage />} />
          <Route path="/commission" element={<CommissionPage />} />
          <Route path="/cod" element={<CODPage />} />
          <Route path="/vendor-notification" element={<VendorNotificationPage />} />
          <Route path="/delivery-agent-notification" element={<DeliveryPartnerNotificationPage />} />
          <Route path="/customer-notification" element={<CustomerNotificationPage />} />
          <Route path="/monthly-report" element={<MonthWiseReportPage />} />
          <Route path="/week-report" element={<WeekWiseReportPage />} />
          <Route path="/vendor-report" element={<VendorWiseReportPage />} />
          <Route path="/delivery-agent-report" element={<DeliveryAgentReportPage />} />
          <Route path="/customer-report" element={<CustomerWiseReportPage/>} />
          <Route path="/area-report" element={<AreaWiseReportPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
