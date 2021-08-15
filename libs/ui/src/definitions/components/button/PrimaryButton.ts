import { theme } from "../..";

export const stylesheet = `
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  &[data-pressed="true"] {
    filter: brightness(80%);
  }
  `