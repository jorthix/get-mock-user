import { getFullUser, getUserName, getUserPhoto } from '../index';

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