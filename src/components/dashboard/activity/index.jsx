export function Activity({ activity }) {
  return (
    <div>
      <small>Activité quotidienne</small>
      <small>
        <pre>{JSON.stringify(activity, null, 2)}</pre>
      </small>
    </div>
  );
}
