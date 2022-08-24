export function Activity({ activity }) {
  return (
    <>
      <small>Activité quotidienne</small>
      <pre>{JSON.stringify(activity, null, 2)}</pre>
    </>
  );
}
