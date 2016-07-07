import { FRIENDS, NONFRIENDS } from '../constants/constants'

export const splitPeople = ( state, type ) => {
    const { currentId, ids, friendsById, namesById } = state;
    const numPeople = ids.length;

    let otherPeople = [];
    let friends = [];

    for (let i = 0; i < numPeople; i++) {
        if (friendsById[currentId].indexOf(ids[i]) == -1) { // id is not a friend
            otherPeople = [
                ...otherPeople,
                { id: ids[i], name: namesById[ids[i]]}
            ]

        } else { // id is a friend
            friends = [
                ...friends,
                { id: ids[i], name: namesById[ids[i]]}
            ]
        }
    }

    if (type === FRIENDS)
        return friends;

    else // type === NONFRIENDS
        return otherPeople;
}