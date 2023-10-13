import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectCounterDemo from "./components/demos/UseEffectCounterDemo";
import UseStateDemo from "./components/demos/UseStateDemo";
import UseEffectFetchDemo from "./components/demos/useEffectFetchDemo/UseEffectFetchDemo";
import Layout from "./layout/Layout";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Home from "./pages/Home";

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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
