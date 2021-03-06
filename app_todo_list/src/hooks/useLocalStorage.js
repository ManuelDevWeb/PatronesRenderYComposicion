import { useState, useEffect } from "react";

// Los atributos que reciben son el nombre de elemento a guardar en el local y el valor inicial de ese item
const useLocalStorage = (itemName, initialValue) => {
  // Manejando estado del array de elementos
  const [items, setItems] = useState(initialValue);
  // Manejando estado de carga
  const [loading, setLoading]=useState(true);
  // Manejando estado de error
  const [error, setError]=useState(false);
  // Manejando estado de sincronizacion
  const [sincronizedItem, setSincronizedItem]=useState(true);

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
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    },3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sincronizedItem]);
  
  // Función para guardar la información en el localStorage
  const saveItemsLocalStorage = (newItem) => {
    try {
      const stringifiedItems = JSON.stringify(newItem);
      // Guardamos en el item, el arreglo de tareas que viene desde la funcion completeTodos o deleteTodos
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItem);
    } catch (error) {
      setError(error)
    } 
  };

  // Función para cambiar el estado de loading y sincronizedItem
  const sincronizeItem=()=>{
    setLoading(true);
    setSincronizedItem(false);
  }

  return {items, saveItemsLocalStorage, loading, error, sincronizeItem};
};

export { useLocalStorage };
