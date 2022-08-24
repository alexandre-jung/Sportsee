export function Score({ scorePercentage }) {
  return (
    <>
      <small>Score</small>
      <pre>{JSON.stringify(scorePercentage, null, 2)}%</pre>
    </>
  );
}
