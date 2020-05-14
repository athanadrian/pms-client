import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSideBar';
import PageLoading from '../../components/page-loading/PageLoading';

const Main = ({ children }) => {
  // const { onUserLoad } = props;
  const [appLoading, setAppLoading] = useState(false);

  // useEffect(() => {
  //   setAppLoading(true);
  //   axios
  //     .get('/users/profile')
  //     .then((response) => {
  //       console.log('uEf', response);
  //       setAppLoading(false);
  //       onUserLoad({ ...response.data });
  //     })
  //     .catch(() => {
  //       setAppLoading(false);
  //     });

  //   return () => {};
  // }, [onUserLoad]);

  let template;

  if (appLoading) {
    template = <PageLoading />;
  } else {
    template = (
      <>
        <Header />

        <MenuSidebar />
        <div className="content-wrapper">
          <div className="pt-3" />
          <section className="content">{children}</section>
        </div>
        <Footer />
      </>
    );
  }

  return <div className="wrapper">{template}</div>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

// const mapStateToProps = (state) => ({
//   user: state.auth.currentUser
// });

export default Main;
