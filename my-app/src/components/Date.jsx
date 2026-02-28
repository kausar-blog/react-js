function MyDate() {
  const Time = new Date();
  return (
    <>
      <div>
        <h3>Local date & time</h3>
        <p>{Time.getFullYear()}</p>
        <p>{Time.getMonth()}</p>
        <p>{Time.getHours()}</p>
        <p>{Time.getMinutes()}</p>
        <p>{Time.getSeconds()}</p>
        <p>{Time.toLocaleString()}</p>
      </div>
    </>
  );
}

export default MyDate;
