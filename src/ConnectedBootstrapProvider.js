import { compose } from 'redux';
import { connect } from 'react-redux';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';

const mapStateToProps = (state) => ({
  themes: state['bs.redux'].themes[state['bs.redux'].current],
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(BootstrapProvider);
