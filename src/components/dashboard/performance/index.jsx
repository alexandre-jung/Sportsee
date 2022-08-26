export function Performance({ performance }) {
  return (
    <>
      <small>Performances</small>
      <small>
        <pre>{JSON.stringify(performance, null, 2)}</pre>
      </small>
    </>
  );
}
