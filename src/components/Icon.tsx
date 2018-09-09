import * as React from 'react';
import * as cx from 'classnames';

import * as styles from './Icon.css';

interface Props {
  icon: string;
  color: string;
}

const Icon = ({ icon, color }: Props) => {
  const iconStyles = {
    fill: color
  };
  const iconClasses = cx({
    [styles.container]: true
  });

  return (
    <div className={iconClasses} style={iconStyles}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
    </div>
  );
};

export default Icon;
