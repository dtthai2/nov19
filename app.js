// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((person) => {
//       console.log(person.id, person.name);
//     });
//   });

// task 1

// number of public git repos
fetch("https://api.github.com/users/dtthai2")
  .then((response) => response.json())
  .then((json) => console.log(json.public_repos));

// number of followers
fetch("https://api.github.com/users/dtthai2")
  .then((response) => response.json())
  .then((json) => console.log(json.followers));

// user id of all followers
fetch("https://api.github.com/users/dtthai2/followers")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((person) => {
      console.log(person.id);
    })
  );

// total number of all comments
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// totaoll nnumber of all photos
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => console.log(json.length));

// name and email address of all users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      console.log(person.name, person.email);
    });
  });

// name and current city of all users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      console.log(person.name, person.address.city);
    });
  });

// total number of todos that have been completed
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    let completed = json.filter((todo) => todo.completed == true);
    console.log(completed.length);
  });

// titles and IDs of todos that have already been been completed
// + name and user it belongs to if not completed
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((todo) => {
      if (todo.completed == true) {
        console.log(todo.title, todo.id);
      } else {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((people) => {
            console.log(people.find((person) => person.id == todo.userId).name);
          });
      }
    });
  });

// name of user for album that owns the album titled "quidem molestiae enim"
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((album) => {
      if (album.title == "quidem molestiae enim") {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((people) => {
            console.log(
              people.find((person) => person.id == album.userId).name
            );
          });
      }
    });
  });
