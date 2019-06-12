import React from 'react';

import styles from '../../Card.scss';

export interface SubsectionProps {
  children?: React.ReactNode;
}

/** @uxpinnamespace Card */
export function Subsection({children}: SubsectionProps) {
  return <div className={styles.Subsection}>{children}</div>;
}
