import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function ContactList() {
  const dispath = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <ul>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
