export function getErrors(errors: any){
    if(Array.isArray(errors)) return getErrorsFromArray(errors);
    return new Array(errors["error"]["Message"]);
}

export function getErrorsFromArray(errors: any[]){
    if(errors[0].toString().toLowerCase().includes("exception")) return new Array(errors[1]);
    let errorMessages = errors[0] as string[];
    let errorsArray = [];

    for(let prop in errorMessages){
        errorsArray = errorsArray.concat(errorMessages[prop])
    }
    return errorsArray;
}