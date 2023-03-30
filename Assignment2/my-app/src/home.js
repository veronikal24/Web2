import React from "react";

// Router
import { NavLink } from "react-router-dom";

// Components
import Layout from "../../components/Layout/Layout";

function Home(props) {
  return (
    <Layout title="Homepage">

      <NavLink to="/ss">ss</NavLink>
    
      <NavLink to="/">/</NavLink> 
  
    </Layout>
  );
}

export default Home;
