#H1🏕️ CampQuest
A full-stack web application that allows users to discover, review, and manage campgrounds. Built with a focus on secure authentication, ownership-based access control, and a responsive user experience.

🚀 Features
🔐 User Authentication with secure sessions via Passport.js

🏕️ Campground CRUD – Create, edit, delete, and view campgrounds

📝 Review System – Leave reviews for campgrounds

🖼️ Image Uploads via Cloudinary

🔒 Ownership-based Access Control – Only authors can edit/delete their content

⚠️ Error Handling with custom messages and flash alerts

🧼 Security – Helmet, Joi validation, and MongoDB injection protection

📍 Map Integration (optional) using MapTiler (if enabled)

🛠️ Tech Stack
Frontend: EJS, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Auth: Passport.js with session-based authentication

Uploads: Cloudinary + Multer

Validation & Security: Joi, Helmet, express-mongo-sanitize

🧪 Environment Setup
Create a .env file and add:

DB_URL=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SECRET=session_secret

🧠 Learnings
Implemented secure session-based authentication

Learned ownership-based route protection using middleware

Integrated cloud-based image uploads with Multer and Cloudinary

Improved app reliability through structured error handling

📌 Future Improvements
Add user profile pages

Integrate map location picker

Enable search & filter functionality

Deploy on Render/Heroku with CI/CD
