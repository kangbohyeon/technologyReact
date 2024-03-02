import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

// const App = () => {
//   const [data, setDate] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4612e34d458f4964850d8219108e6b4a',
//       );
//       setDate(response.data);
//       console.log(JSON.stringify(response.data));
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };

const App = () => {
  return <NewsList />;
};
export default App;
