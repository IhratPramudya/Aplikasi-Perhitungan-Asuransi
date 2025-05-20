-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "kontrakNo" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "otr" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "angsuranKe" INTEGER NOT NULL,
    "angsuranPerBulan" INTEGER NOT NULL,
    "tanggalJatuhTempo" TIMESTAMP(3) NOT NULL,
    "contractId" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_kontrakNo_key" ON "Contract"("kontrakNo");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("kontrakNo") ON DELETE RESTRICT ON UPDATE CASCADE;
