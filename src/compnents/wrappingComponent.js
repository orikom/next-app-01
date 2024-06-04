const WrappingComponent = ({ children, pagePropsFrom_App }) => {
  // this is working because no dot operator
  //   console.log("WrappingComponent.js , pagePropsFrom_App", pagePropsFrom_App);
  console.log(
    "WrappingComponent.js , pagePropsFrom_App",
    pagePropsFrom_App.secret1.innerSecret1
  );
  return <div>{children}</div>;
};

export default WrappingComponent;
