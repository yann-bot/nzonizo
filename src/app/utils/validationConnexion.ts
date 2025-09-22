
export type FormErrors = {
    username?: string;
    password?: string;
    submit?: string;
};

export const validate = (name: string, pass: string): FormErrors => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
        newErrors.username = "Le nom d'utilisateur est requis";
    } else if (name.length < 3) {
        newErrors.username = "Le nom d'utilisateur doit contenir au moins trois caractères";
    }

    if (!pass.trim()) {
        newErrors.password = "Mot de passe requis";
    } else if (pass.length < 6) {
        newErrors.password = "Le mot de passe doit contenir au moins six caractères";
    }

    return newErrors;
};