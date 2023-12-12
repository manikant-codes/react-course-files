import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectCounterDemo from "./components/demos/UseEffectCounterDemo";
import UseStateDemo from "./components/demos/UseStateDemo";
import MemoDemo from "./components/demos/memoDemo/MemoDemo";
import UseCallbackDemo from "./components/demos/useCallbackDemo/UseCallbackDemo";
import UseEffectFetchDemo from "./components/demos/useEffectFetchDemo/UseEffectFetchDemo";
import UseMemoDemo from "./components/demos/useMemoDemo/UseMemoDemo";
import UseRefDomDemo from "./components/demos/useRefDemo/UseRefDomDemo";
import UseRefDomDemoTwo from "./components/demos/useRefDemo/UseRefDomDemoTwo";
import UseRefPersistanceDemo from "./components/demos/useRefDemo/UseRefPersistanceDemo";
import Layout from "./layout/Layout";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AgeCalculator from "./components/demos/AgeCalculator";
import Home from "./pages/Home";
import UseContextDemo from "./components/demos/useContext/UseContextDemo";
import UseReducerCounterDemo from "./components/demos/useReducer/UseReducerCounterDemo";
import UseReducerToDoDemo from "./components/demos/useReducer/UseReducerToDoDemo";
import Welcome from "./components/demos/classComponents/ClassComponent";
import ClassComponent from "./components/demos/classComponents/ClassComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ageCalculator" element={<AgeCalculator />} />
          <Route path="useState" element={<UseStateDemo />} />
          <Route path="useEffectCounter" element={<UseEffectCounterDemo />} />
          <Route path="useEffectFetch" element={<UseEffectFetchDemo />} />
          <Route path="useRefPersistance" element={<UseRefPersistanceDemo />} />
          <Route path="useRefDom" element={<UseRefDomDemo />} />
          <Route path="useRefDomTwo" element={<UseRefDomDemoTwo />} />
          <Route path="useCallback" element={<UseCallbackDemo />} />
          <Route path="useMemo" element={<UseMemoDemo />} />
          <Route path="useContext" element={<UseContextDemo />} />
          <Route path="useReducerCounter" element={<UseReducerCounterDemo />} />
          <Route path="useReducerToDo" element={<UseReducerToDoDemo />} />
          <Route
            path="classcomponents"
            element={<ClassComponent name="Zabuza" />}
          />
          <Route path="memo" element={<MemoDemo />} />
          <Route path="welcome" element={<Welcome name="Manikant" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
