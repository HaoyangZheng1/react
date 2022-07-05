// assets
import { HomeOutlined, FileTextOutlined, BankOutlined, AreaChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    HomeOutlined,
    FileTextOutlined,
    BankOutlined,
    AreaChartOutlined
};

// ==============================|| MENU ITEMS - HOME ||============================== //

const menuList = {
    id: 'group-menu',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/dashboard/home',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'type-failure',
            title: 'Type failure',
            type: 'item',
            url: '/dashboard/type-failure',
            icon: icons.AreaChartOutlined,
            breadcrumbs: false
        },
        {
            id: 'batch-operation',
            title: 'Batch operation',
            type: 'item',
            url: '/dashboard/batch-operation',
            icon: icons.BankOutlined,
            breadcrumbs: false
        },
        {
            id: 'user-log',
            title: 'User log',
            type: 'item',
            url: '/dashboard/user-log',
            icon: icons.FileTextOutlined,
            breadcrumbs: false
        }
    ]
};

export default menuList;
