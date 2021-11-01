import { getFullUser, getUserLocation, getUserName, getUserPhoto, getUserLogin } from '../index';

test('Get full user', async () => {
    expect(Object.is(await getFullUser, {}));
});

test('Get a user name', async () => {
    expect(Object.is(await getUserName, "string"));
});

test('Get a user photo', async () => {
    expect(Object.is(await getUserPhoto("thumbnail"), "string"));
    expect(Object.is(await getUserPhoto("medium"), "string"));
    expect(Object.is(await getUserPhoto("large"), "string"));
    expect(Object.is(await getUserPhoto("all"), {}));
});

test('Get user location', async () => {
    expect(Object.is(await getUserLocation, {}));
});

test('Get user login data', async () => {
    expect(Object.is(await getUserLogin, {}));
    expect(Object.is(await getUserLogin(true), {}));
    expect(Object.is(await getUserLogin(false), {}));
});