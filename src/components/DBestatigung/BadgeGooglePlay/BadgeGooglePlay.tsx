import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BadgeGooglePlay.module.css';
import { BadgeIcon } from './BadgeIcon.js';

interface Props {
  className?: string;
  swap?: {
    badge?: ReactNode;
  };
}
/* @figmaId 11:86 */
export const BadgeGooglePlay: FC<Props> = memo(function BadgeGooglePlay(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.badge}>{props.swap?.badge || <BadgeIcon className={classes.icon} />}</div>
    </div>
  );
});
