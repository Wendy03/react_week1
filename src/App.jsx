import { useState } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 15,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 30,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
  },
];

function App() {
  const [drinks, setDrinks] = useState(data);
  const [editingItemId, setEditingItemId] = useState(null);
  const handleDrinkStock = (id, stock) => {
    const newDrinks = drinks.map((item) => {
      if (item.id === id) {
        item.stock = stock;
      }
      return item;
    });
    setDrinks(newDrinks);
  };
  const handleNameChange = (id, newName) => {
    const newDrinks = drinks.map((item) => {
      if (item.id === id) {
        item.name = newName;
      }
      return item;
    });
    setDrinks(newDrinks);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) => {
            return (
              <tr key={drink.id}>
                <td>
                  {editingItemId === drink.id ? (
                    <input
                      type="text"
                      value={drink.name}
                      onChange={(e) =>
                        handleNameChange(drink.id, e.target.value)
                      }
                    />
                  ) : (
                    drink.name
                  )}
                </td>
                <td>
                  <small>{drink.description}</small>
                </td>
                <td>{drink.price}</td>
                <td>
                  <button
                    onClick={() => handleDrinkStock(drink.id, drink.stock - 1)}
                    disabled={drink.stock < 1}
                  >
                    -
                  </button>
                  {drink.stock}
                  <button
                    onClick={() => handleDrinkStock(drink.id, drink.stock + 1)}
                  >
                    +
                  </button>
                </td>
                <td>
                  {editingItemId === drink.id ? (
                    <button onClick={() => setEditingItemId(null)}>儲存</button>
                  ) : (
                    <button onClick={() => setEditingItemId(drink.id)}>
                      編輯
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
