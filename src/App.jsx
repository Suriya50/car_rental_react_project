import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";  // ✅ Correct path
import Routing from "./routees/Routtings";

const App = () => {
  const location = useLocation();

  // Pages where footer should NOT appear
  const noFooterPages = ['/login', '/register', '/profile'];
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