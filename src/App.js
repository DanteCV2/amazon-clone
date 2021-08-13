import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, db } from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setcartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tmpItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setcartItems(tmpItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user')
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("User", user);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header user={user} cartItems={cartItems} signOut={signOut} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
