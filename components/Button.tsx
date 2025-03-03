import React, { Children, ComponentProps, forwardRef } from 'react';
import { TamaguiElement } from 'tamagui';

import { Button as TButton } from '../tamagui.config';

type ButtonProps = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
} & ComponentProps<typeof TButton>;

export const Button = forwardRef<TamaguiElement, ButtonProps>(
  ({ title, children, ...tButtonProps }, ref) => {
    return (
      <TButton {...tButtonProps} ref={ref}>
        {title}
        {children}
      </TButton>
    );
  }
);
