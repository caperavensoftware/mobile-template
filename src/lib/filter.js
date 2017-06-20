export function filter(search, collection) {
    const keys = Object.keys(collection[0]);

    const result = collection.filter(item => {
        for (let key of keys) {
            if (item[key].toString().indexOf(search) > -1) {
                return true;
            }
        }

        return false;
    });

    return result;
}