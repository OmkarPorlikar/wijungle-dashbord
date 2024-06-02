import React from 'react';
import FrequencyChart from './components/FrequencyChart';
import CategoryChart from './components/CategoryChart';
import ProtocolChart from './components/ProtocolChart';
import { frequencyData , categoryData , protocolData , eventType} from './data.js'
import EventTypeChart from './components/EventTypeChart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ChartsShowcase from './components/ChartAbout/ChartShowCase.jsx';
const App = () => {
  return (
    <>         <Navbar/>
    <ChartsShowcase/>
    <div className='main-container'>
      <FrequencyChart data={frequencyData} />
 <hr/>
      <CategoryChart data={categoryData} />
      <hr/>

      <ProtocolChart data={protocolData} />
      <hr/>

       <EventTypeChart data={eventType} />

    </div>
    </>

  );
}

export default App;
