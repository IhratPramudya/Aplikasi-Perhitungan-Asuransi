import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.contract.deleteMany();

  await prisma.product.createMany({ data: sampleData.products});
  await prisma.user.createMany({ data: sampleData.users});
  await prisma.contract.create({
    data: {
      kontrakNo: "AGR00001",
      clientName: "SUGUS",
      otr: 240_000_000,

      // Seed data untuk angsuran
      schedules: {
        create: [
          { angsuranKe: 1, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-01-25") },
          { angsuranKe: 2, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-02-25") },
          { angsuranKe: 3, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-03-25") },
          { angsuranKe: 4, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-04-25") },
          { angsuranKe: 5, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-05-25") },
          { angsuranKe: 6, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-06-25") },
          { angsuranKe: 7, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-07-25") },
          { angsuranKe: 8, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-08-25") },
          { angsuranKe: 9, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-09-25") },
          { angsuranKe: 10, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-10-25") },
          { angsuranKe: 11, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-11-25") },
          { angsuranKe: 12, angsuranPerBulan: 12907000, tanggalJatuhTempo: new Date("2024-12-25") },
        ]
      }
    }
  })

  console.log("Database seeded successfully!");
}

main();
