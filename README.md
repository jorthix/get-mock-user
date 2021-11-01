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