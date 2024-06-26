import React, { useState } from "react";
import { Button } from "./components/Button";
import styles from "./content.module.css";

export const Content = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  return (
    <div className={styles.wraper}>
      <div>
        <h2>Сборные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
         showModal &&  <div>Modal</div>
          
      </div>
      <div>
        <h2>Корпоративные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Дневные сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Вечерние сплавы</h2>
        {<Button onClick={() => {setShowModal(toggler)}} />}
      </div>
      <div>
        <h2>Квесты для детей</h2>
        {<Button onClick={() => {setShowModal(toggler)}}/>}
      </div>
    </div>
  );
};
