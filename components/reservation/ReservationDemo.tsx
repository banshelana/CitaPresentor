"use client";

import { useState } from "react";

import Stepper from "./Stepper";
import SalonCard from "./SalonCard";
import ServiceCard from "./ServiceCard";
import OperatorCard from "./OperatorCard";
import TimeSelector from "./TimeSelector";
import PaymentCard from "./PaymentCard";
import SuccessCard from "./SuccessCard";

export default function ReservationDemo() {

  const [step, setStep] = useState(0);

  return (

    <section className="py-36">

      <div className="mx-auto max-w-6xl px-6">

        <Stepper step={step} />

        <div className="mt-16">

          {step === 0 && <SalonCard next={() => setStep(1)} />}

          {step === 1 && <ServiceCard next={() => setStep(2)} />}

          {step === 2 && <OperatorCard next={() => setStep(3)} />}

          {step === 3 && <TimeSelector next={() => setStep(4)} />}

          {step === 4 && <PaymentCard next={() => setStep(5)} />}

          {step === 5 && <SuccessCard />}

        </div>

      </div>

    </section>

  );

}