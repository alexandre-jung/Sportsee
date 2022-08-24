export function AverageSessions({ averageSessions }) {
  return (
    <>
      <small>Durée moyenne des sessions</small>
      <pre>{JSON.stringify(averageSessions, null, 2)}</pre>
    </>
  );
}
