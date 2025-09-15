



const techniciens =  [

    {
        id:1,
        nom: "Yann Ouafete",
        adresse: "221B Baker Street",
        specialite: "Detectif",
        photo: "/img/yann2.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["Crime", "Enquete"],
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum non metus nec justo fermentum dictum. Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque lorem, at blandit metus magna et augue. Integer non malesuada libero. Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla luctus sollicitudin.",
    },
    {
        id:2,
        nom: "Ojevie Manap",
        adresse: "Gombongo",
        specialite: "Promblier",
        photo: "/img/pexels-kindelmedia-8488024.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["Tuyauterie", "Installation"],
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },
    {
        id:3,
        nom:"Tony Lee",
        photo:"/img/pexels-mikhail-nilov-9242267.jpg",
        adresse:"PK5, Avenue des Martyrs",
        specialite:"Réparateur électronique",
        sousSpecialites:["Smartphone", "TV", "Radio"],
        avis:27,
        localisation:"Bangui",
        note:4.8,
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",

    },
    {
        id:4,
        nom: "Yannick Yerima",
        adresse: "36 Villas",
        specialite: "Menuisier",
        photo: "/img/pexels-illustrate-digital-ug-924569584-20853365.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["Meuble", "Plafond"],
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },
    {
        id:5,
        nom: "Youssouf Idriss",
        adresse: "Avenue Idriss Deby Km5",
        specialite: "Mécanicien",
        photo: "/img/pexels-aliyu-jooney-2151008543-31928799.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["4x4", 'Automatique'],
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },

    {
        id:6,
        nom: "Excel Redemona",
        photo: "/img/istockphoto-2211243775-612x612.jpg",
        specialite: "Mecanicienne",
        sousSpecialites: ["Poids lourd", "4x4"],
        localisation: "Bangui",
        adresse: "221B Baker Street",
        avis: 57,
        note:5,
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },
     {
        id:3,
        nom:"Tony Lee",
        photo:"/img/pexels-mikhail-nilov-9242267.jpg",
        adresse:"PK5, Avenue des Martyrs",
        specialite:"Réparateur électronique",
        sousSpecialites:["Smartphone", "TV", "Radio"],
        avis:27,
        localisation:"Bangui",
        note:4.8,
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",

    },
    {
        id:4,
        nom: "Yannick Yerima",
        adresse: "36 Villas",
        specialite: "Menuisier",
        photo: "/img/pexels-illustrate-digital-ug-924569584-20853365.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["Meuble", "Plafond"],
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },
    {
        id:5,
        nom: "Youssouf Idriss",
        adresse: "Avenue Idriss Deby Km5",
        specialite: "Mécanicien",
        photo: "/img/pexels-aliyu-jooney-2151008543-31928799.jpg",
        avis: 57,
        note:5,
        localisation: "Bangui",
        sousSpecialites: ["4x4", 'Automatique'],
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },

    {
        id:6,
        nom: "Excel Redemona",
        photo: "/img/istockphoto-2211243775-612x612.jpg",
        specialite: "Mecanicienne",
        sousSpecialites: ["Poids lourd", "4x4"],
        localisation: "Bangui",
        adresse: "221B Baker Street",
        avis: 57,
        note:5,
        bio: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit. Curabitur vel semper nulla. Pellentesque " +
            "habitant morbi tristique senectus et netus et malesuada fames" +
            " ac turpis egestas. Vestibulum non metus nec justo fermentum dictum." +
            " Phasellus auctor, lorem a faucibus tincidunt, erat elit scelerisque " +
            "lorem, at blandit metus magna et augue. Integer non malesuada libero." +
            " Fusce dictum, nulla nec egestas facilisis, libero massa congue magna, sed efficitur purus metus non nisl. Nullam vitae ex sit amet nulla " +
            "luctus sollicitudin.",
    },
]


export default  techniciens;