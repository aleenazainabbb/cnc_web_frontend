'use client';

import React from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { name: 'Clients', icon: UserGroupIcon, path: '/clients' },
  { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
  { name: 'Services', icon: TableCellsIcon, path: '/services' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>


            







    </div>
    // <div className="h-screen w-20 bg-white border-r border-gray-200 shadow-sm flex flex-col">
    //   {/* Logo/Header */}
    //   <div className="px-6 py-4 text-xl font-bold text-blue-600 border-b border-gray-100">
    //     Caren Cleans CRM
    //   </div>

    //   {/* Navigation */}
    //   <nav className="flex-1 px-4 py-6 space-y-2">
    //     {menuItems.map(({ name, icon: Icon, path }) => {
    //       const isActive = pathname === path;

    //       return (
    //         <Link
    //           key={name}
    //           href={path}
    //           className={`flex items-center px-3 py-2 rounded-md transition ${
    //             isActive
    //               ? 'bg-blue-100 text-blue-700 font-semibold'
    //               : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
    //           }`}
    //         >
    //           <Icon className="h-5 w-5 mr-3" />
    //           <span>{name}</span>
    //         </Link>
    //       );
    //     })}
    //   </nav>

    //   {/* Footer/User Section */}
    //   <div className="px-4 py-4 border-t border-gray-100">
    //     <div className="flex items-center space-x-3">
    //       <img
    //         src="https://i.pravatar.cc/40"
    //         alt="User"
    //         className="h-10 w-10 rounded-full"
    //       />
    //       <div>
    //         <p className="text-sm font-medium text-gray-800">John Doe</p>
    //         <p className="text-xs text-gray-500">Admin</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
