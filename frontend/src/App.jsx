/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import "./App.scss";
import Game from "@pages/Game";
import Rules from "@pages/Rules";
import Form from "@pages/Form";
import AboutUs from "@pages/AboutUs";
import Footer from "@components/Footer/Footer";
import Layout from "@components/Layout";

function App() {
  const [registeredPseudo, setRregisteredPseudo] = useState("");
  const [wins, setWins] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Home
                  setWins={setWins}
                  setRregisteredPseudo={setRregisteredPseudo}
                />
              </Layout>
            }
          />
          <Route
            path="game"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Game
                  registeredPseudo={registeredPseudo}
                  wins={wins}
                  setWins={setWins}
                />
              </Layout>
            }
          />
          <Route
            path="game/:pseudo"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Game
                  registeredPseudo={registeredPseudo}
                  wins={wins}
                  setWins={setWins}
                />
              </Layout>
            }
          />
          <Route
            path="rules"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Rules />
              </Layout>
            }
          />
          <Route
            path="rules/:pseudo"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Rules />
              </Layout>
            }
          />
          <Route
            path="contact"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Form />
              </Layout>
            }
          />
          <Route
            path="contact/:pseudo"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <Form />
              </Layout>
            }
          />
          <Route
            path="aboutUs"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="aboutUs/:pseudo"
            element={
              <Layout registeredPseudo={registeredPseudo} wins={wins}>
                <AboutUs />
              </Layout>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
