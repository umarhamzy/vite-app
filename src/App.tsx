import Alert from "./components/Alert";

console.log("Hello world!");
function App() {
  return (
    <div>
      <Alert>
        Hello <span className="text-success">world!</span>
      </Alert>
    </div>
  );
}

export default App;
