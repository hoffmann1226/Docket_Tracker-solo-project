import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Docket Tracker is a legal tech app for attorneys to organize their busy schedule.  From the home page, attorney-users are able to see their case load, view details, edit, add, and delete information.
      </p>
    </div>
  </div>
);

export default AboutPage;
