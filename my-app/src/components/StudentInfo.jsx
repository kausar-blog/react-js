function StudentInfo(props) {
  return (
    <>
      <div className="ring-2 ring-amber-400 m-5 p-5">
        <h2>{props.userName}</h2>
        <p>phone Number: {props.number}</p>
        <p>Address: {props.address}</p>
      </div>
    </>
  );
}
export default StudentInfo;
