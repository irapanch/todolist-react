export const selectUser = state => state.auth.user
export const selectToken = state => state.auth.token
export const selecisLoggedIn = state => state.auth.isLoggedIn
export const selectError = state => state.auth.error