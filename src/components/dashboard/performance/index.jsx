export function Performance({ performance }) {
  return (
    <>
      <h2>Performaces</h2>
      <pre>{JSON.stringify(performance, null, 2)}</pre>
    </>
  );
}
