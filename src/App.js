import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Description from "./pages/Description";
import Product from "./pages/Product";
import Offer from "./pages/Offer";
import MoreDetails from "./pages/MoreDetails";
import Images from "./pages/Images";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Description />} />
          <Route path="product" element={<Product/>} />
          <Route path="offer" element={<Offer/>} />
          <Route path="moredetails" element={<MoreDetails/>} />
          <Route path="images" element={<Images/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
