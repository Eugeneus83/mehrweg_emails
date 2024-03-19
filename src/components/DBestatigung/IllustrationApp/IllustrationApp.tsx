import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IllustrationApp.module.css';

interface Props {
  className?: string;
  classes?: {
    illustrationApp?: string;
  };
}
/* @figmaId 11:102 */
export const IllustrationApp: FC<Props> = memo(function IllustrationApp(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.illustrationApp || ''} ${classes.illustrationApp}`}></div>
    </div>
  );
});
