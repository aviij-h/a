import { Paper, Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: SvgIconComponent;
    color: string;
}

export const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => {
    return (
        <Paper 
            elevation={2} 
            sx={{ 
                p: 3, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                height: '100%'
            }}
        >
            <Box sx={{ 
                p: 2, 
                borderRadius: 2, 
                bgcolor: `${color}20`
            }}>
                <Icon sx={{ color, fontSize: 40 }} />
            </Box>
            <Box>
                <Typography color="textSecondary" variant="subtitle2">
                    {title}
                </Typography>
                <Typography variant="h4">
                    {value}
                </Typography>
            </Box>
        </Paper>
    );
};
