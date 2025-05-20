"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const AddFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [angsuranPerBulan, setAngsuranPerBulan] = useState(0);
  const [jangkaWaktuBulan, setJangkaWaktuBulan] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const otr = parseFloat(data.otr);
    const dp = parseFloat(data.DP);
    const jangkaWaktu = parseInt(data.jangkaWaktu, 10);

    if (isNaN(otr) || isNaN(dp) || isNaN(jangkaWaktu) || jangkaWaktu <= 0) {
      console.error("Input tidak valid.");
      setIsSubmitting(false);
      return;
    }

    setJangkaWaktuBulan(jangkaWaktu);

    const pokokUtang = otr - dp;
    let bunga = 0;

    if (jangkaWaktu <= 12) {
      bunga = 0.12;
    } else if (jangkaWaktu <= 24) {
      bunga = 0.14;
    } else {
      bunga = 0.165;
    }

    const totalHutangDenganBunga = pokokUtang + (pokokUtang * bunga);
    const calculatedAngsuranPerBulan = totalHutangDenganBunga / jangkaWaktu;

    setAngsuranPerBulan(calculatedAngsuranPerBulan);

    // Lakukan logika pengiriman data di sini (ganti setTimeout dengan implementasi Anda)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const formatRupiah = (angka) => {
    return 'Rp ' + Math.round(angka).toLocaleString('id-ID');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="kontrakNo">Nomer Kontrak</Label>
              <Input
                id="kontrakNo"
                name="kontrakNo"
                type="text"
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="clientName">Nama Client</Label>
              <Input
                id="clientName"
                name="clientName"
                type="text"
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="jangkaWaktu">Jangka Waktu (Bulan)</Label>
              <Input
                id="jangkaWaktu"
                name="jangkaWaktu"
                type="number"
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="DP">DP</Label>
              <Input
                id="DP"
                name="DP"
                type="number"
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="otr">OTR</Label>
              <Input
                id="otr"
                name="otr"
                type="number"
                autoComplete="off"
              />
            </div>
          </div>
          <Button disabled={isSubmitting} className="w-full" variant="default">
            {isSubmitting ? 'Submitting...' : 'Submit Data'}
          </Button>
        </div>
      </form>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Rincian Angsuran</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Jangka Waktu</span>
          <span className="text-gray-900 font-medium">{jangkaWaktuBulan} bulan</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Angsuran / Bulan</span>
          <span className="text-lg font-bold text-blue-600">{formatRupiah(angsuranPerBulan)}</span>
        </div>
      </div>
    </>
  );
};

export default AddFormSection;