import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { theme } from "../../definitions";
import { styled } from "linaria/lib/react";
import { stylesheet } from "../../definitions/components/text/Text";

export type PolymorphicText = Polymorphic.ForwardRefComponent<
  "p",
  {
    size?: keyof typeof theme.fontSize;
  }
>;

const Primitive: PolymorphicText = React.forwardRef(
  ({ as: Comp = "p", children, size, ...props }, forwardedRef) => (
    <Comp ref={forwardedRef} {...(size && { "data-size": size })} {...props}>
      {children}
    </Comp>
  )
);

const makeSizeStyles = () =>
  Object.entries(theme.fontSize).reduce((result, [key, value]) => {
    result += `
      &[data-size='${key}'] {
        font-size: ${value};
      }
    `;
    return result;
  }, "");

const Styled = styled(Primitive)`
  ${stylesheet}
  ${makeSizeStyles()}
`;

export const Text = Styled;
