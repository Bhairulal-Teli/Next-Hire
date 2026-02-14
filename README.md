# NextHire – Mock Interview & DSA Practice Platform

NextHire is a full-stack web platform designed to help users practice Data Structures & Algorithms (DSA) and conduct real-time mock interviews. It provides an interview-like environment with live video, chat, and session tracking.
🔗 Live Demo: https://next-hire-1-iyrt.onrender.com/

## Features

- User authentication and management using Clerk  
- Practice DSA problems in a dedicated problems section  
- Create and join interview sessions (host & participant)  
- Real-time video calling and chat using Stream API  
- Dashboard to manage active and past sessions  
- Responsive and user-friendly UI  

## Tech Stack

- Frontend: React, Tailwind CSS  
- Backend: Node.js, JavaScript  
- Database: MongoDB  
- Authentication: Clerk  
- Real-time Communication: Stream API  
- Background Jobs / Workflows: Inngest  

## Use Case

NextHire is useful for students and developers preparing for technical interviews who want to:
- Practice coding problems  
- Simulate real interview scenarios  
- Collaborate with peers via video and chat  

## Setup (Local)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/next-hire.git
   
2. Install Dependencies:
   npm install

3. Add Environment Variables:
   Create a .env file and add:
     - Clerk Keys
     - Stream API Keys
     - Inngest Keys
     - MongoDB connection string
  
4. Run the app:
   npm run dev
