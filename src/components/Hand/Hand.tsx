import { useControls } from "leva";
import { Vec2, deg2rad } from "../../utils";
import { PlayingCard } from "../../utils/cards";
import { Card } from "../Card/Card";

export interface HandProps {
  cards: PlayingCard[];
}

// TODO: FIX THE CARDS POSITIONING
export function Hand({ cards }: HandProps) {
  const { radius, spread } = useControls("Hand", {
    radius: {
      value: 200,
      min: 0,
      max: 400,
    },
    spread: {
      value: 120,
      min: 0,
      max: 360,
    },
  });
  const origin = new Vec2(window.innerWidth / 2, window.innerHeight / 2);
  const offset = spread / cards.length;

  return (
    <div className="hand">
      {/* Center Helper */}
      <div
        style={{
          position: "fixed",
          padding: 10,
          background: "red",
          top: `${origin.y}px`,
          left: `${origin.x}px`,
          opacity: 1,
          borderRadius: 100,
        }}
      />
      {cards.map((card, index) => {
        // We sum offset / 2 to the final result to level the cards
        const angle = deg2rad(
          (index - cards.length / 2) * offset + 270 + offset / 2
        );
        const sy = Math.sin(angle) * radius;
        const sx = Math.cos(angle) * radius;
        const top = origin.y + sy;
        const left = origin.x + sx;
        const rotation = Math.atan2(sy, sx) + Math.PI / 2;

        return (
          <Card
            top={top}
            left={left}
            rotation={rotation}
            suit={card.suit}
            value={card.value}
            color={card.color}
            key={`${card.suit}-${card.value}`}
          />
        );
      })}
    </div>
  );
}
