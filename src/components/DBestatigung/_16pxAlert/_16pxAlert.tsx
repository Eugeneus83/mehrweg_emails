import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_16pxAlert.module.css';
import { _16pxAlertIcon } from './_16pxAlertIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 11:78 */
export const _16pxAlert: FC<Props> = memo(function _16pxAlert(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <_16pxAlertIcon className={classes.icon2} />}</div>
    </div>
  );
});
