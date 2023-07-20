export const AlertType = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    NONE: 'none'
}

export const SHOW_ALERT = "SHOW_ALERT"

const showSuccessAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: { message, type: AlertType.SUCCESS,  iconColor:'green' }
    }
}

const showErrorAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: { message, type: AlertType.ERROR, iconColor:'red' }
    }
}

const showWarningAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: { message, type: AlertType.WARNING , iconColor:'tomato'}
    }
}

const showInfoAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: { message, type: AlertType.INFO,  iconColor:'cyan' }
    }
}

const showNoneAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: { message, type: AlertType.NONE,  iconColor:'black' }
    }
}

export const AlertActions = {
    showSuccessAlert,
    showErrorAlert,
    showWarningAlert,
    showInfoAlert,
    showNoneAlert
}