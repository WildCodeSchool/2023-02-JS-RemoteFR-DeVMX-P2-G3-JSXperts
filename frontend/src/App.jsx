/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.scss";
import Game from "@pages/Game";
import Rules from "@pages/Rules";
import Form from "@pages/Form";
import AboutUs from "@pages/AboutUs";
import Footer from "@components/Footer/Footer";
import Layout from "@components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="game"
            element={
              <Layout>
                <Game />
              </Layout>
            }
          />
          <Route
            path="game/:pseudo"
            element={
              <Layout>
                <Game />
              </Layout>
            }
          />
          <Route
            path="rules"
            element={
              <Layout>
                <Rules />
              </Layout>
            }
          />
          <Route
            path="rules/:pseudo"
            element={
              <Layout>
                <Rules />
              </Layout>
            }
          />
          <Route
            path="contact"
            element={
              <Layout>
                <Form />
              </Layout>
            }
          />
          <Route
            path="contact/:pseudo"
            element={
              <Layout>
                <Form />
              </Layout>
            }
          />
          <Route
            path="aboutUs"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="aboutUs/:pseudo"
            element={
              <Layout>
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
