const WrappingComponent = ({ children, pagePropsFrom_App }) => {
  // Add any additional logic or styling here
  console.log("WrappingComponent.js , pagePropsFrom_App", pagePropsFrom_App);
  return <div>{children}</div>;
};

export default WrappingComponent;
