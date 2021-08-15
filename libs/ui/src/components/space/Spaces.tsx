import { theme } from "../../definitions";
import { Space } from "./Space";

type SpaceMap = Record<keyof typeof theme.space, React.FC>;

export const Spaces: SpaceMap = Object.entries(theme.space).reduce(
  (result, [key, _]) => {
    result[key] = () => <Space size={key} />;
    return result;
  },
  {} as SpaceMap
);
