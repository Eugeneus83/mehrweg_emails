import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LogoMark } from '../LogoMark/LogoMark';
import classes from './MehrwegBox.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    box_allein1?: string;
  };
}
/* @figmaId 11:67 */
export const MehrwegBox: FC<Props> = memo(function MehrwegBox(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.box_allein1 || ''} ${classes.box_allein1}`}></div>
      <LogoMark
        className={classes.logoMark}
        classes={{ vector: classes.vector }}
        swap={{
          vector: (
            <div className={classes.vector}>
              <VectorIcon className={classes.icon} />
            </div>
          ),
        }}
      />
    </div>
  );
});
