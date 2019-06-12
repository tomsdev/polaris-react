import React from 'react';
import styles from '../../List.scss';

export interface ItemProps {
  /** Content to display inside the item */
  children?: React.ReactNode;
}

/** @uxpinnamespace List */
export function Item({children}: ItemProps) {
  return <li className={styles.Item}>{children}</li>;
}
