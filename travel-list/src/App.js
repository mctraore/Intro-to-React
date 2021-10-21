import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const locations = [
    {
      name: "Berlin",
      image:
        "https://images.unsplash.com/photo-1551354515-519f5506542c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80",
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1573790387438-4da905039392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
    },
    {
      name: "Seoul",
      image:
        "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
    },
  ];
  return (
    <div>
      <Header />
      <div className="container">
        {locations.map((location) => (
          <div>
            <h2>{location.name}</h2>
            <img src={location.image}></img>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
