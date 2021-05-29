
import Banner from './Components/Banner';
import Description from './Components/Description';
import InfoCard from './Components/InfoCard';
import TnC from './Components/TnC';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Banner/>
        <Description/>
        <InfoCard/>
        <TnC/>
      </Layout>
    </div>
  );
}

export default App;
