import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  Receipt as ReceiptIcon,
  People as PeopleIcon,
  LocalShipping as SupplierIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// قائمة العناصر في القائمة الجانبية
const menuItems = [
  { text: 'لوحة التحكم', icon: <DashboardIcon />, path: '/' },
  { text: 'المنتجات', icon: <InventoryIcon />, path: '/products' },
  { text: 'الفواتير', icon: <ReceiptIcon />, path: '/invoices' },
  { text: 'العملاء', icon: <PeopleIcon />, path: '/customers' },
  { text: 'الموردين', icon: <SupplierIcon />, path: '/suppliers' },
  { text: 'الإعدادات', icon: <SettingsIcon />, path: '/settings' }
];

const drawerWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', direction: 'rtl' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          width: `calc(100% - ${drawerWidth}px)`, 
          mr: `${drawerWidth}px`,
          direction: 'rtl'
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            نظام إدارة المستودع
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            direction: 'rtl'
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                onClick={() => navigate(item.path)}
                sx={{ textAlign: 'right' }}
              >
                <ListItemIcon sx={{ minWidth: 40, mr: 0, ml: 2 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
