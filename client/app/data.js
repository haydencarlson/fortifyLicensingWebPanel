import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { orange600, cyan600, purple600 } from 'material-ui/styles/colors';

const data = {
  menus: [
    { id: 'dashboard', text: 'DashBoard', icon: <FontIcon className="material-icons">assessment</FontIcon>, url: '/', index: 0 },
    { id: 'applications', text: 'My Applications', icon: <FontIcon className="material-icons">picture_in_picture</FontIcon>, url: '/applications', index: 1 },
  ],
  tablePage: {
    items: [
      { id: 1, name: 'Twitter Bot', salary: '$20', department: 'Automation' },
    ],
  },
  dashBoardPage: {
    recentProducts: [
      { id: 1, title: 'More Free Licenses', text: 'We now include up to 50 free licenses' },
      { id: 2, title: 'Java coming soon', text: 'Our Java version of our current .NET platform is in the works' },
      { id: 3, title: 'Stripe Added', text: 'Stripe is now built into our platform to allow easy payment processing for our merchants' },
      { id: 4, title: 'Application Limit', text: 'Unfortunately we have had to reduce the amount of allowed applications per free user. Limit (5)' },
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
