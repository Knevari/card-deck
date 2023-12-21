import { useMemo } from "react";
import { useControls } from "leva";
import { Hand } from "../Hand";
import { PlayingCard } from "../../utils/cards";

export function App() {
  const deck = useMemo(() => PlayingCard.deck(), []);

  const { amount } = useControls("Cards", {
    amount: {
      value: 7,
      min: 0,
      max: 52,
    },
  });

  return (
    <div className="tabletop">
      <Hand cards={deck.slice(0, amount + 1)} />
    </div>
  );
}

export default App;
