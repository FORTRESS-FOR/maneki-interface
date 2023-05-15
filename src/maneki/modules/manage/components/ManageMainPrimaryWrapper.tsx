import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ManageMainPrimaryWrapperProps {
  borderBottom?: boolean;
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

export default function ManageMainPrimaryWrapper({
  borderBottom,
  leftComponent,
  rightComponent,
}: ManageMainPrimaryWrapperProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'column',
        borderBottom: borderBottom ? '1px solid rgb(236, 236, 236)' : '',
        pb: '12px',
      }}
    >
      <Box sx={{ width: '50%', padding: '8px 12px' }}>{leftComponent}</Box>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
        }}
      >
        {rightComponent}
      </Box>
    </Box>
  );
}