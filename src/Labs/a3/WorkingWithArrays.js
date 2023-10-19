import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import Forloops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";




function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
  
    let variableArray1 = [
      functionScoped,
      blockScoped,
      constant1,
      numberArray1,
      stringArray1,
    ];
  
    return (
      <div>
        <h4>Working with Arrays</h4>
        {/* functionScoped = {functionScoped}
        <br />
        blockScoped = {blockScoped}
        <br />
        constant1 = {constant1}
        <br /> */}
        numberArray1 = {numberArray1}
        <br />
        stringArray1 = {stringArray1}
        <br />
        variableArray1 = {variableArray1}
        <br />
        <ArrayIndexAndLength/>
        <br />
        <AddingAndRemovingDataToFromArrays/>
        <br />
        <Forloops/>

        <br />
        <MapFunction/>

        <br />
        <JsonStringify/>

        <br />
        <FindFunction/>

        <br />
        <FindIndex/>

        <br />
        <FilterFunction/>

        <br />
        <TemplateLiterals/>

        <br />
      </div>
    );
  }
  
  export default WorkingWithArrays;




