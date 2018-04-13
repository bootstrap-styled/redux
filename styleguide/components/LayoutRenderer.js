/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';
import theme from 'bootstrap-styled/lib/theme';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';

import logo from './logo';

const styles = ({
  color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth,
}) => ({
  root: {
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    textAlign: 'right',
  },
});

export function StyleGuideRenderer({
  classes, title, children, toc, hasSidebar,
}) {
  return (
    <BootstrapProvider theme={theme}>
      <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <span>Module provided by</span>
            <a
              href="https://www.yeutech.vn"
              target="_blank"
              alt="Yeutech Company Limited"
              title="Yeutech Company Limited"
            >
              <img
                src={`data:image/png;base64,${logo}`}
                height="55px"
                alt="Yeutech Company Limited logo"
                title="Yeutech Company Limited logo"
              />
            </a>
          </footer>
        </main>
        {hasSidebar && (
          <div className={classes.sidebar}>
            <div className={classes.logo}>
              <img
                src={`data:image/png;base64,${logo}`}
                height="70px"
                alt="Yeutech Company Limited logo"
                title="Yeutech Company Limited logo"
              />
              <Logo>{title}</Logo>
            </div>
            {toc}
          </div>
        )}
      </div>
    </BootstrapProvider>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};

export default Styled(styles)(StyleGuideRenderer);
