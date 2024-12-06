import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import IntroducePage from "./components/BodyComponents/IntroducePage/IntroducePage";
import CarouselPage from "./components/BodyComponents/CarouselPage/CarouselPage";
import CardsPage from "./components/BodyComponents/CardsPage/CardsPage";
import HistoryPage from "./components/BodyComponents/HistoryPage/HistoryPage";
import NewsPage from "./components/BodyComponents/NewsPage/NewsPage";
import FollowUsPage from "./components/BodyComponents/FollowUsPage/FollowUsPage";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./components/BodyComponents/CatalogPage/CatalogPage";
import CustomPortfolio from "./components/BodyComponents/CustomPortfolio/CustomPortfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={ 
              <>
                <IntroducePage />
                <CarouselPage />
                <CardsPage />
                <HistoryPage />
                <NewsPage />
                <FollowUsPage />
              </>
            }
          />
          <Route path="/collection" element={<CatalogPage />} />
          <Route path="/custom-portfolio" element={<CustomPortfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
