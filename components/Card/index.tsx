import React, { FC, ReactNode } from 'react';
import { Card as CardUI, CardActions, CardContent, Box } from '@mui/material';
import clsx from 'clsx';

import styles from './index.module.scss';

interface CardProps {
  children: ReactNode;
  cardActions?: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, cardActions, className }) => (
  <Box className={clsx(className)}>
    <CardUI variant="outlined" classes={{ root: styles.card }}>
      <CardContent classes={{ root: styles.cardContent }}>
        {children}
      </CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </CardUI>
  </Box>
);
