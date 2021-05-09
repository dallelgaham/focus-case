import BarChartContainer from './containers/BarChartContainer';
import AvgTechImpactChart from './containers/AvgTechImpactChart';
import PatentingTrendChart from './containers/PatentingTrendChart';
function App() {
  return (
    <div className="flex flex-col	items-center">
      <BarChartContainer />
      <AvgTechImpactChart />
      <PatentingTrendChart />

    </div>
  );
}

export default App;
