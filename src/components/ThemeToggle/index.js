import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'bootstrap-styled-toggle/lib/components/Toggle';
import { changeTheme as changeThemeAction } from '../../actions';

export const ThemeToggle = ({
  value,
  values,
  onThemeToggle,
  className,
}) => (
  <Toggle value={value} values={values} onToggle={onThemeToggle} className={className} />
);

ThemeToggle.defaultProps = {
  className: null,
};

ThemeToggle.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  value: state['bs.redux'].theme._name, // eslint-disable-line no-underscore-dangle
  values: Object.keys(state['bs.redux'].themes).map((key) => state['bs.redux'].themes[key]._name), // eslint-disable-line no-underscore-dangle
});

export const mapDispatchToProps = (dispatch) => ({
  onThemeToggle: (evt) => dispatch(changeThemeAction(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
