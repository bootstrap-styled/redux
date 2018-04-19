import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'bootstrap-styled-toggle/lib/components/Toggle';
import { createStructuredSelector } from 'reselect';
import { changeTheme as changeThemeAction } from '../../actions';
import { selectValue, selectValues } from '../../selectors';

/**
 * ThemeToggle is used to display a select option to change theme
 * @constructor
 */
export const ThemeToggle = (props) => <Toggle {...props} />;


const mapStateToProps = createStructuredSelector({
  value: selectValue,
  values: selectValues,
});

export const mapDispatchToProps = (dispatch) => ({
  onToggle: (evt) => dispatch(changeThemeAction(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
