# Myrbes Diner
## The Final Project for the advanced web programming course
Running live: https://myrbes-diner.onrender.com
May take up to a minute to load, because of the free tier of the hosting.
For now the app is not supported by mobile devices or other smaller-screen-devices.

## Project Description
Myrbes Diner is a online ordering system, designed to provide a seamless and interactive way for customers to view the menu, create food orders, and enjoy a user-friendly checkout process. Build with React, this application offers a rich, dynamic user experience. 

### Front end
The focus of this project. Context API was used to state management, Toastify for popups/toasts. React Hook Form was used to create the order placing form. Scrollable component was used in Modals. 
Made the background myself using Photopea.
When new code is being pushed to front-end directory, it is ran throught simple pipeline, that checks if the code builds succesfully, before deploying it on Render.

### Back end
Backend is a simple express app that is running on a server. It reads and writes data to JSON and doesn't have a database. The backend was provided by the course instructor, altought I made small tweaks to it.

## ToDo
- Media Queries for different screen sizes
- Containerizing
- Improve CI/CD