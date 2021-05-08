import './App.css';
import BarChartContainer from './containers/BarChartContainer';
import AvgTechImpactChart from './containers/AvgTechImpactChart';
import PatentingTrendChart from './containers/PatentingTrendChart';
import PatentsStatuses from './containers/PatentsStatuses';
function App() {
  return (
    <div className="App">
      <PatentingTrendChart />
      <AvgTechImpactChart />
      <BarChartContainer />
    </div>
  );
}

export default App;
