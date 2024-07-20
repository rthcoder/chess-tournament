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
- API Documentation (Swagger)

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
    PORT=8888
    MONGO_URI=mongodb://localhost:27017/chess_tournament
    JWT_SECRET=your_secret_key
    ```

## Usage

1. **Server** ni ishga tushirish:

    ```sh
    npm start
    ```

2. **API Documentation** ni ko'rish uchun brauzeringizda quyidagi manzilga o'ting:

    ```plaintext
    http://localhost:8888/api-docs
    ```

## API Documentation

Swagger dokumentatsiyasini ko'rish uchun brauzeringizda quyidagi manzilga o'ting:

```plaintext
http://localhost:8888/api-docs
