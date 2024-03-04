import {
    DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Chat from '../Pages/Chat';
import ChatBotScreen from '../Pages/ChatBotScreen';
import CompanyProfile from '../Pages/Company_Profile';
import Dashboard from '../Pages/Dashboard';
import EmployeePage from '../Pages/EmployeePage';
import ModalCreate from '../Pages/Modal_Create';
import Notifications from '../Pages/Notification';
import Payment from '../Pages/Payment';
import Setting from '../Pages/Setting';
import '../Styles/chat.css';
import '../Styles/dash_board.css';
import '../Styles/employeePage.css';
import '../Styles/modalCreate.css';
import '../Styles/payment.css';
import DashboardHeader from './Dashboard_Header';
import ChatBotScreen2 from '../Pages/ChatBotScreen_2';
import ChatBoat_codeGenerate from '../Pages/ChatBoat_codeGenerate';

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Company Profile', '2', <DesktopOutlined />),
    getItem('Model Create Page', '3', <UserOutlined />),
    getItem('Employee Page', '4', <TeamOutlined />),
    getItem('Payment', '5', <FileOutlined />),
    getItem('Chat', '6', <PieChartOutlined />),
    getItem('Chatbot', '7', <DesktopOutlined />),
    getItem('Settings', '8', <UserOutlined />),
    getItem('Notification', '9', <TeamOutlined />),
    getItem('Logout', '10', <FileOutlined />),
];

const DashBoardlayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getSelectedMenuItem = () => {
        const paths = {
            '/dashboard/': '1',
            '/dashboard/Profile': '2',
            '/dashboard/Modal': '3',
            '/dashboard/EmloyeeSettings': '4',
            '/dashboard/Payment': '5',
            '/dashboard/Chat': '6',
            '/dashboard/ChatBot': '7',
            '/dashboard/Setting': '8',
            '/dashboard/Notifications': '9',
            '/': '10',
        };

        const currentPath = location.pathname;

        for (const key in paths) {
            if (currentPath.match(key)) {
                return paths[key];
            }
        }
        return '1';
    };

    // Set initial state with a default value
    const [selectedMenuItem, setSelectedMenuItem] = useState('1');

    // Update the state based on the current path when the component mounts
    useEffect(() => {
        const initialMenuItem = getSelectedMenuItem();
        setSelectedMenuItem(initialMenuItem);
    }, []); // Run only once when the component mounts
    useEffect(() => {

        handleMenuClick(selectedMenuItem);
    }, []); // Run only once when the component mounts

    const handleMenuClick = (key) => {
        setSelectedMenuItem(key);
        const paths = {
            '1': '/dashboard/',
            '2': '/dashboard/Profile',
            '3': '/dashboard/Modal',
            '4': '/dashboard/EmloyeeSettings',
            '5': '/dashboard/Payment',
            '6': '/dashboard/Chat',
            '7': '/dashboard/ChatBot',
            '8': '/dashboard/Setting',
            '9': '/dashboard/Notifications',
            '10': '/',
        };
        navigate(paths[key]);
    };


    const [collapsed, setCollapsed] = useState(false);

    const { token: { transparent }, } = theme.useToken();

    const getMenuHeading = () => {
        const selectedItem = items.find(item => item.key === selectedMenuItem);
        return selectedItem ? selectedItem.label : '';
    };

    return (
        <div className='dashbord-bg'>
            <Layout style={{ minHeight: '100vh' }} className='bg-transparent'>

                <Header className='bg-transparent p-0'><DashboardHeader /></Header>
                <Layout>
                    <Sider className='bg-transparent dash-slider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <Menu style={{ marginTop: '35px' }} className='bg-transparent' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => handleMenuClick(key)} />
                    </Sider>
                    <Content style={{ margin: '16xp 16px', padding: '35px', color: 'white', background: transparent }}>
                        <div className='Layout_wrapper'>
                            <div className='Layout_heading'>
                                <h1>{getMenuHeading()}</h1>
                            </div>

                            <div className='p-2 p-md-4'>
                                {selectedMenuItem === '1' && (
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '2' && (
                                    <Routes>
                                        <Route path="/Profile" element={<CompanyProfile />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '3' && (
                                    <Routes>
                                        <Route path="/Modal" element={<ModalCreate />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '4' && (
                                    <Routes>
                                        <Route path="/EmloyeeSettings" element={<EmployeePage />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '5' && (
                                    <Routes>
                                        <Route path="/Payment" element={<Payment />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '6' && (
                                    <Routes>
                                        <Route path="/Chat" element={<Chat />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '7' && (
                                    <Routes>
                                        <Route path="/ChatBot" element={<ChatBotScreen />} />
                                        <Route path='/ChatBot/chat' element={<ChatBotScreen2 />} />
                                        <Route path='/ChatBot/chat/CodeGenerate' element={<ChatBoat_codeGenerate />} />
                                    </Routes>
                                )}

                                {selectedMenuItem === '8' && (
                                    <Routes>
                                        <Route path="/Setting" element={<Setting />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '9' && (
                                    <Routes>
                                        <Route path="/Notifications" element={<Notifications />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '10' && <Navigate to="/" />}
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DashBoardlayout;

