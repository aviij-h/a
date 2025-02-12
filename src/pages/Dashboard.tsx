import { Grid, Paper, Typography, Box } from '@mui/material';
import { 
    Inventory, 
    Receipt, 
    Person, 
    AttachMoney 
} from '@mui/icons-material';
import { StatCard } from '../components/Dashboard/StatCard';

export default function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* عنوان لوحة التحكم */}
            <Typography variant="h4" sx={{ mb: 3 }} gutterBottom>
                لوحة التحكم
            </Typography>

            {/* بطاقات الإحصائيات */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="إجمالي المبيعات"
                        value="0 ر.س"
                        icon={AttachMoney}
                        color="#2196f3"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="الفواتير"
                        value="0"
                        icon={Receipt}
                        color="#f44336"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="المنتجات"
                        value="0"
                        icon={Inventory}
                        color="#4caf50"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="العملاء"
                        value="0"
                        icon={Person}
                        color="#ff9800"
                    />
                </Grid>
            </Grid>

            {/* تقرير المبيعات */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            تقرير المبيعات
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                            <Typography color="text.secondary">
                                لا توجد بيانات للعرض حالياً
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
