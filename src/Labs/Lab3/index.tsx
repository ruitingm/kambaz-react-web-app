import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import IfElse from "./IfElse";
import ImpliedReturns from "./ImpliedReturns";
import LegacyFunctions from "./LegacyFunctions";
import TernaryOperator from "./TernaryOperator";
import VariablesAndconstants from "./VariablesAndconstants";

export default function Lab3() {
  return (
    <div id="wd-lab3" className="ms-3">
      <h3>Lab 3</h3>
      <VariablesAndconstants />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturns />
    </div>
  );
}
