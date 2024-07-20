# Chess Tournament Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

Chess Tournament Management System - bu shaxmat turnirlarini boshqarish uchun backend tizim. Ushbu tizim foydalanuvchilarni ro'yxatga olish, o'yinchilarni boshqarish, turnirlar yaratish va boshqarish, va natijalarni kuzatish imkonini beradi.

## Features

- User Authentication and Authorization
- Player Management
- Tournament Management
- Match Management
- Leaderboard

## Installation

1. **Repository** ni klonlash:

    ```sh
    git clone https://github.com/username/chess-tournament.git
    cd chess-tournament
    ```

2. **Dependencies** ni o'rnatish:

    ```sh
    npm install
    ```

3. **Environment Variables** faylini yaratish (`.env`):

    ```plaintext
    PORT=
    MONGO_DB_URL=
    JWT_SECRET=
    ```

## Usage

1. **Server** ni ishga tushirish:

    ```sh
    npm start
    ```

## Example API Request

# User Registration

Request

```
POST /api/v1/auth/register
Content-Type: application/json

{
    "username": "MannopovMuhammadamin",
    "password": "12345678"
}

```

Response
```
{
    "status": 200,
    "message": "The user successfully sign up!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YjliOTM2MzYzMmVjNzYzOGFmZDYyIiwiaXNfYWRtaW4iOmZhbHNlLCJpcCI6Ijo6MSIsImFnZW50IjoiUG9zdG1hblJ1bnRpbWUvNy40MC4wIiwiaWF0IjoxNzIxNDczOTQwLCJleHAiOjE3MjE1NjAzNDB9._O13yiXR-oL_CEotPIB_-UeTXs7kU1As9ZkKG8wwHWk",
    "data": {
        "username": "JohnDoe",
        "password": "$2a$10$3oYCTocY2oqZuwnCtDJQzelnFn1BLrgoEhqlJKg9bhEHo4NtyB0GW",
        "is_admin": false,
        "_id": "669b9b9363632ec7638afd62",
        "user_created_at": "2024-07-20T11:12:19.801Z",
        "createdAt": "2024-07-20T11:12:19.802Z",
        "updatedAt": "2024-07-20T11:12:19.802Z",
        "__v": 0
    }
}
```
