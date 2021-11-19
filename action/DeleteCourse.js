export const deleteCourse = (course) =>{
    return {
        type: 'delete',
        payload:course
    }
}

export const restoreCourse = (course) =>{
    return {
        type: 'restore',
        payload:course
    }
}

