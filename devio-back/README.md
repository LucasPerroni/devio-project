<p align="center">
  <h1 align="center">
    Devio Back-end
  </h1>
</p>

## 💻 Technologies and Tools

- REST APIs
- Node.js
- TypeScript
- PostgreSQL

---

## 🏁 Usage

```bash
$ git clone https://github.com/LucasPerroni/devio-back.git

$ cd devio-back

$ npm install

$ npm run dev
```

---

## 🚀 API:

```yml
GET /food
    - Route to get all available food
    - headers: {}
    - body: {}
```

```yml
GET /order/code/latest
    - Route to get latest order code
    - headers: {}
    - body: {}
```

```yml
POST /order
    - Route to create a new order
    - headers: {}
    - body: {
      "name": "lorem ipsum" (user name),
      "code": 100,
      "food": [
        {"id": 10 (id of each food)},
      ]
    }
```

```yml
GET /user
    - Route to get all users
    - headers: {}
    - body: {}
```

```yml
PUT /order
    - Route to update order status
    - headers: {}
    - body: {
      "id": 10 (user id),
      "name": "lorem ipsum" (user name),
      "status": true/false (oposite of the current status)
    }
```

```yml
DELETE /order/:userId
    - Route to delete an order
    - headers: {}
    - body: {}
```
