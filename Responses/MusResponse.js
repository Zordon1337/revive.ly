class MusResponse {
    constructor(errorCode = '', errorMsg = '', errorTitle = '', fail = false, fallback = false, result = null, success = false, timestamp = 0) {
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
        this.errorTitle = errorTitle;
        this.fail = fail;
        this.fallback = fallback;
        this.result = result;
        this.success = success;
        this.timestamp = timestamp;
    }

    getErrorCode() { return this.errorCode; }
    getErrorMsg() { return this.errorMsg; }
    getErrorTitle() { return this.errorTitle; }
    getResult() { return this.result; }
    getTimestamp() { return this.timestamp; }
    isFail() { return this.fail; }
    isFallback() { return this.fallback; }
    isSuccess() { return this.success; }

    setErrorCode(value) { this.errorCode = value; }
    setErrorMsg(value) { this.errorMsg = value; }
    setErrorTitle(value) { this.errorTitle = value; }
    setFail(value) { this.fail = value; }
    setFallback(value) { this.fallback = value; }
    setResult(value) { this.result = value; }
    setSuccess(value) { this.success = value; }
    setTimestamp(value) { this.timestamp = value; }

    toObject() {
        return {
            errorCode: this.getErrorCode(),
            errorMsg: this.getErrorMsg(),
            errorTitle: this.getErrorTitle(),
            fail: this.isFail(),
            fallback: this.isFallback(),
            result: this.getResult(),
            success: this.isSuccess(),
            timestamp: this.getTimestamp()
        };
    }
}

module.exports = MusResponse;
