// Write your function here
function welcomeMessage(params:string) {
  return (`Welcome, ${params}`);
}

// interface User {
//   id: number;
//   username: string;
// }

// function createUser(user: User): string {
//   return `User ${user.username} created with ID ${user.id}`;
// }


function secondElement<T>(arr:T[]):T | undefined {
  return arr[0];
}

secondElement([1,2,3])

interface User {
  id: number,
  username: string
}


function createUser(user:User): string {
  console.log('user.id :>> ', user.id);
  return user.username
}

// union type
function padLeft(value: string | number, padding: string | number): string {
  if (typeof padding === 'number') {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

// Enums and Switch Statements:
enum ResponseStatus {
  Success,
  Failure,
  Unauthorized,
  Forbidden
}

function responseMessage(status: ResponseStatus): string {
  switch (status) {
    case ResponseStatus.Success:
      return "Operation successful.";
    case ResponseStatus.Failure:
      return "Operation failed.";
    case ResponseStatus.Unauthorized:
      return "Unauthorized access.";
    case ResponseStatus.Forbidden:
      return "Access forbidden.";
    default:
      return "Unknown status.";
  }
}


enum ResponseStatus_ok {
  Great,
  Horrible,
}

function resMsg(status: ResponseStatus_ok): string {
  switch (status) {
    case ResponseStatus_ok.Great:
      console.log('status :>> ', status); // 0
      console.log('ResponseStatus_ok.Great :>> ', ResponseStatus_ok.Great); // 0
      return 'GREAT!!'

    default:
      return "Unknown status.";
  }
}

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}


function getArray<T>(arr: T[]): T[] | undefined {
  return arr;
}

function welcomeMessageGenerics<T>(value: T): string {
  return `!!Welcome, ${value}!`;
}

function tsQuizes() {

  // ! NG このようにはかけない reactの hook違う
  // console.log(welcomeMessage<string>("Alice")); // Should output: "Welcome, Alice!"

  const newUser = { id: 1, username: "john_doe" };
  console.log(createUser(newUser)); // Should output: "User john_doe created with ID 1"

  console.log(padLeft("Hello", 4)); // Should output: "    Hello"
  console.log(padLeft("World", "_*")); // Should output: "_*World"

  console.log(responseMessage(ResponseStatus.Success)); // Should output a specific message for 'Success'

  console.log(resMsg(ResponseStatus_ok.Great));

  console.log(firstElement([0,1,2,3]))
  console.log(getArray([0, 1, 2, 3]))

  console.log(welcomeMessageGenerics("Jessie"));

  // Define a function 'welcomeMessage' that takes a string argument 'name'
  // and returns a welcome message string. For example, if you pass "Alice",
  // it should return "Welcome, Alice!"



  // Example usage:
}


export default tsQuizes;