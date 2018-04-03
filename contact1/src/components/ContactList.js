import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string,
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    }

    render() {
        const { contacts } = this.props
        const contactList = contacts.map(
            contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                />
            )
        );
        return (
            <div>
                {contactList}
            </div>
        );
    }
}

export default ContactList;