import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { selectTheme } from '../selectors';
export { REDUX_BS_KEY } from '../../constants';
/* eslint-disable-next-line react/prop-types */
const ConnectedBootstrapProvider = ({ theme, ...rest }) => <BootstrapProvider theme={theme.toJS()} {...rest} />;

/** We map the theme from redux */
const mapStateToProps = createStructuredSelector({
  theme: selectTheme,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ConnectedBootstrapProvider);
