import { FRIENDS, NONFRIENDS } from '../constants/constants'

export const isFriend = ( friends, id ) => 
    friends.indexOf(id) !== -1

export const isUserPage = ( id, userId ) =>
    id === userId

export const splitPeople = ( state, type ) => {
    const { friends, namesById } = state;

    if (type === FRIENDS) {
        return namesById.filter(person => 
            friends.indexOf(person.id) !== -1
        )
    }

    else if (type === NONFRIENDS) {
        return namesById.filter(person =>
            friends.indexOf(person.id) === -1
        )
    }

    else // type === ???
        return namesById;

}

    