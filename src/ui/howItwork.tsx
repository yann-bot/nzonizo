

import React from 'react';

const steps = [
    {
        number: 1,
        title: "Trouvez un technicien",
        description: "Parcourez notre liste de techniciens qualifiés près de chez vous ou recherchez par spécialité."
    },
    {
        number: 2,
        title: "Contactez-le",
        description: "Envoyez un message ou appelez directement le technicien pour expliquer votre problème."
    },
    {
        number: 3,
        title: "Obtenez de l'aide",
        description: "Convenez d'un rendez-vous et laissez le professionnel résoudre votre problème technique."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-16 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Comment ça marche</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Obtenez de l&#39;aide technique en quelques étapes simples
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center ">
                            <div className="mx-auto bg-orange-500   text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;