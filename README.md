#  BeautyHub - Premium Beauty & Grooming Services Platform

🔗 **Live Website:** https://beauty-service-e3e8a.web.app/


 **Assignment Category:** Assignment-11-assignment_category_02

---

##  Project Overview

BeautyHub is a full-stack **service-sharing web application** where users can add their own beauty services, explore others’ services, book appointments, and manage bookings through a personalized dashboard. Built with **React**, **Firebase**, **MongoDB**, and **Express.js**, the project showcases real-time user interaction, secure authentication, and dynamic service management.

---

##  Website Features

-  **Dashboard:** Logged-in users get a dynamic dashboard with options to manage their own services and bookings.
-  **Secure Authentication:** Firebase-based email/password & Google login system with JWT with firebase admin for backend route protection.
-  **Service CRUD Operations:** Add, update, and delete personal services, fully synced with MongoDB.
-  **Booking Management:** Book services with form inputs, track service status (pending, working, completed).
-  **Responsive UI:** Fully responsive on mobile, tablet, and desktop devices.
-  **Theme Toggle:** Switch between Light and Dark modes effortlessly.
-  **Search Functionality:** Live filtering of services by name on all service page.

---

##  Pages & Routes

###  Public Routes
- `/` - Home (with banner, featured services, and extras)
- `/login` - Login (email/password + Google)
- `/register` - Registration
- `/services` - All available services


###  Private Dashboard (Dropdown Navigation)
- `/services/:id` - Service details (Private)
- `/dashboard/add-service` - Add your own services
-  `/dashboard/edit-service` - Edit your own services
- `/dashboard/manage-services` - Update or delete your services
- `/dashboard/booked-services` - View services you've booked
- `/dashboard/service-to-do` - View services booked *from* you & update status

---

## 🛠 Tech Stack

| Tech              | Purpose                         |
|-------------------|----------------------------------|
| React             | Frontend Framework              |
| Tailwind CSS + DaisyUI | Styling & Components     |
| Firebase Auth     | Authentication (email + Google) |
| Express.js        | Backend Framework               |
| MongoDB Atlas     | Database                        |
| Firebase Hosting  | Client Deployment               |
| AOS / Framer Motion | Animation Effects             |
| JWT               | Secure Route Protection         |

