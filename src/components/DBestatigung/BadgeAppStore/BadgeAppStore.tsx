import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BadgeAppStore.module.css';
import { BadgeIcon } from './BadgeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 11:80 */
export const BadgeAppStore: FC<Props> = memo(function BadgeAppStore(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.badge}>
        <BadgeIcon className={classes.icon} />
      </div>
    </div>
  );
});
