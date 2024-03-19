import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_StyleDefault.module.css';

interface Props {
  className?: string;
  text?: {
    badgeText?: ReactNode;
  };
}
/* @figmaId 11:74 */
export const Badge_StyleDefault: FC<Props> = memo(function Badge_StyleDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.badgeText != null ? props.text?.badgeText : <div className={classes.badgeText}>Badge Text</div>}
    </div>
  );
});
