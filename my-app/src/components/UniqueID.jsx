function UniqueID() {
  const userList = [
    {
      id: 1,
      name: "Kausar",
      prof: "programmer",
      age: 20,
      EnrolledCourse: [
        {
          courseID: 100,
          name: "JFWD",
          price: 5000,
          module: 120,
        },
        {
          courseID: 300,
          name: "AI course",
          price: 4000,
          module: 150,
        },
        {
          courseID: 250,
          name: "MERN",
          price: 8000,
          module: 200,
        },
      ],
    },
    {
      id: 2,
      name: "Alamin",
      prof: "Engineer",
      age: 21,
      EnrolledCourse: [
        {
          courseID: 250,
          name: "MERN",
          price: 8000,
          module: 200,
        },
      ],
    },
    {
      id: 3,
      name: "Hakim",
      prof: "businessman",
      age: 24,
      EnrolledCourse: [
        {
          courseID: 100,
          name: "JFWD",
          price: 5000,
          module: 120,
        },
        {
          courseID: 250,
          name: "MERN",
          price: 8000,
          module: 200,
        },
      ],
    },
  ];

  return (
    <>
      <div className="ring-2 ring-red-600 m-5 p-5">
        <h2>List Of user:</h2>
        {/*  <div>
          {userList.map((person) => (
            <ul key={person.id}>
              <li>{person.id}</li>
              <li>{person.name}</li>
              <li>{person.age}</li>
              <li>{person.prof}</li>
            </ul>
          ))}
        </div> */}
        <div>
          {userList.map((userInfo) => (
            <ul key={userInfo.id} className="border border-blue-700 p-5 m-2">
              <br />
              <p>{userInfo.id}</p>
              <p>{userInfo.name}</p>
              <p>{userInfo.age}</p>
              <p>{userInfo.prof}</p>
              <h3>Enrolled Courses List: </h3>
              <ul key={userInfo.id} className="border border-green-700 p-5 ">
                {userInfo.EnrolledCourse.map((courses) => (
                  <li key={courses.courseID}>
                    <span>course Name: {courses.name}, </span>
                    <span>course module: {courses.module}, </span>
                    <span>course price: {courses.price}, </span>
                    <span>course ID: {courses.courseID}</span>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default UniqueID;
