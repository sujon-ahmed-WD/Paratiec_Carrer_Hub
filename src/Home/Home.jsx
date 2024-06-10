import Banner from "../Banner/Banner";
import Cata from "../Banner/Cataegory/Cata";
import Featured from "../Banner/Cataegory/Featured/Featured";
  
 
const Home = () => {
    return (
          <div>
               <Banner></Banner>
                <Cata></Cata>
                <Featured></Featured>
          </div>
    );
};

export default Home;