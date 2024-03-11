
const PASWORD_LENGTH = 8;


export const validURL = (str: string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

interface validateLoginErrProps {
    URL: string,
    userNameOrEmail: string,
    password: string
}
export const validateLoginErr = ({ URL, userNameOrEmail, password }: validateLoginErrProps) => {
    let errors = {};
    if (validURL(URL) && userNameOrEmail.length <= 2 && password.length >= PASWORD_LENGTH) {
        return null;
    }
    if (!validURL(URL))
        errors = { ...errors, URL: "You must enter a valid URL" };
    if (userNameOrEmail.length <= 2) {
        errors = { ...errors, userNameOrEmail: "enter valid userName or email" };
    }
    if (password.length < PASWORD_LENGTH) {
        errors = { ...errors, password: "The password must consist of 8 letters and numbers or more" };
    }
    return errors;

};
