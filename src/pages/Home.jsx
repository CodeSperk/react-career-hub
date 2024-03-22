import Category from "../components/Category";
import Featured from "../components/Featured";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <Banner></Banner>

      <Category></Category>

      <Featured></Featured>
    </main>
  );
};

export default Home;