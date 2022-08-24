export function Score({ scorePercentage }) {
  return (
    <>
      <h2>Score</h2>
      <pre>{JSON.stringify(scorePercentage, null, 2)}%</pre>
    </>
  );
}
