export function QueryPlaceholder({
  children,
  isLoading,
  isError,
  error,
}) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return children;
}
