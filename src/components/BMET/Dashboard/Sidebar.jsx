import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCircle, 
  Stethoscope, 
  GraduationCap,
  FileCheck,
  ShieldCheck,
  Activity,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ activePage }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/bmet/dashboard' },
    { icon: UserCircle, label: 'Profile', path: '/bmet/profile' },
    { icon: Stethoscope, label: 'Medical Test', path: '/bmet/medical' },
    { icon: GraduationCap, label: 'Training', path: '/bmet/training' },
    { icon: FileCheck, label: 'Manpower Approval', path: '/bmet/manpower' },
    { icon: ShieldCheck, label: 'Certificates', path: '/bmet/certificates' },
    { icon: Activity, label: 'Status Tracking', path: '/bmet/status' }
  ];

  return (
    <aside className="bg-white h-screen w-64 shadow-lg flex flex-col border-r border-gray-200">
      <div className="p-6 border-b  border-gray-200">
        <h2 className="text-xl font-semibold  text-gray-800">BMET Portal</h2>
        <p className="text-sm text-gray-500 mt-1">Administration Dashboard</p>
      </div>
      
      <nav className="flex-1 py-4">
        <div className="px-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
            Main Menu
          </p>
        </div>
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`
              flex items-center justify-between px-6 py-3 mx-2 rounded-lg
              transition-all duration-200 ease-in-out
              group
              ${
                activePage === path 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <Icon className={`w-5 h-5 ${
                activePage === path 
                  ? 'text-white' 
                  : 'text-gray-400 group-hover:text-primary'
              }`} />
              <span className="text-sm font-medium">{label}</span>
            </div>
            <ChevronRight className={`w-4 h-4 opacity-0 -translate-x-2
              transition-all duration-200 ease-in-out
              ${activePage === path ? 'opacity-100 translate-x-0 text-white' : ''}
              ${activePage !== path ? 'group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary' : ''}
            `} />
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <UserCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;