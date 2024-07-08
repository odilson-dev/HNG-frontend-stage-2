import Footer from "./components/Footer";
import Header from "./components/Header";
function App(props) {
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      {props.children}

      <Footer />
    </div>
  );
}

export default App;
