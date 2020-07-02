# API DOCUMENTATION

# METHOD 4 (POST, GET, PUT, DELETE)

LIST ENDPOINTS:
- `POST /users/register`
- `POST /users/login`
- `GET /products`
- `POST /products`
- `GET /products/:id`
- `PUT /products/:id`
- `DELETE /products/:id`
- `GET /carts/find`
- `POST /carts/add`
- `DELETE /carts/delete/:id`
- `POST /carts/checkout`

### POST /users/register : http://localhost:3000/users/register

Request: 
body: 

```json
[
    {
    "email" : "customer@mail.com",
    "password" : "password"
    }
]
```

Response: 

```json
[
    {
    "email" : "customer@mail.com",
    "role" : "customer"
    }
]
```

### POST /users/login : http://localhost:3000/users/login

Request: 
body: 

```json
[
    {
    "email" : "customer@mail.com",
    "password" : "password"
    }
]
```

Response: 

```json
[
    {
        "access_token": "access_token"
    }
]
```

### GET /products : http://localhost:3000/products
Request:
body: 

Response: 

```json
[[
    {
        "id": 1,
        "name": "Emas 0.5 gr",
        "descriptions": "Pure Gold , Batangan, ANTAM, New, 0.5 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-3298534/antam_makaioshop---emas-antam-0-5-gram-logam-mulia_full02.jpg?output-format=webp",
        "price": 500000,
        "stock": 1000,
        "createdAt": "2020-06-27T07:53:43.892Z",
        "updatedAt": "2020-06-27T07:53:43.892Z"
    },
    {
        "id": 2,
        "name": "Emas 1 gr",
        "descriptions": "Pure Gold, Batangan, ANTAM, New, 1 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-2904413/antam_pentacles---logam-mulia-antam-1-gram-certicard_full02.jpg?output-format=webp",
        "price": 950000,
        "stock": 900,
        "createdAt": "2020-06-24T05:43:45.285Z",
        "updatedAt": "2020-06-30T23:58:10.392Z"
    },
    {
        "id": 3,
        "name": "Emas 2 gr",
        "descriptions": "Pure Gold , Batangan, ANTAM, New, 2 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-2904414/antam_pentacles---logam-mulia-antam-2-gram-certicard_full02.jpg?output-format=webp",
        "price": 1800000,
        "stock": 800,
        "createdAt": "2020-06-27T07:55:20.397Z",
        "updatedAt": "2020-06-30T23:58:13.227Z"
    }
]
```

### POST /products : http://localhost:3000/products/

Request: 
body: 

```json
{
    "name" : "Emas 1g",
    "descriptions" : "Good",
    "imageurl" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0754721/antam_antam-logam-mulia-keping-emas--1-g--999-9--fine-gold-certificate-_full07.jpg?output-format=webp"
    "price" : 958000,
    "stock" : 100
}
```

headers:
```json
{
    "access_token": "access_token"
}
```

Response: 

```json
{
    "id": 1,
    "name" : "Emas 1g",
    "descriptions" : "Good",
    "imageurl" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0754721/antam_antam-logam-mulia-keping-emas--1-g--999-9--fine-gold-certificate-_full07.jpg?output-format=webp"
    "price" : 958000,
    "stock" : 100,
    "updatedAt": "2020-06-19T03:13:57.354Z",
    "createdAt": "2020-06-19T03:13:57.354Z"
}
```



### GET /products/:id : http://localhost:3000/products/:id

Request: 

params: 3

body: 

Response: 

```json
[
    {
        "name": "Emas 3g",
        "descriptions": "3g",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-7244219/antam_logam_mulia_3_gram_-_lm_antam_-_emas_batangan_kepingan_3_gram_full01_ibpmq5r9.jpg?output-format=webp",
        "price": 2700500,
        "stock": 50,
        "createdAt": "2020-06-18T19:08:30.482Z",
        "updatedAt": "2020-06-18T19:08:30.482Z"
    }
]
```

### PUT /products/:id : http://localhost:3000/products/:id

Request: 

params: 3

body: 

```json
[
    {
        "name": "Emas 3g",
        "descriptions": "Pure Gold",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-7244219/antam_logam_mulia_3_gram_-_lm_antam_-_emas_batangan_kepingan_3_gram_full01_ibpmq5r9.jpg?output-format=webp",
        "price": 2800000,
        "stock": 55,
    }
]
```

headers:
```json
{
    "access_token": "access_token"
}
```

Response: 

```json
[
    {
        "id" : 3,
        "name": "Emas 3g",
        "descriptions": "Pure Gold",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-7244219/antam_logam_mulia_3_gram_-_lm_antam_-_emas_batangan_kepingan_3_gram_full01_ibpmq5r9.jpg?output-format=webp",
        "price": 2800000,
        "stock": 55,
        "createdAt": "2020-06-18T19:08:30.482Z",
        "updatedAt": "2020-06-21T08:57:54.733Z"
    }
]
```


### DELETE /products/:id : http://localhost:3000/products/:id

Request: 

params: 3

body: 

headers:
```json
{
    "access_token": "access_token"
}
```

Response: 
```json
[
    {
        "id": 1,
        "name" : "Emas 1g",
        "descriptions" : "Good",
        "imageurl" : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0754721/antam_antam-logam-mulia-keping-emas--1-g--999-9--fine-gold-certificate-_full07.jpg?output-format=webp"
        "price" : 958000,
        "stock" : 100,
        "createdAt": "2020-06-16T13:57:11.915Z",
        "updatedAt": "2020-06-16T23:09:01.845Z"
    },
    {
        "name": "Emas 2g",
        "descriptions": "Good, 2g",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-2610146/antam_makaioshop---emas-antam-logam-mulia--2-g-_full02.jpg?output-format=webp",
        "price": 1910000,
        "stock": 75,
        "createdAt": "2020-06-18T16:30:10.099Z",
        "updatedAt": "2020-06-18T16:30:10.099Z"
    },
]
```

### GET /carts/find : http://localhost:3000/carts/find
Request:
headers:
```json
{
    "access_token": "access_token"
}
```

Response: 

```json
[
    {
        "id": 3,
        "UserId": 2,
        "name": "Emas 2 gr",
        "descriptions": "Pure Gold , Batangan, ANTAM, New, 2 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-2904414/antam_pentacles---logam-mulia-antam-2-gram-certicard_full02.jpg?output-format=webp",
        "price": 1800000,
        "stock": 800,
        "quantity": "1",
        "createdAt": "2020-07-01T14:09:25.551Z",
        "updatedAt": "2020-07-01T14:09:25.551Z"
    },
    {
        "id": 4,
        "UserId": 2,
        "name": "Emas 10 gr",
        "descriptions": "Pure Gold , Batangan, ANTAM, New, 10 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-2904417/antam_pentacles---logam-mulia-antam-10-gram-certicard_full02.jpg?output-format=webp",
        "price": 8650000,
        "stock": 500,
        "quantity": "1",
        "createdAt": "2020-07-01T14:09:37.159Z",
        "updatedAt": "2020-07-01T14:09:37.159Z"
    }
]
```

### POST /carts/add : http://localhost:3000/carts/add
Request:
headers:
```json
{
    "access_token": "access_token"
}
```

Response: 

```json
[
    {
        "id": 4,
        "UserId": 2,
        "name": "Emas 100 gr",
        "descriptions": "Pure Gold, Batangan, ANTAM, New, 100 gr",
        "imageurl": "https://cf.shopee.co.id/file/e1d3bcae753c9542606976dc728cc7a7",
        "price": 85500000,
        "stock": 200,
        "quantity": "1",
        "createdAt": "2020-07-01 21:17:50.792+07",
        "updatedAt": "2020-07-01 21:17:50.792+07"
    }
]
```

### DELETE /carts/delete/:id : http://localhost:3000/carts/delete/:id

Request: 

params: 3

body: 

headers:
```json
{
    "access_token": "access_token"
}

Response:
```json
[
    {
        "id": 4,
        "UserId": 2,
        "name": "Emas 10 gr",
        "descriptions": "Pure Gold , Batangan, ANTAM, New, 10 gr",
        "imageurl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-2904417/antam_pentacles---logam-mulia-antam-10-gram-certicard_full02.jpg?output-format=webp",
        "price": 8650000,
        "stock": 500,
        "quantity": "1",
        "createdAt": "2020-07-01T14:09:37.159Z",
        "updatedAt": "2020-07-01T14:09:37.159Z"
    }
]
```

### POST /carts/checkout : http://localhost:3000/carts/checkout

Request: 
body: 

headers:
```json
{
    "access_token": "access_token"
}

Response:
```json
[
    {
        
    }
]
```