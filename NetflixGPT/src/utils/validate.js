export const validateForm = (name, email, password) => {
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const nameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate) return "Email is not valid";
    if(!nameValidate) return "Name is not valid";
    if(!passwordValidate) return "Password is not valid";

    return null;
}

export const validate2Input = (email, password) => {
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate) return "Email is not valid";
    if(!passwordValidate) return "Password is not valid";

    return null;
}