export function NutritionalInformations({
  calorie,
  protein,
  carbohydrate,
  lipid,
}) {
  return (
    <>
      <h2>Informations nutritrionnelles</h2>
      <pre>
        {JSON.stringify({ calorie, protein, carbohydrate, lipid }, null, 2)}
      </pre>
    </>
  );
}
