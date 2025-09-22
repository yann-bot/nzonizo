import {validate, FormErrors} from "@/app/utils/validationConnexion";
import React from "react";

type User = {
    nom: string;
    email: string;
};



export const handleSubmitCon =  async (
    e: React.FormEvent,
    username: string,
    password: string,
    setErrors: (errors: FormErrors) => void,
    setIsSubmitting: (state: boolean) => void,
    onSuccess: (user: User, token: string) => void
) => {

    e.preventDefault();

    const validationErrors = validate(username, password);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((v) => v !== undefined);
    if (!hasErrors) {
        setIsSubmitting(true);
        const postObject = {
            method: "POST",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify({username, password}),
        }

        try {

            const res = await fetch("/api/auth/conn", postObject )
            const data = await res.json();
            if(res.ok) {
                onSuccess(data.utilisateur, data.token);

            } else {
                setErrors({submit: data.error || "Erreur lors de la connexion"})
            }
        } catch {
            setErrors({ submit: "Une erreur s'est produite lors de la connexion" });
        } finally {
            setIsSubmitting(false);
        }
    }
}