import React from 'react';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../components/Avatar';

import igniteCapa from '../assets/ignite-capa.png';

import styles from './SideBar.module.css';


export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={igniteCapa} />

      <div className={styles.profile}>

        <Avatar hasBorder={true} src="https://github.com/WGS-94.png" />

        <strong>Wilson Dos Santos</strong>
        <span>Web & Mobile Developer | NAFAU</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
