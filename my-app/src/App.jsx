// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './App.css';

/* import MyDate from "./components/Date";
import MyState from "./components/MyState";
import MyComponent from "./intro";
import MyClassComponent from "./Class";
import Footer, { Navbar, Hero } from "./components/Navbar"; // named export
// import Footer from "./components/Footer"; // default
import HeroArea from "./components/HeroArea";

import ContactCard from "./components/ReuseComponent";
import StudentInfo from "./components/StudentInfo";
import StudentProps from "./components/StudentProps"; */

import StudentData from './components/StudentData.json';
import StudentProps from './components/StudentProps';
import UniqueID from './components/UniqueID';
import MyEvent from './components/EventHandler';
import OnChange from './components/EventHandler';
import Parent from './components/Parent';
import Login from './components/Login/Login';
import MyList from './components/User/MyList';

function App() {
  // console.log(StudentData);

  return (
    <>
      {/* module 4 start */}

      {/* <Parent /> */}
      {/* <Login /> */}
      <MyList />

      {/* module 4 end */}

      {/* module 3 start */}

      {/* <MyDate /> */}
      {/* <MyState /> */}

      {/* <StudentProps
        username="Kausar Mama"
        number="01778948934"
        address="Dinjapur, Rangpur"
      /> */}

      {/* 7 event */}
      {/* <MyEvent /> */}
      {/* <OnChange /> */}

      {/* 5. video react mapping unique id */}
      {/* <UniqueID /> */}

      {/* 4 video react js connet with json & maping */}

      {/* {StudentData.map((data) => (
        <StudentProps
          username={data.username}
          number={data.number}
          address={data.address}
          role={data.role}
        />
      ))} */}

      {/* <StudentProps
        username={StudentData[0].username}
        number={StudentData[0].number}
        address={StudentData[0].address}
        role={StudentData[0].role}
      /> */}

      {/* module 3 end */}

      {/* 5. all about react props */}

      {/* <ContactCard
        name="kausar"
        des="This is Md Kausar Ali, blogger, writer, programmer."
      />
      <ContactCard
        name="Eshan"
        des="This is Eshan Ahmed Ahad. founder of Hablu programmer"
      />
      <ContactCard
        name="Jhankar"
        des="This is Jhankar Mahmud. founder of Programming Hero"
      />
      <StudentInfo
        userName="Kausar Mama"
        number="01778948934"
        address="Dinjapur, Rangpur"
      />
      <StudentInfo
        userName="Kausar Mama"
        number="01778948934"
        address="Dinjapur, Rangpur"
      /> */}

      {/* 5. all about react props */}

      {/* <MyComponent></MyComponent> */}
      {/* <MyComponent /> */}
      {/* <MyClassComponent /> */}

      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Footer /> */}
      {/* <HeroArea /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
