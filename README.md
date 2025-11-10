# Dev Events Hub

Welcome to the Dev Events Hub, the ultimate platform for developers to discover and engage with a wide range of events, including hackathons, meetups, workshops, and conferences. Our mission is to provide a centralized place where you can find all the developer-focused events you shouldn't miss.

## 🚀 Features

- **Comprehensive Event Listings**: Browse a curated list of developer events, from hackathons and meetups to workshops and conferences.
- **Featured Events**: Discover the most exciting and popular events, prominently displayed on our homepage.
- **Seamless Navigation**: Enjoy a user-friendly interface that makes finding and exploring events a breeze.
- **Modern Tech Stack**: Built with the latest technologies to ensure a fast, reliable, and scalable platform.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Image Management**: [Cloudinary](https://cloudinary.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Deployment**: Vercel

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/vanshsuri07/Dev_event.git
   cd Dev_event
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root of your project and add the following environment variables. You will need to sign up for accounts with Cloudinary, MongoDB, and PostHog to get the required credentials.

   ```env
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # PostHog
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
   ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.

## 📂 Project Structure

Here is an overview of the project's directory structure:

```
/
├── app/                  # Main application directory
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
├── database/             # Database connection and models
├── lib/                  # Library functions and constants
├── public/               # Public assets (images, fonts, etc.)
├── .gitignore            # Git ignore file
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. **Fork the Project**: Click the 'Fork' button at the top right of the page.
2. **Create your Feature Branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your Changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the Branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**: Go to the repository on GitHub and click 'New pull request'.

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
