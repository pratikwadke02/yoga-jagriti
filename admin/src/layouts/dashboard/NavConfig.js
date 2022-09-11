// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'student',
    path: '/dashboard/student',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Responses',
    path: '/dashboard/response',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Enquiries',
    path: '/dashboard/enquiry',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Add Product',
    path: '/dashboard/product',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Invoice',
    path: '/dashboard/invoice',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
