

 export type FormErrors = {
  fullname?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
};

export const validate =(
    fullname: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
  ): FormErrors => {
    const newErrors: FormErrors = {};

    if (!fullname.trim()) newErrors.fullname = "Le nom complet est requis";
    else if (fullname.length < 3) newErrors.fullname = "Le nom complet doit contenir au moins 3 caractères";

    if (!email.trim()) newErrors.email = "L’email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email invalide";

    if (!phone.trim()) newErrors.phone = "Le numéro de téléphone est requis";
    else if (!/^\d{8,15}$/.test(phone))
      newErrors.phone = "Numéro invalide (8 à 15 chiffres attendus)";

    if (!password.trim()) newErrors.password = "Mot de passe requis";
    else if (password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";

    if (!confirmPassword.trim()) newErrors.confirmPassword = "Veuillez confirmer le mot de passe";
    else if (confirmPassword !== password) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";

    return newErrors;
  };


  