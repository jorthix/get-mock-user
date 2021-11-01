# get-mock-user
Get a complete user data or only parts with mock data provided from https://randomuser.me

## Examples

##### 🙋‍♀️ Get a user 
```typescript
import { getFullUser } from 'jorthix-get-mock-user';
import { User } from 'jorthix-get-mock-user/lib/interface/main';

// Get a random user object
getFullUser().then((user): User => {
    console.log('🥳', user)
})
```
##### 🔊 Get a name 
```typescript
import { getUserName } from 'jorthix-get-mock-user';

// Get a random user name
getUserName().then((name): string => {
    console.log('Hi 👋 ', name)
})
```
##### 🌅 Get a photo 
```typescript
import { getUserPhoto } from 'jorthix-get-mock-user';

// Get a random user image
getUserPhoto('medium').then((url): string => {
    console.log('Wow 📸 ', url)
})
```

##### 📍 Get user location
```typescript
import { getUserLocation } from 'jorthix-get-mock-user';
import { Location } from 'jorthix-get-mock-user/lib/interface/main';

// Get a random user location
getUserLocation().then((location): Location => {
    console.log('I am here 👉 ', location)
})
```

##### 🎫 Get user login data
```typescript
import { getUserLogin } from 'jorthix-get-mock-user';
import { Login, LoginShort } from 'jorthix-get-mock-user/lib/interface/main';

// Get a random user login data
getUserLogin().then((login): Login => {
    console.log('Login response ✅ ', login)
})
// Get a random user login data only username & password
getUserLogin(true).then((userPass): LoginShort => {
    console.log('User 🥸 ', userPass)
})
```