export function Header({ firstName }) {
  return (
    <>
      <h1 style={{ margin: "0" }}>
        <span>Bonjour</span>, <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
}
