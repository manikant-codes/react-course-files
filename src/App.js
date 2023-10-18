import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectCounterDemo from "./components/demos/UseEffectCounterDemo";
import UseStateDemo from "./components/demos/UseStateDemo";
import UseEffectFetchDemo from "./components/demos/useEffectFetchDemo/UseEffectFetchDemo";
import Layout from "./layout/Layout";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./components/demos/Form";
import Home from "./pages/Home";
import UseRefPersistanceDemo from "./components/demos/useRefDemo/UseRefPersistanceDemo";
import UseRefDomDemo from "./components/demos/useRefDemo/UseRefDomDemo";
import UseRefDomDemoTwo from "./components/demos/useRefDemo/UseRefDomDemoTwo";
import UseCallbackDemo from "./components/demos/useCallbackDemo/UseCallbackDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form" element={<Form />} />
          <Route path="useState" element={<UseStateDemo />} />
          <Route path="useEffectCounter" element={<UseEffectCounterDemo />} />
          <Route path="useEffectFetch" element={<UseEffectFetchDemo />} />
          <Route path="useRefPersistance" element={<UseRefPersistanceDemo />} />
          <Route path="useRefDom" element={<UseRefDomDemo />} />
          <Route path="useRefDomTwo" element={<UseRefDomDemoTwo />} />
          <Route path="useCallback" element={<UseCallbackDemo />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
