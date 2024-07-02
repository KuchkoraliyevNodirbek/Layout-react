import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error)
      );
  }, []);

  return (
    <div className="p-4">
      {data.length > 0 ? (
        <div className="space-y-4">
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/Users/${item.id}`}
              className="block p-4 bg-gray-100 shadow-md rounded-md hover:bg-gray-200"
            >
              <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
              <p className="text-gray-600">{item.email}</p>
            </Link>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Users;
