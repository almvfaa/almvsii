import type { LucideIcon } from 'lucide-react';
import {
  UserCog,
  Gavel,
  Handshake,
  Warehouse,
  Utensils,
  LayoutDashboard,
  Users,
  FileText,
  Package,
  History,
  ClipboardList,
  Bell,
  Home,
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type Role = 'admin' | 'dietology' | 'warehouse' | 'legal' | 'supplier';

export const NAV_LINKS: Record<Role, NavLink[]> = {
  admin: [
    { href: '/admin', label: 'Overview', icon: LayoutDashboard },
    { href: '/admin/users', label: 'User Management', icon: Users },
    { href: '/admin/contracts', label: 'All Contracts', icon: FileText },
    { href: '/admin/inventory', label: 'Full Inventory', icon: Warehouse },
  ],
  dietology: [
    { href: '/dietology', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dietology/menus', label: 'Menu Planner', icon: Utensils },
    { href: '/dietology/schedules', label: 'Schedules', icon: ClipboardList },
  ],
  warehouse: [
    { href: '/warehouse', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/warehouse/inventory', label: 'Inventory Control', icon: Package },
    { href: '/warehouse/history', label: 'Movement History', icon: History },
    { href: '/warehouse/returns', label: 'Returns', icon: Gavel },
  ],
  legal: [
    { href: '/legal', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/legal/contracts', label: 'Contract Mgmt', icon: FileText },
    { href: '/legal/breaches', label: 'Breaches', icon: Bell },
  ],
  supplier: [
    { href: '/supplier', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/supplier/contracts', label: 'Awarded Products', icon: FileText },
    { href: '/supplier/returns', label: 'Return Notices', icon: Bell },
  ],
};

export const ROLE_ICONS: Record<Role, LucideIcon> = {
  admin: UserCog,
  dietology: Utensils,
  warehouse: Warehouse,
  legal: Gavel,
  supplier: Handshake,
};
