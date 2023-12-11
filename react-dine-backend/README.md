# React-Dine-Backend

Simple backend that reads and write data to json

### Running
```
cd react-dine-backend
npm install
npm run start
```

### Requests

```
GET http://localhost:5000/api/dishes

###
GET http://localhost:5000/api/orders


###
GET http://localhost:5000/images/beef-tacos.jpg

###
POST http://localhost:5000/api/orders
Content-Type: application/json

{
  "order": {
    "customer": {
      "name": "Johnny Depp",
      "email": "johnny@depp.com",
      "street": "21 Jump Street",
      "postal-code": "90210",
      "city": "Beverly Hills"
    },
    "items": [
      {
        "id": "d2",
        "quantity": 2
      },
      {
        "id": "d5",
        "quantity": 1
      }
    ]
  }
}
```

