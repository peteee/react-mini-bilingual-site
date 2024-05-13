import { Routes, Route, Outlet, Link } from "react-router-dom";
// EN
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
// FR
import Header_fr from "./components/Header_fr";
import Main_fr from "./components/Main_fr";

export default function App() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fr" element={<Home_fr />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav id="lang">
        <ul>
          <li>
            <Link to="/">EN</Link>
          </li>
          <li>
            <Link to="/fr">FR</Link>
          </li>
        </ul>
      </nav>


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

function Home_fr() {
  return (
    <>
      <Header_fr />
      <Banner />
      <Main_fr />
      <Footer />
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404</h2>
      <p>
        <Link to="/">Home / Acceuil</Link>
      </p>
    </div>
  );
}