// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashBoardlayout from './Dashboard/Components/DashBoard_layout';
import Chat from './Dashboard/Pages/Chat';
import ChatBoat_codeGenerate from './Dashboard/Pages/ChatBoat_codeGenerate';
import ChatBotScreen from './Dashboard/Pages/ChatBotScreen';
import ChatBotScreen2 from './Dashboard/Pages/ChatBotScreen_2';
import CompanyProfile from './Dashboard/Pages/Company_Profile';
import Dashboard from './Dashboard/Pages/Dashboard';
import EmployeePage from './Dashboard/Pages/EmployeePage';
import ModalCreate from './Dashboard/Pages/Modal_Create';
import Notifications from './Dashboard/Pages/Notification';
import Payment from './Dashboard/Pages/Payment';
import Setting from './Dashboard/Pages/Setting';
import ContactUs from './Screens/ContactUs/ContactUs';
import Home from './Screens/HomePage/Home';
import UserLayoutScreen from './Screens/Layout';
import Login from './Screens/LoginPage/login';
import Services from './Screens/Services/Services';
import WhyChooseUs from './Screens/Why Us/Whyus';
import Aboutus from './Screens/aboutus/aboutus';
import Signup from './Screens/signup/signup';


const App = () => {
  return (
    <Router>
      <div className='main-wrapper'>
        <Routes>
          <Route path="/" element={<UserLayoutScreen />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Why choose us' element={<WhyChooseUs />} />
            <Route path='/Contact' element={<ContactUs />} />


          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/dashboard" element={<DashBoardlayout />} >
            <Route path='/dashboard/' element={<Dashboard />} />
            <Route path='/dashboard/Profile' element={<CompanyProfile />} />
            <Route path='/dashboard/Modal' element={<ModalCreate />} />
            <Route path='/dashboard/EmloyeeSettings' element={<EmployeePage />} />
            <Route path='/dashboard/Payment' element={<Payment />} />
            <Route path='/dashboard/Chat' element={<Chat />} />
            <Route path='/dashboard/ChatBot' element={<ChatBotScreen />}>
              <Route path='/dashboard/ChatBot/chat' element={<ChatBotScreen2 />} />
              <Route path='/dashboard/ChatBot/chat/CodeGenerate' element={<ChatBoat_codeGenerate />} />


            </Route>
            <Route path='/dashboard/Setting' element={<Setting />} />
            <Route path='/dashboard/Notifications' element={<Notifications />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

