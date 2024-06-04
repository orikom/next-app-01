const WrappingComponent = ({ children, pagePropsFrom_App }) => {
  //   console.log("pagePropsFrom_App: ", pagePropsFrom_App);
  //   if (!pagePropsFrom_App || pagePropsFrom_App == {})
  console.log("typeof pagePropsFrom_App: ", typeof pagePropsFrom_App);
  //   if (false) {
  //     console.log(
  //       "WrappingComponent.js , pagePropsFrom_App",
  //       pagePropsFrom_App.secret1.innerSecret1
  //     );
  //   }

  return <div>{children}</div>;
};

export default WrappingComponent;
