-- CreateTable
CREATE TABLE "public"."Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "motdepasse" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Technicien" (
    "id" SERIAL NOT NULL,
    "specialite" TEXT NOT NULL,
    "zoneCouverture" TEXT NOT NULL,
    "statut" BOOLEAN NOT NULL DEFAULT true,
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "Technicien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Avis" (
    "id" SERIAL NOT NULL,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "clientId" INTEGER NOT NULL,
    "technicienId" INTEGER NOT NULL,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_telephone_key" ON "public"."Utilisateur"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Technicien_utilisateurId_key" ON "public"."Technicien"("utilisateurId");

-- AddForeignKey
ALTER TABLE "public"."Technicien" ADD CONSTRAINT "Technicien_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Avis" ADD CONSTRAINT "Avis_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Avis" ADD CONSTRAINT "Avis_technicienId_fkey" FOREIGN KEY ("technicienId") REFERENCES "public"."Technicien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
