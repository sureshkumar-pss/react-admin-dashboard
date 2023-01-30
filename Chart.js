import React, { Component } from 'react';
import LineChart from 'echarts-for-react';
class App extends Component {
  render() {
    return (
      <LineChart
        option={{
          xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [50,100,150,200],
              type: 'line'
            }
          ]
        }}
      />
    );
  }
}
export default App;
