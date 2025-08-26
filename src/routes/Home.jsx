import Header from "../components/header";
import ProfileCards from "../components/PeopleSection";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header title={"My Profile Page"} />
      <main className="home-main">
        <ProfileCards />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
