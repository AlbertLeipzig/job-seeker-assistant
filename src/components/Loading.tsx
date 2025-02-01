import { useState } from "react";
export const Loading = () => {
  const [points, setPoints] = useState(0);
  setTimeout(() => {
    if (points === 3) {
      setPoints(0);
    } else {
      setPoints(points + 1);
    }
  }, 1000);
  return (
    <p className="loading">
      Loading
      {JSON.parse(
        JSON.stringify(Array.from({ length: points }).map(() => "."))
      )}
    </p>
  );
};
