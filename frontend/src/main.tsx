import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignInPage from "@/pages/User/Signin";
import NotFound from "@/pages/NotFound";
import { Layout } from "@/components/Layout/Layout";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import { CreateCompany } from "./pages/Company/CreateCompany";
import { EditCompany } from "./pages/Company/EditCompany";
import { Booking } from "./pages/Booking/Booking";
import { CreateBooking } from "./pages/Booking/CreateBooking";
import { EditBooking } from "./pages/Booking/EditBooking";
import { Company } from "./pages/Company/Company";
import { CompanyDetail } from "./pages/Company/CompanyDetail";
import { BookingDetail } from "./pages/Booking/BookingDetail";

// https://mantine.dev/theming/default-theme/
const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
  cursorType: "pointer",
  primaryColor: "blue",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Auth */}
            <Route path="/signin" element={<SignInPage />} />

            {/* Company */}
            <Route path="/company" element={<Company />} />
            <Route path="/company/create" element={<CreateCompany />} />
            <Route path="/company/:id" element={<CompanyDetail />} />
            <Route path="/company/:id/edit" element={<EditCompany />} />
            {/* <Route path="/company/:id/passengers" element={<Passengers />} /> */}

            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/create" element={<CreateBooking />} />
            <Route path="/booking/:id" element={<BookingDetail />} />
            <Route path="/booking/:id/edit" element={<EditBooking />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
