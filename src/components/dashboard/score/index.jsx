export function Score({ scorePercentage }) {
  return (
    <>
      <small>Score</small>
      <small>
        <pre>{JSON.stringify(scorePercentage, null, 2)}%</pre>
      </small>
    </>
  );
}
