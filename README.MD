# TODO API DOCUMENTATION

## **TODOS**

### **Gets all todos**

_Method Url:_ `/todos`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

> If you successfully fetch all todos the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
[
    {
       id: 1,
       todo: "Walk the dog"
    }
]
```

### **Get a todo**

_Method Url:_ `/todos/:id`

_HTTP method:_ **[GET]**

_example call:_

```
axios.get('http://localhost:5000/todos/1')
     .then((res) => {
         this.setState({
             todo: res.data.todo
         })
     })
     .catch(err => {
       console.log(err)
     })
```

#### Response

##### 200 (OK)

> If you successfully fetch a todo the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
{
    id: 1,
    todo: "Walk the dog"
}
```

### **Update a todo**

_Method Url:_ `/todos`

_HTTP method:_ **[PUT]**

_example call:_

```
axios.put('http://localhost:5000/todos/', { todo: "Updated todo" })
     .then((res) => {
         this.setState({
             todo: res.data.todo
         })
     })
     .catch(err => {
       console.log(err)
     })
```

#### Response

##### 200 (OK)

> If you successfully updated a todo the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
{
    id: 1,
    todo: "Updated todo"
}
```

### **Delete a todo**

_Method Url:_ `/todos/:id`

_HTTP method:_ **[DELETE]**

_example call:_

```
axios.delete('http://localhost:5000/todos/1')
     .then((res) => {
         this.setState({
             message: res.data.message
         })
     })
     .catch(err => {
       console.log(err)
     })
```

#### Response

##### 200 (OK)

> If you successfully updated a todo the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
{
    message: "Todo successfully deleted"
    id: 1
}
```