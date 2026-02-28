function StudentProps({ username, number, address, role }) {
  return (
    <>
      <div className="ring-2 ring-red-600 m-5 p-5">
        <h2>{username}</h2>
        <p>phone Number: {number}</p>
        <p>Address: {address}</p>
        <p>Profession: {role}</p>
      </div>
    </>
  );
}

export default StudentProps;
