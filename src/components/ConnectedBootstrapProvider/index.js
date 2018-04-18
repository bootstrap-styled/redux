import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';

const ConnectedBootstrapProvider = (props) => <BootstrapProvider {...props} />;

const mapStateToProps = (state) => ({
  name: console.log(state),
  theme: state['bs.redux'].theme,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ConnectedBootstrapProvider);
