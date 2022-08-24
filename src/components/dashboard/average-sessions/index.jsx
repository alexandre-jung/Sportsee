export function AverageSessions({ averageSessions }) {
  return (
    <>
      <h2>Durée moyenne des sessions</h2>
      <pre>{JSON.stringify(averageSessions, null, 2)}</pre>
    </>
  );
}
