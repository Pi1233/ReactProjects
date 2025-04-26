import React, { useRef, useEffect, useState } from "react";
import Title from "../../components/Title";
import ContactData from "./UserData.json";
import Contact from "./Contact";
export default function FilterContactApp() {
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const [searchContact, setSearchContact] = useState("");
  return (
    <div>
      <Title text={"Filter Contacts App"} />
      <input
        type="text"
        placeholder="Search by first name"
        className="mt-4 mb-2"
        style={{ padding: ".3rem .5rem" }}
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className=""
        style={{
          gap: 0,
          display: "flex",
          maxWidth: "1600px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {ContactData.filter((contact) => {
          if (searchContact === "") {
            return contact;
          } else if (
            contact.name
              .toLocaleLowerCase()
              .includes(searchContact.toLocaleLowerCase())
          ) {
            return contact;
          }
        }).map((contact) => (
          <Contact
            contact={contact}
            cardColor={"bg-danger"}
            textColor={"text-primary"}
            key={contact.id}
          />
        ))}
      </section>
    </div>
  );
}
