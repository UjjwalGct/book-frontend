// // import {
// //     createBrowserRouter,
// //     RouterProvider,
// //   } from "react-router-dom";
// // import App from "../App";
// // import Home from "../home/Home";
// // import Shop from"../shop/Shop";
// // import Blog from "../components/Blog";
// // import About from "../components/About";
// // import SingleBook from "../shop/SingleBook";
// // import DashboardLayout from "../dashboard/DashboardLayout";
// // import Dashboard from "../dashboard/Dashboard";
// // import UploadBook from "../dashboard/UploadBook";
// // import ManageBooks from "../dashboard/ManageBooks";
// // import EditBooks from "../dashboard/EditBooks";
// // import Signup from "../components/Signup";
// // import PrivateRoute from "../PrivateRoute/PrivateRoute";
// // import Login from "../components/Login";



// //   const router = createBrowserRouter([
// //     {

// //       path: "/",
// //       element: <App/>,
// //       children: [
// //         {
// //         index: true,
// //         element: <Home />,
// //       },
// //         {
// //             path: '/home',
// //             element: <Home/>
// //         },
// //         {
// //           path:"/shop",
// //           element:<Shop/>
// //         },
// //         {
// //           path:"/about",
// //           element:<About/>
// //         },
// //         {
// //           path:"/blog",
// //           element:<Blog/>
// //         },
// //         {
// //           path:"/book/:id",
// //           element:<SingleBook/>, 
// //           loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)
// //         }
// //       ]
// //     },
// //     {

// //       path:"/admin/dashboard",
// //       element: <DashboardLayout/>,
// //       children:[
// //         {
// //           path:"/admin/dashboard",
// //           element:<PrivateRoute><Dashboard/></PrivateRoute>
// //         },
// //         {
// //           path:"/admin/dashboard/upload",
// //           element:<UploadBook/>
// //         },

// //         {
// //           path:"/admin/dashboard/manage",
// //           element:<ManageBooks/>
// //         },
// //         {
// //           path:"/admin/dashboard/edit-books/:id",
// //           element:<EditBooks/>,
// //           loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)

// //         }
// //       ]
// //     },

// //   //   { path: "/", element: <Login /> },
// //    { path: "/dashboard", element: <Dashboard /> },
// //     {
// //       path:"/sign-up",
// //       element: <Signup/>
// //     },
// //     {
// //       path:"/login",
// //       element: <Login/>
// //     }



// //   ]);

// //   export default router;








// import {
//   createBrowserRouter,
// } from "react-router-dom";
// import App from "../App";
// import Home from "../home/Home";
// import Shop from "../shop/Shop";
// import Blog from "../components/Blog";
// import About from "../components/About";
// import SingleBook from "../shop/SingleBook";
// import DashboardLayout from "../dashboard/DashboardLayout";
// import Dashboard from "../dashboard/Dashboard";
// import UploadBook from "../dashboard/UploadBook";
// import ManageBooks from "../dashboard/ManageBooks";
// import EditBooks from "../dashboard/EditBooks";
// import Signup from "../components/Signup";
// import Login from "../components/Login";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "home", element: <Home /> },
//       { path: "shop", element: <Shop /> },
//       { path: "about", element: <About /> },
//       { path: "blog", element: <Blog /> },
//       {
//         path: "book/:id",
//         element: <SingleBook />,
//         loader: ({ params }) =>
//           fetch(`http://localhost:5001/book/${params.id}`),
//       },
//       {
//         path: "/sell-your-book",
//         element: (
//           <PrivateRoute>
//             <DashboardLayout />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/admin/dashboard",
//     element: (

//               <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>

//     ),
//     children: [
//       { index: true, element: <Dashboard/> },
//       { path: "upload", element: <UploadBook /> },
//       { path: "manage", element: <ManageBooks /> },
//       {
//         path: "edit-books/:id",
//         element: <EditBooks />,
//         loader: ({ params }) =>
//           fetch(`http://localhost:5001/book/${params.id}`),
//       },
//     ],
//   },
//   { path: "/login", element: <Login /> },
//   { path: "/sign-up", element: <Signup /> },
// ]);

// export default router;




import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute";
import BookDetails from "../components/BookDetails";
import BookSearchAndRecommend from "../components/BookSearchAndRecommend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "/search", element: <BookSearchAndRecommend /> },
      {
        path: "/book/:bookTitle",
        element: <BookDetails />,
      },
      {
        path: "book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`https://book-backend-jade.vercel.app/book/${params.id}`),
      },

      {
        path: "sell-your-book",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
      },
    ],
  },

  // ✅ FIXED DASHBOARD ROUTES

  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>


    ),
    children: [
      {
        index: true, element: <AdminRoute>
          <Dashboard />
        </AdminRoute>
      },
      { path: "upload", element: <UploadBook /> },
      { path: "manage", element: <ManageBooks /> },
      {
        path: "edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`https://book-backend-jade.vercel.app/book/${params.id}`),
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Signup /> },
]);

export default router;












