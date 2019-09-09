export function getUserScore(user) {
    return user.questions.length+Object.keys(user.answers).length
}