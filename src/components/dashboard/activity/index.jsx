export function Activity({ activity }) {
  return (
    <>
      <h2>Activité quotidienne</h2>
      <pre>{JSON.stringify(activity, null, 2)}</pre>
    </>
  );
}
