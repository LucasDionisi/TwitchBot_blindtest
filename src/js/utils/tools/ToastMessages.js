class ToastMessage {
    constructor() { }

    sendSuccess(pMessage) {
        $.toast({
            heading: 'Success',
            text: pMessage,
            showHideTransition: 'slide',
            position: 'top-right',
            hideAfter: 5000,   // in milli seconds
            icon: 'success'
        })
    }

    sendInfo(pMessage) {
        $.toast({
            heading: 'Info',
            text: pMessage,
            showHideTransition: 'fade',
            position: 'top-right',
            hideAfter: 5000,   // in milli seconds
            icon: 'info'
        });
    }

    sendError(pMessage) {
        $.toast({
            heading: 'Error',
            text: pMessage,
            showHideTransition: 'fade',
            position: 'top-right',
            hideAfter: 5000,   // in milli seconds
            icon: 'error'
        });
    }
}

const toastMessage = new ToastMessage();