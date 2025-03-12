import { userSelector, useDispatch, useSelector } from "react-redux";
export default function ReduxExamples() {
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <div id="wd-hello-redux">
      <h2>Redux Examples</h2>
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
      <hr />
    </div>
  );
}
