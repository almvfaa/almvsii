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
    { href: '/admin', label: 'Resumen', icon: LayoutDashboard },
    { href: '/admin/users', label: 'Gestión de Usuarios', icon: Users },
    { href: '/admin/contracts', label: 'Todos los Contratos', icon: FileText },
    { href: '/admin/inventory', label: 'Inventario Completo', icon: Warehouse },
  ],
  dietology: [
    { href: '/dietology', label: 'Panel', icon: LayoutDashboard },
    { href: '/dietology/menus', label: 'Planificador de Menús', icon: Utensils },
    { href: '/dietology/schedules', label: 'Horarios', icon: ClipboardList },
  ],
  warehouse: [
    { href: '/warehouse', label: 'Panel', icon: LayoutDashboard },
    { href: '/warehouse/inventory', label: 'Control de Inventario', icon: Package },
    { href: '/warehouse/history', label: 'Historial de Movimientos', icon: History },
    { href: '/warehouse/returns', label: 'Devoluciones', icon: Gavel },
  ],
  legal: [
    { href: '/legal', label: 'Panel', icon: LayoutDashboard },
    { href: '/legal/contracts', label: 'Gestión de Contratos', icon: FileText },
    { href: '/legal/breaches', label: 'Incumplimientos', icon: Bell },
  ],
  supplier: [
    { href: '/supplier', label: 'Panel', icon: LayoutDashboard },
    { href: '/supplier/contracts', label: 'Productos Adjudicados', icon: FileText },
    { href: '/supplier/returns', label: 'Avisos de Devolución', icon: Bell },
  ],
};

export const ROLE_ICONS: Record<Role, LucideIcon> = {
  admin: UserCog,
  dietology: Utensils,
  warehouse: Warehouse,
  legal: Gavel,
  supplier: Handshake,
};

export const ROLE_NAMES: Record<Role, string> = {
  admin: 'Admin',
  dietology: 'Dietología',
  warehouse: 'Almacén',
  legal: 'Legal',
  supplier: 'Proveedor',
};
