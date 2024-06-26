export const selectUser = state => state.auth.user
export const selectToken = state => state.auth.token
export const selecIsLoggedIn = state => state.auth.isLoggedIn
export const selectError = state => state.auth.error
export const selectLoading = state => state.auth.loading
export const selectIsRefresh = state => state.auth.isRefresh