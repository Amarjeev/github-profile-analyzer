# GitHub Profile Analyzer API

A backend service built with Node.js, Express.js, Prisma ORM, and MySQL that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.

---

# Features

* Fetch GitHub public profile data using username
* Store analyzed GitHub profile data in MySQL
* Retrieve all stored profiles
* Retrieve a single stored profile
* Delete stored profiles
* Rate limiting for API protection
* Proper error handling and validation
* Clean layered backend architecture
* Prisma ORM integration with MySQL

---

# Tech Stack

* Node.js
* Express.js
* Prisma ORM
* MySQL
* Axios
* Express Rate Limit

---

# Project Architecture

```bash
src/
│
├── config/
│   └── prisma.js
│
├── controllers/
│   └── githubController.js
│
├── middlewares/
│   └── rateLimiter.js
│
├── routes/
│   └── githubRoutes.js
│
├── services/
│   └── githubService.js
│
├── utils/
│
├── app.js
└── server.js
```

---

# API Endpoints

## 1. Fetch GitHub Profile And Store In Database

```http
GET https://github-profile-analyzer369.up.railway.app/api/github/:username
```

### Example

```http
GET https://github-profile-analyzer369.up.railway.app/api/github/octocat
```

### Response

```json
{
  "success": true,
  "message": "GitHub profile analyzed successfully",
  "data": {
    "username": "octocat",
    "followers": 100,
    "publicRepos": 20
  }
}
```

---

## 2. Get All Stored Profiles

```http
GET https://github-profile-analyzer369.up.railway.app/api/profiles
```

---

## 3. Get Single Stored Profile

```http
GET https://github-profile-analyzer369.up.railway.app/api/profiles/:username
```

### Example

```http
GET https://github-profile-analyzer369.up.railway.app/api/profiles/octocat
```

---

## 4. Delete Stored Profile

```http
DELETE https://github-profile-analyzer369.up.railway.app/api/profiles/:username
```

### Example

```http
DELETE https://github-profile-analyzer369.up.railway.app/api/profiles/octocat
```

---

# Database Schema

```prisma
model GithubProfile {
  id                 Int      @id @default(autoincrement())
  githubId           Int      @unique
  username           String   @unique
  name               String?
  email              String?
  bio                String?
  avatarUrl          String?
  githubProfileUrl   String
  publicRepos        Int      @default(0)
  followers          Int      @default(0)
  following          Int      @default(0)
  profileStrength    String?
  developerLevel     String?
  activityLevel      String?
  githubCreatedAt    DateTime
  githubUpdatedAt    DateTime
  analyzedAt         DateTime @default(now())
}
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

DATABASE_URL="mysql://root:password@localhost:3306/github_analyzer"
```

---

# Installation And Setup
---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Initialize Prisma

```bash
npx prisma generate
```

---

## 4. Run Database Migration

```bash
npx prisma migrate dev --name init
```

---

## 5. Start Development Server

```bash
npm run dev
```

---

# Running The Server

Server runs on:

```bash
http://localhost:3000
```

---

# Error Handling

The API handles:

* Invalid usernames
* Profile not found
* Duplicate profiles
* Database errors
* GitHub API failures
* Internal server errors

---

# Rate Limiting

Rate limiting is implemented using `express-rate-limit` to prevent API abuse and excessive GitHub API requests.

---

# Improvements Added

* Layered architecture
* Prisma ORM integration
* Rate limiting
* Input validation
* Duplicate profile prevention
* Structured API responses
* Proper error handling

---

# Postman Collection

Postman collection can be imported for API testing.

---

# Author

Amarjeev Ms
