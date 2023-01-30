// import React from 'react';
// import {Bar} from 'react-chartjs-2';
// // import data from './data.json'
// export default function BarGraph(){
//   const { values }= data.data[0].audienceData.ageGroupData[0]
// console.log(values)
//   const state = {
//     labels:values.map(item => item.label),
//     datasets: [
//       {
//         label: 'count',
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 0,
//         barPercentage:0.5,
//         data: values.map(d => d.value),
//       }
//     ]
//   }
  
//     return (
//       <div>
//         <Bar
//         // height={200}
//         // width ={200}
//           data={state}
//           options = {{
//             plugins:{
//               title:{
//                 display:true,
//                 text:"Age Group"
//               },
//               legend:{
//                 display:true,
//                 position:"bottom"
//               },
//             },
//             legend:{
//               display:false
//             },
//             scales:{
//               x:{
//                 grid:{
//                   display:false
//                 }
//               },
//               y:{
//                 grid:{
//                   display:false
//                 }
//               }
//             }
//           }}

//         />
//       </div>
//     )
// }