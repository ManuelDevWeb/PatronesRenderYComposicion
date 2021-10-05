import { useState, useEffect } from "react";

// Los atributos que reciben son el nombre de elemento a guardar en el local y el valor inicial de ese item
const useLocalStorage = (itemName, initialValue) => {
  // Manejando estado del array de elementos
  const [items, setItems] = useState(initialValue);
  // Manejando estado de carga
  const [loading, setLoading]=useState(true);
  // Manejando estado de error
  const [error, setError]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        // Implementando localstorage
        const localStorageItem = localStorage.getItem(itemName);
        let itemsStorage;

        // Validando si el localstorage es vacio o no
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          itemsStorage = initialValue;
        } else {
          itemsStorage = JSON.parse(localStorageItem);
        }

        setItems(itemsStorage);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    },1500)
  })
  
  // Función para guardar la información en el localStorage
  const saveItemsLocalStorage = (newItem) => {
    try {
      const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItem);
    } catch (error) {
      setError(error)
    } 
  };

  return {items, saveItemsLocalStorage, loading, error};
};

export { useLocalStorage };
