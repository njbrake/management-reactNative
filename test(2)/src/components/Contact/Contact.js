import React from 'react';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor';

export class Contact extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={'contact'}>
        <h1> THIS IS THE CONTACT SECTION </h1>
      </ScrollableAnchor>
    );
  }
}
