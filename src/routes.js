import React from "react";

const Skills = React.lazy(() => import("./pages/skills"));
const Animations = React.lazy(() => import("./pages/animations"));

const routes = [
  { path: "/", exact: true, name: "Skills" },
  { path: "/skills", name: "Skills", element: Skills },
  { path: "/animations", name: "Animations", element: Animations },
];

export default routes;
