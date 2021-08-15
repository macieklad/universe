import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { Text } from './Text';
import { theme } from '../../definitions';

const headingSizeToThemeSize: Record<string, keyof typeof theme.fontSize>  = {
  'sm': 'sm',
  'md': 'lg',
  'lg': 'lg'
}

export type PolymorphicHeading = Polymorphic.ForwardRefComponent<'h1', {
  size?: keyof typeof headingSizeToThemeSize
}>;

export const Heading: PolymorphicHeading = React.forwardRef(
  ({ as = 'h1', size, children, ...props }, forwardedRef) => {
    return <Text as={as} size={headingSizeToThemeSize[size]} {...props} ref={forwardedRef}>{children}</Text>
  } 
)