APIs (Application Programming Interface)
- Analogi (colokan USB) by Putu
- Ngirim data json by Elco
- Pertukaran data antar client - server by Akbar
- Sekumpulan protocol and tools yang membuat sebuah komponen berinterkasi satu dengan lain by Syharoni temen saya
- Sekumpulan method/fungsi, endpoint by agar bisa berinteraksi data Johan

API
- is a set of commands, functions/methods, protocols, object, that programmers can use to create software or interact with an external system

API Jquery
API Bootstrap
API React router dom
API Express

Create a API server
yang bisa ngirim response berupa data ke client

localhost:3000/login , /register
localhost:5000/api/v1/login, api/v1/register

- Endpoint: http://localhost:5000/api/v1/login
- Paths: /api/v1/login, /user, /register
- Parameters: /api/v1/user/:id (/api/v1/user/1) or /api/v1/user?id=1
/api/v1/user?id=1&email=a@a.com

- Authentication: Need to identify who is using the API

// Public Endpoints
http://localhost:5000/api/v1/login
http://localhost:5000/api/v1/register
http://localhost:5000/api/v1/about

vs

// Private Enpoints

http://localhost:5000/api/v1/movie/99
{
	"id": 99,
	"name": "The Witcher",
	"genre": "fantasy"
}


REST API
- What is REST
Arsitektur buat ngirim dan nerima data, di bagi atas beberapa method, GET, PUT, PATCH, DELETE, POST, by Fadhil

- Macem tempat COD (Cash of Delivery), jadi pembeli bisa ambil barang, penjual bisa naruh, tempat pertukaran data by Helmi

- Representational State Transfer, yang membuat method (GET, POST, etc.) bekerja by Syahroni temen saya

- Apakah ini sama kayak CRUD? by Putu

- Gaya Arsitektur pertukaran data, HTTP method, REST metode untuk webservice by Nauval

= REST (Arsitektur)
- CLIENT <-HTTP REQUEST-> SERVER
               API


= How to build an RESTful API server
Two rules that need to understand:
1. Use HTTP Request VERBS
2. Use specific Pattern of Routes/Endpoint URLs

A. What is HTTP Request VERBS
-- GET -> Read/Get (Search/find data in database)
-- POST -> Create new entry in database
-- PUT -> Update [Harus semua data]
-- PATCH (new) -> Update [Bisa specific data]
-- DELETE -> Delete (Destroy data in database)
*Similar like CRUD pattern

B. Specific Pattern of routes/endpoint
HTTP Verbs       Plural        Singular
GET            /users      /user/1 or /user?id=1
POST           /users or /user -> 1 entry
PUT            /user/1
PATCH          /user/1
DELETE         /user/1

