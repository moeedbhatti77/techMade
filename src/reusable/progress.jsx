export default function ({ value }) {
  const segmentProgress = [
    value > 0.25 ? 1 : value / 0.25,
    value < 0.25 ? 0 : value > 0.5 ? 1 : (value - 0.25) / 0.25,
    value < 0.5 ? 0 : value > 0.75 ? 1 : (value - 0.5) / 0.25,
    value < 0.75 ? 0 : value >= 1 ? 1 : (value - 0.75) / 0.25,
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
      }}
    >
      {segmentProgress.map((v, i) => (
        <progress
          style={{
            width: "30px",
          }}
          key={i}
          value={v}
        />
      ))}
    </div>
  );
}
