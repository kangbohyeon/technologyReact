import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  //   const category = match.params.category || 'all';
  const category = useParams().category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
