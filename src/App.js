import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseEffectHookExample from "./components/UseEffectHookExample";
import UseStateHookExample from "./components/UseStateHookExample";
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
          <Route path="useState" element={<UseStateHookExample />} />
          <Route path="useEffect" element={<UseEffectHookExample />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <UseStateHookExample />
  );
}

export default App;
