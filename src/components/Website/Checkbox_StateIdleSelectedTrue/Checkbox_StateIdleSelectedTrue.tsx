import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkbox_StateIdleSelectedTrue.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 55:6 */
export const Checkbox_StateIdleSelectedTrue: FC<Props> = memo(function Checkbox_StateIdleSelectedTrue(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>􀆅</div>}
    </div>
  );
});
