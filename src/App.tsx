import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        This is a piece of text
      </Button>
    </div>
  );
}

export default App;
