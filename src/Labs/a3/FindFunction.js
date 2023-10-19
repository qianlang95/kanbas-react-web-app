function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];
  
    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");
  
    // const fourIndex = numberArray1.findIndex((a) => a === 4);
    // const string3Index = stringArray1.findIndex((a) => a === "string3");
  
    // const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    // const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    // const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  
    return (
      <div>
        <h4>FindFunction</h4>
        four = {four}

        <br/>

        string3 = {string3}


      </div>
    );
  }
  
  export default FindFunction;