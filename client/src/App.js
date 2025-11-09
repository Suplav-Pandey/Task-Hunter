import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

import FreelancerDashboard from "./components/HelperComponents/FreelancerDashboard";
import FreelancerServices from "./components/HelperComponents/FreelancerServices";
import FreelancerCreateService from "./components/HelperComponents/FreelancerCreateService";
import FreelancerManageServices from "./components/HelperComponents/FreelancerManageServices";
import FreelancerUpdateService from "./components/HelperComponents/FreelancerUpdateService";
import ServiceDetails from "./components/ServiceDetails";

import ClientDashboard from "./components/ClientComponents/ClientDashboard";
import ClientFreelancers from "./components/ClientComponents/ClientFreelancers";
import ClientOrders from "./components/ClientComponents/ClientOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/helper/:id">
            <Route index element={<FreelancerDashboard />} />
            <Route path="/dashboard/helper/:id/jobs">
              <Route index element={<FreelancerServices />} />
              <Route
                path="/dashboard/helper/:id/jobs/create"
                element={<FreelancerCreateService />}
              />
              <Route
                path="/dashboard/helper/:id/jobs/manage"
                element={<FreelancerManageServices />}
              />
              <Route
                path="/dashboard/helper/:id/jobs/update/:serviceId"
                element={<FreelancerUpdateService />}
              />
              <Route
                path="/dashboard/helper/:id/jobs/show/:serviceId"
                element={<ServiceDetails type="1" />}
              />
            </Route>
            <Route
              path="/dashboard/helper/:id/chat"
              element={<Chat type="helper" />}
            />
            <Route
              path="/dashboard/helper/:id/profile"
              element={<Profile type="1" />}
            />
          </Route>
          <Route path="/dashboard/freelancer/:id">
            <Route index element={<FreelancerDashboard />} />
            <Route path="/dashboard/freelancer/:id/services">
              <Route index element={<FreelancerServices />} />
              <Route
                path="/dashboard/freelancer/:id/services/create"
                element={<FreelancerCreateService />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/manage"
                element={<FreelancerManageServices />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/update/:serviceId"
                element={<FreelancerUpdateService />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/show/:serviceId"
                element={<ServiceDetails type="1" />}
              />
            </Route>
            <Route
              path="/dashboard/freelancer/:id/chat"
              element={<Chat type="helper" />}
            />
            <Route
              path="/dashboard/freelancer/:id/profile"
              element={<Profile type="1" />}
            />
          </Route>
          <Route path="/dashboard/client/:id">
            <Route index element={<ClientDashboard />} />
            <Route
              path="/dashboard/client/:id/helpers"
              element={<ClientFreelancers />}
            />
            <Route
              path="/dashboard/client/:id/helpers/show/:serviceId"
              element={<ServiceDetails type="2" />}
            />
            <Route
              path="/dashboard/client/:id/orders"
              element={<ClientOrders />}
            />
            <Route
              path="/dashboard/client/:id/order/show/:serviceId"
              element={<ServiceDetails type="3" />}
            />
            <Route
              path="/dashboard/client/:id/chat"
              element={<Chat type="2" />}
            />
            <Route
              path="/dashboard/client/:id/profile"
              element={<Profile type="2" />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
