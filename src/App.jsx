import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Routing from "./routes/Routing";

const App = () => {
  const location = useLocation();

  // Add all pages where footer should NOT appear
  const noFooterPages = ['/login', '/register', '/profile']; // 👈 Added profile
  const showFooter = !noFooterPages.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routing />
      {showFooter && <Footer />}
    </>
  );
};

export default App;