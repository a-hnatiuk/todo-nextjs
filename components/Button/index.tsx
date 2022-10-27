import React, { FC, SyntheticEvent, ReactNode } from 'react';
import { Button as ButtonUI } from '@mui/material';
import LinkNext from 'next/link';
import clsx from 'clsx';

import styles from './index.module.scss';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: (e: SyntheticEvent) => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  href,
  variant,
  onClick,
  className,
}) => {
  const ButtonComponent = (
    <ButtonUI onClick={onClick} variant={variant}>
      {children}
    </ButtonUI>
  );

  return href ? (
    <LinkNext className={clsx(styles.linkAsButton, className)} href={href}>
      {ButtonComponent}
    </LinkNext>
  ) : (
    ButtonComponent
  );
};
