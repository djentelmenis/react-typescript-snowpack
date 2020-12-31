import React from "./web_modules/react.js";
const App = (props) => {
  const {name} = props;
  console.log("Render");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Hello ", name, "!"));
};
export default App;
//# sourceMappingURL=App.js.map
