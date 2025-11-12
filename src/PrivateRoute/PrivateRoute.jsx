// import { Spinner } from 'flowbite-react';
// import React, { useContext } from "react";
// import { AuthContext } from "../contects/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {

//      const { user, loading } = useContext(AuthContext);
//      const location = useLocation();

//      if (loading) {
//          return <div className="text-center">
//            <Spinner aria-label="Center-aligned spinner example" />


// </div>  
//  }

//  if (user) {
//      return children;
//  }

//   return (
//     <Navigate to="/login" state={{ from: location }} replace></Navigate>
//   )
// }




// export default PrivateRoute



// import { Spinner } from 'flowbite-react';
// import React, { useContext } from "react";
// import { AuthContext } from "../contects/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return (
//       <div className="text-center mt-20">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default PrivateRoute;












import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 While Firebase checks auth state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" aria-label="Loading spinner" />
      </div>
    );
  }

  // ❌ Not logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  // ✅ Logged in → render protected route
  return children;
};

export default PrivateRoute;
