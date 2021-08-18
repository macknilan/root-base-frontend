/*
  PAGE TO SHOW THE BLOG STRUCTURE
*/
import React from 'react';
import Layout from '@components/Layout';
import AppContext from '@context/userContext';

const BlogPage = (user) => (
  <>
    <AppContext.Provider value={user.location.state}>
      <Layout />
    </AppContext.Provider>
  </>
);

export default BlogPage;
