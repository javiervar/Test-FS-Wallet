import time

def handle_success(data,msg,status_code):
    return {
        "message":msg,
        "details":data,
        "timestamp":int(time.time())
    },status_code

def handle_error(error,msg,status_code):
    return {
        "message":msg,
        "error":error,
        "timestamp":int(time.time())
    },status_code