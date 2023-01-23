import * as React from 'react';
import  {Line} from 'react-chartjs-2'

const LineChart=()=>{
 
  const data={
   labels:["jan","feb","march","april"],
   dataSets:[
     {
       label:"salce force",
       data:[3, 2, 2, 1, 2]
     }
   ]
  }


return <Line data={data} />
}
export default LineChart