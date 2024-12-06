
import './App.css';
import Hero from './Componets/Hero';
import Register from './Componets/Register';
import Login from './Componets/Login';
import { Route, Routes } from 'react-router-dom';
import AddTender from './Componets/authority/AddTender';
import DashBoard from './Componets/admin/DashBoard';
import AllUsers from './Componets/admin/AllUsers';
import AllTenders from './Componets/admin/AllTenders';
import Tender from './Componets/admin/Tender';
import TenderDetails from './Componets/TenderDetails';
import Tenders from './Componets/Tenders';
import SavedTenders from './Componets/SavedTenders';
import Authorities from './Componets/admin/Authorities';
import AddAuthority from './Componets/admin/AddAuthority';
import Authority from './Componets/admin/Authority';
import AuthorityDashboard from './Componets/authority/AuthorityDashboard';
import MyTenders from './Componets/authority/MyTenders';
import AuthorityLogin from './Componets/authority/AuthorityLogin';
import MyTender from './Componets/authority/MyTender';
import SuspendPage from './Componets/admin/SuspendPage';
import UserProfile from './Componets/admin/UserProfile';
import SuspendedUsers from './Componets/admin/Suspended';
import SuspendAccDetails from './Componets/admin/SuspendAccDetails';
import BidForm from './Componets/BidForm';
import BidsSubmitted from './Componets/BidsSubmitted';
import BidDetails from './Componets/BidDetails';
import ApprovedTenders from './Componets/authority/ApprovedTenders';
import PublishPage from './Componets/authority/PublishPage';
import MyProfile from './Componets/MyProfile';
import Bidders from './Componets/authority/Bidders';
import BiddersTable from './Componets/authority/BiddersTable';
import BidderDetail from './Componets/authority/BidderDetail';
import ContractorsHub from './Componets/authority/ContractorsHub';
import ContractDetails from './Componets/authority/ContractDetails';
import ContractorDashboard from './Componets/ContractorDashboard';
import MyContracts from './Componets/MyContracts';
import AllContracts from './Componets/admin/AllContracts';
import MyProjects from './Componets/MyProjects';
import ProjectDetail from './Componets/ProjectDetail';
import AboutContract from './Componets/admin/AboutContract';


function App() {
  return (
    <div>
      <Routes>
        {/* user */}

        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tender/:tenderId' element={<TenderDetails />} />
        <Route path='/tender/bidding/:tenderId' element={<BidForm />} />
        <Route path='/all-tenders' element={<Tenders />} />
        <Route path='/saved-tenders' element={<SavedTenders />} />
        <Route path='/bids-submitted' element={<BidsSubmitted />} />
        <Route path='/bid-details/:id' element={<BidDetails />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/contract/dashboard/:id' element={<ContractorDashboard />} />
        <Route path='/my-contracts' element={<MyContracts />} />
        <Route path='/my-projects' element={<MyProjects/>} />
        <Route path='/my-project/:id' element={<ProjectDetail/>} />

        {/* admin */}


        <Route path='/admin' element={<DashBoard />} />
        <Route path='/admin/all-users' element={<AllUsers />} />
        <Route path='/admin/all-tenders' element={<AllTenders />} />
        <Route path='/admin/tender/:id' element={<Tender />} />
        <Route path='/admin/authority' element={<Authorities />} />
        <Route path='/admin/add-authority' element={<AddAuthority />} />
        <Route path='/admin/authority/:id' element={<Authority />} />
        <Route path='/admin/suspension/:id' element={<SuspendPage />} />
        <Route path='/admin/user-profile/:id' element={<UserProfile />} />
        <Route path='/admin/suspend-users' element={<SuspendedUsers />} />
        <Route path='/admin/suspend-users/:id' element={<SuspendAccDetails />} />
        <Route path='/admin/all-contracts' element={<AllContracts />} />
        <Route path='/admin/contract/:id' element={<AboutContract/>} />

        {/* authority */}

        <Route path='/authority/login' element={<AuthorityLogin />} />
        <Route path='/authority' element={<AuthorityDashboard />} />
        <Route path='authority/add-tender' element={<AddTender />} />
        <Route path='/authority/my-tenders' element={<MyTenders />} />
        <Route path='/authority/my-tenders/:tenderId' element={<MyTender />} />
        <Route path='/authority/approved-tenders' element={<ApprovedTenders />} />
        <Route path="/authority/publish-page/:tenderId" element={<PublishPage />} />
        <Route path='/authority/bidders' element={<Bidders />} />
        <Route path='/authority/bidders/:tenderId' element={<BiddersTable />} />
        <Route path='/authority/bidder/:bidId' element={<BidderDetail />} />
        <Route path='/authority/contractors' element={<ContractorsHub />} />
        <Route path='/authority/contract-details/:contractId' element={<ContractDetails />} />

      </Routes>
    </div>
  )
}

export default App;
