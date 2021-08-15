import { styled } from "linaria/react";
import { theme } from "../../definitions";

const makeSheet = () =>
  Object.entries(theme.space).reduce((result, [key, value]) => {
    result +=
      `
      &[data-size='${key}'] {
        padding-bottom: ${value};
        padding-right: ${value};
      }
    `;
    return result;
  }, '');

const Primitive: React.FC<{
  size: number | string;
  className?: string;
  style?: object;
}> = ({ size, ...rest }) => <div data-size={size} {...rest} />;

export const Space = styled(Primitive)`
  ${makeSheet()}
`;
