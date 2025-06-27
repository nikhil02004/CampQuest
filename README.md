#  🏕️ CampQuest

A full-stack web application that allows users to discover, review, and manage campgrounds. Built with a focus on secure authentication, ownership-based access control, and a responsive user experience.

## 🚀 Features

🔐 User Authentication with secure sessions via Passport.js <br>
🏕️ Campground CRUD – Create, edit, delete, and view campgrounds<br>
📝 Review System – Leave reviews for campgrounds<br>
🖼️ Image Uploads via Cloudinary<br>
🔒 Ownership-based Access Control – Only authors can edit/delete their content<br>
⚠️ Error Handling with custom messages and flash alerts<br>
🧼 Security – Helmet, Joi validation, and MongoDB injection protection<br>
📍 Map Integration (optional) using MapTiler (if enabled)<br>

## 🛠️ Tech Stack

Frontend: EJS, Bootstrap<br>
Backend: Node.js, Express.js<br>
Database: MongoDB (Mongoose)<br>
Auth: Passport.js with session-based authentication<br>
Uploads: Cloudinary + Multer<br>
Validation & Security: Joi, Helmet, express-mongo-sanitize<br>

## 🧪 Environment Setup

Create a .env file and add:<br>

DB_URL=your_mongodb_connection<br>
CLOUDINARY_CLOUD_NAME=your_cloud_name<br>
CLOUDINARY_KEY=your_key<br>
CLOUDINARY_SECRET=your_secret<br>
SECRET=session_secret<br>

## 🧠 Learnings

Implemented secure session-based authentication<br>
Learned ownership-based route protection using middleware<br>
Integrated cloud-based image uploads with Multer and Cloudinary<br>
Improved app reliability through structured error handling<br>

## 📌 Future Improvements

Add user profile pages<br>
Integrate map location picker<br>
Enable search & filter functionality<br>


