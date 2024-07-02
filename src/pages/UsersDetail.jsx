import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UsersDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) =>
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error)
      );
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <h2 className="mt-4 text-lg font-semibold">Address</h2>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
        {user.address.geo.lng}
      </p>
      <h2 className="mt-4 text-lg font-semibold">Company</h2>
      <p>
        <strong>Name:</strong> {user.company.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {user.company.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong> {user.company.bs}
      </p>
    </div>
  );
}

export default UsersDetail;
