import { getFullUser, getUserName } from '../index';

test('Get full user', () => {
    expect(Object.is(getFullUser, {}));
});

test('Get a user name', () => {
    expect(Object.is(getUserName, "string"));
});