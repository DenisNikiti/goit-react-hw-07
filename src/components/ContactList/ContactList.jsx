import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
