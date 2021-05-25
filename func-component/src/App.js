const { Profile } = require("./Profile");
const { UseEffectTest } = require("./useEffectTest");
const { Users } = require("./TestUseReducer");

function App() {
  return (
    <div className="App">
      <UseEffectTest />
      <Users />
    </div>
  );
}

export default App;
