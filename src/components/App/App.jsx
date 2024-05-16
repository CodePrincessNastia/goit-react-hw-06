import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import  {useSelector} from "react-redux";
import {selectContacts} from '../../redux/contactsSlice';
import {selectNameFilter } from '../../redux/filtersSlice';

//const MyComponent = () => {
 // const selectedData = useSelector(state => state.someSlice.data);

  // Використання selectedData далі в компоненті//


export default function App() {
  return (
    <div>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
