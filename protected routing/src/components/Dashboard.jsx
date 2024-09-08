import React from 'react';

const Dashboard = ({ authData }) => {
  /* const Dashboard: This defines a functional component named Dashboard.
({ authData }): This is using destructuring to directly extract the authData prop passed to the component. The authData object contains the authenticated user's information, including the name and PIN. */

  return (
    <div>
      <h2>Welcome to your dashboard, {authData.name}!</h2>
    </div>

    /* <div>: This is the wrapper element containing the content to be rendered.
<h2>: Inside the <h2> tag, we display a personalized welcome message using the user's name stored in authData.name.
{authData.name}: This accesses the name property from the authData object, which contains the name the user provided during the account creation or login process. */
  );
};

export default Dashboard;
