import "./App.css";
import DynamicStyle from "./Components/DynamicStyle";
import BuggyComponent from "./Components/Error-Message/BuggyComponent";
import ErrorBoundary from "./Components/Error-Message/ErrorBoundary";
import StyleExample from "./Components/ExampleStyle2";
import MyForm from "./Components/Form/Form";
import MyComponent from "./Components/HigherOrderComponent";
import Parent from "./Components/Memo";
import Example from "./Components/ReactLifeCycle";
import MyRef from "./Components/Ref";
import Table from "./Components/Table";

import ThemeProvider from "./Components/Context/Provider";
import ThemeToggler from "./Components/Context/Consume";

import CountDownTimer from "./Components/UseEffect/useEffect";
import Counter from "./Components/Reducer/Reducer";
import MyCounter from "./Components/Callback/Callback";

import DataFetching from "./Components/EffectUse/MyAPI";

// import MyForm from "./Components/Form/Form";

function App() {
  return (
    <>
      <div>
        {/* m-7 start */}

        {/* <ThemeProvider>
          <ThemeToggler />
        </ThemeProvider> */}

        {/* <CountDownTimer /> */}

        {/* <Counter /> */}

        {/* <MyCounter /> */}

        <DataFetching />

        {/* m-7 end */}
        {/* <Table /> */}
        {/* <DynamicStyle /> */}
        {/* <StyleExample /> */}

        {/* <MyForm /> */}

        {/*  <Example color="yellow" />
        <Parent /> */}
        {/* <MyRef /> */}

        {/* <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary> */}

        {/* <MyComponent /> */}
      </div>
    </>
  );
}

export default App;
