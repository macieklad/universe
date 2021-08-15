import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

type PolymorphicStack = Polymorphic.ForwardRefComponent<'div', {
  spacer: React.FC
}>;

export const Stack: PolymorphicStack = React.forwardRef(
  ({ as: Comp = 'div', children, spacer: Spacer, ...props }, forwardedRef) => {
    const childrenCount = React.Children.count(children)
    const contents = []

    for (let i = 0; i < childrenCount - 1; i++) {
      contents.push(children[i], <Spacer />)
    }
    contents.push(children[childrenCount - 1])


    return <Comp {...props} ref={forwardedRef}>{contents}</Comp>
  }
)