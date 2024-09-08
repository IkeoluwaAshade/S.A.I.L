import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, authData }) => {
  /* ========== const ProtectedRoute: This defines a functional component named ProtectedRoute. It's a wrapper component that checks if the user is authenticated before rendering any protected content.
({ children, authData }): The component receives two props:
children: This represents the components inside the ProtectedRoute tag (e.g., the Dashboard component in this case).
authData: This object contains the user's authentication data (name and PIN) which was stored during the account creation or login process. ========== */
  if (!authData.name || !authData.pin) {
    return <Navigate to="/" />;
  }

  /* === if (!authData.name || !authData.pin): This condition checks whether the user is missing either their name or PIN. In other words, it verifies if the user is authenticated.
If the user hasn't provided a name or PIN (i.e., they haven't logged in or created an account), the condition evaluates as true.
return <Navigate to="/" />: If the condition is true (i.e., the user is not authenticated), this line redirects them back to the root route (/). The Navigate component allows for a programmatic redirection, similar to what you would do with the navigate function, but it's directly rendered as JSX here. === */

  return children;
};

export default ProtectedRoute;


/* ================

The ProtectedRoute component is a wrapper for any route that needs to be protected.
It checks if the user is authenticated by verifying that both the name and PIN are present in authData.
If the user is not authenticated, they are redirected to the root ("/") using the Navigate component.
If the user is authenticated, the children (the protected components) are rendered.

============== */
