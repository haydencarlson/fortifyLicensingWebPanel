import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { orange600, cyan600, purple600 } from 'material-ui/styles/colors';

const data = {
  menus: [
    { id: 'dashboard', text: 'DashBoard', icon: <FontIcon className="material-icons">assessment</FontIcon>, url: '/', index: 0 },
  ],
  tablePage: {
    items: [
      { id: 1, name: 'Employee 1', salary: '$5000.00', department: 'Department 1' },
      { id: 2, name: 'Employee 2', salary: '$3500.00', department: 'Department 2' },
      { id: 3, name: 'Employee 3', salary: '$5000.00', department: 'Department 3' },
      { id: 4, name: 'Employee 4', salary: '$7000.00', department: 'Department 4' },
      { id: 5, name: 'Employee 5', salary: '$4500.00', department: 'Department 5' },
      { id: 6, name: 'Employee 6', salary: '$9500.00', department: 'Department 6' },
      { id: 7, name: 'Employee 7', salary: '$5500.00', department: 'Department 7' },
      { id: 8, name: 'Employee 8', salary: '$7500.00', department: 'Department 8' },
    ],
  },
  dashBoardPage: {
    recentProducts: [
      { id: 1, title: 'Samsung Galaxy S7', text: 'Samsung Galaxy S7 G930F 32GB Factory Unlocked GSM Smartphone International Version (Gold)' },
      { id: 2, title: 'Sony Xperia XZ', text: 'Sony Xperia XZ - Unlocked Smartphone - 32GB - Platinum (US Warranty)' },
      { id: 3, title: 'ACER R240HY 23.8-Inch', text: 'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor' },
      { id: 4, title: 'Dell 15.6-Inch Gaming Laptop', text: 'Dell 15.6-Inch Gaming Laptop (6th Gen Intel Quad-Core i5-6300HQ Processor up to 3.2GHz, 8GB DDR3, 256GB SSD, Nvidia GeForce GTX 960M, Windows 10)' },
    ],
    monthlySales: [
      { name: 'Jan', uv: 1800 },
      { name: 'Feb', uv: 2000 },
      { name: 'Mar', uv: 2780 },
      { name: 'Apr', uv: 2000 },
      { name: 'May', uv: 3000 },
      { name: 'Jun', uv: 3700 },
    ],
    newOrders: [
      { name: 'Jan', 'New Orders': 3908 },
      { name: 'Feb', 'New Orders': 3490 },
      { name: 'Mar', 'New Orders': 4800 },
      { name: 'Apr', 'New Orders': 2400 },
      { name: 'May', 'New Orders': 4500 },
      { name: 'Jun', 'New Orders': 7890 },
    ],
    browserUsage: [
      { name: 'Chrome', value: 1200, color: orange600, icon: <FontIcon className="material-icons">chevron_right</FontIcon> },
      { name: 'Firefox', value: 700, color: purple600, icon: <FontIcon className="material-icons">chevron_right</FontIcon> },
      { name: 'Safari', value: 150, color: cyan600, icon: <FontIcon className="material-icons">chevron_right</FontIcon> },
    ],
  },
};

export default data;
