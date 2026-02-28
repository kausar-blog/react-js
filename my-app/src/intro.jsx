import { Fragment } from "react";

function MyComponent() {
  let x = "welcome";
  let name = "Md Kausar Ali";
  return (
    // <Fragment>
    <>
      {/* <h1 className="text-4xl ">Hello junior programmers! welcome back</h1> */}
      {/* <h1 className="text-3xl">
        Hi how are you {x} and {50 + 50}
      </h1> */}

      <div>
        <div>
          <div>{`Hello Kausar Mama ${x} to ${name}. To  ${50 + 40} this `}</div>
          <div>
            Hello mama ki obstha {x} to {name}
          </div>
        </div>
      </div>
    </>
    // </Fragment>
  );
}

export default MyComponent;
