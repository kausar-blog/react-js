function Greetings({ IsLogin }) {
  /* if (IsLogin) {
    return <h1>Welcome Back Kausar</h1>;
  } else {
    return <h1>Please Login First</h1>;
  } */
  return (
    <>
      {IsLogin ? (
        <h1 className="text-3xl font-bold text-green-500">
          Welcome Back Kausar
        </h1>
      ) : (
        <h1 className="text-3xl font-bold text-red-500">Please Login First</h1>
      )}
    </>
  );
  // condition ? expressionIfTrue : expressionIfFalse;
}

export default Greetings;
