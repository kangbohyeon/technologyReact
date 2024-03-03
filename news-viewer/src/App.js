import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
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
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
    </>
  );
};
export default App;
