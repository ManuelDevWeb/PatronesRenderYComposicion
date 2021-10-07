import React, { cloneElement, Children } from "react";

const Header = ({ children, loading }) => {
  // cloneElement(children) se utiliza para clonarle las propiedades del padre a un solo hijo
  // Children() se utiliza cuando hay varios hijos (Devuelve array de childrens)
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
};

export { Header };
