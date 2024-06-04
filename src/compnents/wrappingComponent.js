const WrappingComponent = ({ children, pagePropsFrom_App }) => {
  console.log("pagePropsFrom_App: ", pagePropsFrom_App);

  if (JSON.stringify(pagePropsFrom_App) === JSON.stringify({})) {
    console.log("pagePropsFrom_App is an empty object");
    return;
  } else {
    console.log("pagePropsFrom_App is not an empty object");
  }
  //   console.log("typeof pagePropsFrom_App: ", pagePropsFrom_App);

  console.log(
    "WrappingComponent.js , pagePropsFrom_App",
    pagePropsFrom_App.secret1
  );

  //   console.log(
  //     "WrappingComponent.js , pagePropsFrom_App",
  //     pagePropsFrom_App.secret1.innerSecret1
  //   );

  return <div>{children}</div>;
};

export default WrappingComponent;
