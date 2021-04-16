export const updateObject = (oldobject, updatePropeties) => {
    return {
        ...oldobject,
        ...updatePropeties
    }
}