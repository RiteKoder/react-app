export const Weather = ({ temperature }) => {
  return (
    <div>
      {temperature > 25 ? (
        <h1>Its hot outside</h1>
      ) : temperature > 15 ? (
        <h1>Its nice Outside</h1>
      ) : (
        <h1>Its cold Outside</h1>
      )}
    </div>
  );
};
