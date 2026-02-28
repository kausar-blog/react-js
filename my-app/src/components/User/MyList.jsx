function MyList() {
  const User = [
    {
      id: 1,
      name: 'Kausar',
      prof: 'Programmer',
    },
    {
      id: 2,
      name: 'Alamin',
      prof: 'Engineer',
    },
    {
      id: 3,
      name: 'Hakim',
      prof: 'Businessman',
    },
  ];

  return (
    <>
      <div className="ring-2 ring-red-500 p-5 m-5">
        {User.map(MyUsers => (
          <li key={MyUsers.id} className="border border-red-500 p-5 m-5">
            {MyUsers.name}, {MyUsers.prof}, {MyUsers.id}
          </li>
        ))}
      </div>
    </>
  );
}

export default MyList;
