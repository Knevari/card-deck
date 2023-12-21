export interface CardProps {
  top: number;
  left: number;
  rotation: number;
  suit: string;
  value: number | string;
  color: string;
}

export function Card({ top, left, rotation, suit, value, color }: CardProps) {
  return (
    <>
      {/* Position Helper */}
      <div
        style={{
          position: "fixed",
          background: "red",
          padding: 20,
          top: top,
          left: left,
          opacity: 0,
          rotate: `${rotation}rad`,
        }}
      />
      <div
        className="card"
        style={{
          top,
          left,
          rotate: `${rotation}rad`,
          transformOrigin: "center",
          opacity: 1,
          color,
        }}
      >
        <text className="upper-value">
          {value}
          <span>{suit}</span>
        </text>
        <text className="card-suit">{suit}</text>
        <text className="lower-value">
          <span>{suit}</span>
          {value}
        </text>
      </div>
    </>
  );
}
