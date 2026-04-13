# User List App (React Native)

A premium, high-performance React Native application built with **Expo SDK 51** and **TypeScript** that fetches and organizes user data from a REST API.

## 🚀 Features

- **Dynamic User List:** Fetches data from JSONPlaceholder API and displays it using a optimized `FlatList`.
- **Live Search:** Filter users instantly by Name or Email.
- **Detailed Profiles:** Navigate to a dedicated detail screen to view comprehensive user information.
- **Pull-to-Refresh:** Update the list with a smooth swipe gesture.
- **Premium UI/UX:**
  - Modern card-style layout with elegant shadows.
  - Custom loading indicators and error states.
  - Fully responsive design compatible with iOS, Android, and Web.
- **Clean Architecture:** Scalable folder structure with reusable components and TypeScript interfaces.

## 🛠️ Technical Stack

- **Framework:** React Native (Expo SDK 51)
- **Language:** TypeScript
- **Navigation:** React Navigation (Native Stack)
- **Icons:** Expo Vector Icons (Ionicons)
- **API Handling:** Fetch API with robust error handling

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd userListApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npx expo start
   ```

## 📱 Viewing the App

- **Mobile:** Scan the QR code using the **Expo Go** app (Android) or the Camera app (iOS).
- **Web:** Press **`w`** in the terminal to open the app in your browser.

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (UserCard, SearchBar, etc.)
├── navigation/     # App routing and navigation config
├── screens/        # Main application screens (List, Detail)
├── services/       # API and networking logic
└── types/          # TypeScript interfaces and type definitions
```
