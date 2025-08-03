// planetComponent.ts
import Castim from "./Castim";
import Kaito from "./Kaito";

const planetComponents: Record<
  string,
  Record<string, React.ComponentType>
> = {
  esteria: {
    castim: Castim,
    kaito: Kaito,
  },
  // Add other planets similarly
};

export default planetComponents;