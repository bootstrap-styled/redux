import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'bootstrap-styled-toggle/lib/components/Toggle';
import { createStructuredSelector } from 'reselect';
import { changeTheme as changeThemeAction } from '../../actions';
import { selectValue, selectValues } from '../../selectors';

/**
 * ThemeToggle is used to display a select option to change theme
 * @param value
 * @param values
 * @param onThemeToggle
 * @param className
 * @constructor
 */
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

const mapStateToProps = createStructuredSelector({
  value: selectValue,
  values: selectValues,
});

export const mapDispatchToProps = (dispatch) => ({
  onThemeToggle: (evt) => dispatch(changeThemeAction(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
