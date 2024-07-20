# Chess Tournament Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

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
[chess.postman_collection.json](https://github.com/user-attachments/files/16319916/chess.postman_collection.json){
	"info": {
		"_postman_id": "537cafae-0070-40c5-aab3-25b85bd128e2",
		"name": "chess",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "36564019",
		"_collection_link": "https://jurabek-4660.postman.co/workspace/54b0abdc-38d1-4448-b39e-c9f05661f3cc/collection/36564019-537cafae-0070-40c5-aab3-25b85bd128e2?action=share&source=collection_link&creator=36564019"
	},
	"item": [
		{
			"name": "auth",
			"item": [
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"MannopovMuhammadamin\",\r\n    \"password\": \"12345678\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"MannopovMuhammadamin\",\r\n    \"password\": \"12345678\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/auth/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"auth",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "add new admin",
					"request": {
						"method": "PATCH",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTY2NTg0YTY5YmYxOTEzMWYzMDhhIiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTU4MzQsImV4cCI6MTcyMTU0MjIzNH0.FLkn867dWzUTvV9JhzNxbYRDMQBl62Nef4rRrhkJf1U",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/addadmin/669a5fd7132c1a80b3d58d18",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"addadmin",
								"669a5fd7132c1a80b3d58d18"
							]
						}
					},
					"response": []
				},
				{
					"name": "remove admin",
					"request": {
						"method": "PATCH",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTY2NTg0YTY5YmYxOTEzMWYzMDhhIiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTU4MzQsImV4cCI6MTcyMTU0MjIzNH0.FLkn867dWzUTvV9JhzNxbYRDMQBl62Nef4rRrhkJf1U",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/removeadmin/669a5fd7132c1a80b3d58d18",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"removeadmin",
								"669a5fd7132c1a80b3d58d18"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Player",
			"item": [
				{
					"name": "Add new player",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"player_name\": \"Bo'rijar Bo'rijarov\",\r\n    \"player_age\": 12,\r\n    \"player_rating\": 1,\r\n    \"country\": \"Uzbekistan\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/player",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"player"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get all players and get by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"player_name\": \"Bo'rijar Bo'rijarov\",\r\n    \"player_age\": 12,\r\n    \"player_rating\": 1,\r\n    \"country\": \"Uzbekistan\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/player/669b5e8d66dcf4c676d33b83",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"player",
								"669b5e8d66dcf4c676d33b83"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update player",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    // \"player_name\": \"helo\",\r\n    // \"player_age\": 20\r\n    \"player_rating\": 10\r\n    // \"country\" : \"helo\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/player/669b5e8d66dcf4c676d33b83",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"player",
								"669b5e8d66dcf4c676d33b83"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete player",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    // \"player_name\": \"helo\",\r\n    // \"player_age\": 20\r\n    \"player_rating\": 10\r\n    // \"country\" : \"helo\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/player/669b5f5584e95ba9c4c4ce7b",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"player",
								"669b5f5584e95ba9c4c4ce7b"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Tournament",
			"item": [
				{
					"name": "create new tournament",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"tournament_name\": \"O'zbekiston kubogi 2024 2-bosqich\",\r\n    \"tournament_start_date\": \"12-12-2024\",\r\n    \"tournament_end_date\": \"01-12-2024\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament"
							]
						}
					},
					"response": []
				},
				{
					"name": "read tournament list",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament/669b72ae7d37721deaac32a4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament",
								"669b72ae7d37721deaac32a4"
							]
						}
					},
					"response": []
				},
				{
					"name": "update tournament",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"tournament_name\": \"O'zbekiston kubogi 2024 2-bosqich\",\r\n    \"tournament_start_date\": \"2024-12-11T19:00:00.000Z\",\r\n    \"tournament_end_date\": \"2024-01-11T19:00:00.000Z\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament/669b72ae7d37721deaac32a4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament",
								"669b72ae7d37721deaac32a4"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete tournament",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"tournament_name\": \"O'zbekiston kubogi 2024 2-bosqich\",\r\n    \"tournament_start_date\": \"2024-12-11T19:00:00.000Z\",\r\n    \"tournament_end_date\": \"2024-01-11T19:00:00.000Z\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament/669b72ae7d37721deaac32a4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament",
								"669b72ae7d37721deaac32a4"
							]
						}
					},
					"response": []
				},
				{
					"name": "add player to tournament",
					"request": {
						"method": "PATCH",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"playerId\": \"669b5ecb7bad822f74a5bd91\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament/669b72636707967695656f90/addplayer",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament",
								"669b72636707967695656f90",
								"addplayer"
							]
						}
					},
					"response": []
				},
				{
					"name": "remove player from tournament",
					"request": {
						"method": "PATCH",
						"header": [
							{
								"key": "token",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY5YTc0ODk1ZmE5MDM0OTQwZmYzZDI0IiwiaXNfYWRtaW4iOnRydWUsImlwIjoiOjoxIiwiYWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjQwLjAiLCJpYXQiOjE3MjE0NTgyOTcsImV4cCI6MTcyMTU0NDY5N30.8-nM2Hpky0QPRwg1-U-cd9c3VpJw8giwFBH562ahplo",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"playerId\": \"669b5ecb7bad822f74a5bd91\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/tournament/669b72636707967695656f90/removeplayer",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"tournament",
								"669b72636707967695656f90",
								"removeplayer"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Match",
			"item": [
				{
					"name": "match generator",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:8888/api/v1/669b72636707967695656f90/match/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"669b72636707967695656f90",
								"match",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "edit match result",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"result\": \"player1\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8888/api/v1/match/669b8cd5b2c66f9bb593f499",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8888",
							"path": [
								"api",
								"v1",
								"match",
								"669b8cd5b2c66f9bb593f499"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
