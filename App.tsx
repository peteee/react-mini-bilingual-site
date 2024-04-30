import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

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
      <nav>
        <ul>
          <li>
            <Link to="/">EN</Link>
          </li>
          <li>
            <Link to="/fr">FR</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>ENGLISH MUSEUM</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis at iusto voluptatem sapiente magnam tempora. Ab temporibus porro aliquid exercitationem, numquam minima eligendi illum commodi ad, quam odit cumque fugit!</p>
    </div>
  );
}

function Home_fr() {
  return (
    <div>
      <h2>MUSEE FRANCAIS</h2>
      <p>Ceci l'information francaise...</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here! (aka 404 Not Found)</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}