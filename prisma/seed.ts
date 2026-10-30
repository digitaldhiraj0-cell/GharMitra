import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = [
  ["Building Construction", "भवन निर्माण"], ["Plumbing Services", "प्लम्बिङ सेवा"],
  ["Electrical Services", "विद्युत सेवा"], ["Tiles & Marble", "टायल्स तथा मार्बल"],
  ["Painting & Finishing", "रङरोगन तथा सजावट"], ["AC & Heating", "एसी तथा हिटर"],
  ["Hardware & Materials", "हार्डवेयर तथा सामग्री"], ["Roads & Infrastructure", "सडक तथा पूर्वाधार"],
];

async function main() {
  for (const [name, nameNe] of categories) {
    await prisma.serviceCategory.upsert({ where: { name }, update: { nameNe }, create: { name, nameNe } });
  }
  const settings = {
    companyName: "GharMitra Business Group",
    taglineNe: "तपाईंको निर्माण र घरायसी काम, एउटै ठाउँबाट",
    taglineEn: "All Your Construction and Home Service Needs in One Place.",
    phone: "9768097118",
    whatsapp: "9768097118",
    email: "group.gharmitra@gmail.com",
    address: "Tikapur-1, Kailali, Nepal",
    timezone: "Asia/Kathmandu",
    currency: "NPR",
  };
  for (const [key, value] of Object.entries(settings)) {
    await prisma.siteSetting.upsert({ where: { key }, update: { value }, create: { key, value } });
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; }).finally(async () => prisma.$disconnect());
