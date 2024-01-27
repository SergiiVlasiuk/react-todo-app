import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  loading   : true,
  openModal : false,
}

export const AppSlice = createSlice({
  name         : 'app',
  initialState : defaultState,
  reducers     : {
    startLoading: ( state ) => {
      state.loading = true
    },
    stopLoading: ( state ) => {
      state.loading = false
    },
    showModalDialog: ( state ) => {
      state.openModal = true
    },
    hideModalDialog: ( state ) => {
      state.openModal = false
    },
  },
})

export const selectLoading = ( state ) => state.app.loading
export const selectModalDialogFlag = ( state ) => state.app.openModal

export const { startLoading, stopLoading, showModalDialog, hideModalDialog } =
  AppSlice.actions

export default AppSlice.reducer
