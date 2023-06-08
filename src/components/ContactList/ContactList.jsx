import PropTypes from 'prop-types';
import { List, ListItem, Button } from 'styles/App.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
