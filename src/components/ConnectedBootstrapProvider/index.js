import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import { selectTheme } from '../../selectors';
const ConnectedBootstrapProvider = (props) => <BootstrapProvider {...props} />;

/** We map the theme from redux */
const mapStateToProps = createStructuredSelector({
  theme: selectTheme,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ConnectedBootstrapProvider);
