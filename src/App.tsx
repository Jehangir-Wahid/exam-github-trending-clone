import "./App.css";
import AppRoutes from "./routes";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="color-bg-subtle">
            <Heading />
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;
