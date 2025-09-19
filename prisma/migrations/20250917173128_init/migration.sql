-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('CLIENT', 'TECHNICIEN', 'ADMIN');

-- CreateTable
CREATE TABLE "public"."Utilisateur" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "date_inscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Technicien" (
    "id" TEXT NOT NULL,
    "statut_en_ligne" BOOLEAN NOT NULL DEFAULT false,
    "note_moyenne" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "experience_annees" INTEGER,
    "bio" TEXT,

    CONSTRAINT "Technicien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Zone" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "geo_meta" JSONB,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Specialite" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Specialite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TechnicienZone" (
    "technicienId" TEXT NOT NULL,
    "zoneId" TEXT NOT NULL,

    CONSTRAINT "TechnicienZone_pkey" PRIMARY KEY ("technicienId","zoneId")
);

-- CreateTable
CREATE TABLE "public"."TechnicienSpecialite" (
    "technicienId" TEXT NOT NULL,
    "specialiteId" TEXT NOT NULL,

    CONSTRAINT "TechnicienSpecialite_pkey" PRIMARY KEY ("technicienId","specialiteId")
);

-- CreateTable
CREATE TABLE "public"."Avis" (
    "id" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "date_avis" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "technicienId" TEXT NOT NULL,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "public"."Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_telephone_key" ON "public"."Utilisateur"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Zone_nom_key" ON "public"."Zone"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Specialite_nom_key" ON "public"."Specialite"("nom");

-- AddForeignKey
ALTER TABLE "public"."Technicien" ADD CONSTRAINT "Technicien_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TechnicienZone" ADD CONSTRAINT "TechnicienZone_technicienId_fkey" FOREIGN KEY ("technicienId") REFERENCES "public"."Technicien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TechnicienZone" ADD CONSTRAINT "TechnicienZone_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "public"."Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TechnicienSpecialite" ADD CONSTRAINT "TechnicienSpecialite_technicienId_fkey" FOREIGN KEY ("technicienId") REFERENCES "public"."Technicien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TechnicienSpecialite" ADD CONSTRAINT "TechnicienSpecialite_specialiteId_fkey" FOREIGN KEY ("specialiteId") REFERENCES "public"."Specialite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Avis" ADD CONSTRAINT "Avis_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Avis" ADD CONSTRAINT "Avis_technicienId_fkey" FOREIGN KEY ("technicienId") REFERENCES "public"."Technicien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
