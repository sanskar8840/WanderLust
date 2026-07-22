# 🏡 WanderLust

WanderLust is a full-stack web application inspired by Airbnb, where users can explore, create, edit, and manage property listings. The application provides secure user authentication, image uploads, reviews, and a responsive user interface built with Node.js, Express, MongoDB, and EJS.

---

## 🚀 Features

* 🔐 User Authentication (Sign Up, Login, Logout)
* 🏠 Create, Edit, and Delete Property Listings
* 📷 Image Upload Support
* ⭐ Add and Delete Reviews
* 👤 Authorization (Only owners can edit/delete their listings)
* 📱 Responsive User Interface
* ⚠️ Flash Messages and Error Handling
* 🗂️ MongoDB Database Integration
* 🔒 Secure Password Hashing using Passport.js

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local
* Passport Local Mongoose

### Other Packages

* Express Session
* Connect Flash
* Method Override
* Joi (Validation)
* Multer (Image Upload)
* Cloudinary (Image Storage)

---

## 📂 Project Structure

```text
WanderLust/
│── init/
│── models/
│── public/
│── routes/
│── utils/
│── views/
│── middleware.js
│── app.js
│── schema.js
│── package.json
│── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/sanskar8840/WanderLust.git
```

Move into the project folder:

```bash
cd WanderLust
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

Start the server:

```bash
node app.js
```

Or, if using Nodemon:

```bash
nodemon app.js
```

Open your browser and visit:

```text
http://localhost:8080
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Listing Details
* Create Listing
* Login Page
* Signup Page

---

## 📌 Future Improvements

* ❤️ Wishlist / Favorites
* 💳 Online Booking & Payments
* 📍 Interactive Maps
* 🔍 Advanced Search & Filters
* 📅 Booking Calendar
* 🌙 Dark Mode
* 📱 Mobile Optimization

---

## 👨‍💻 Author

**Sanskar Yadav**

* GitHub: https://github.com/sanskar8840

---

## 📄 License

This project is created for educational and learning purposes.
