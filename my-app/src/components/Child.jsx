function Child(props) {
  return (
    <>
      <button onClick={props.MyFun} className="ring-2 bg-amber-700 m-3 ">
        Click Me
      </button>
    </>
  );
}

export default Child;
