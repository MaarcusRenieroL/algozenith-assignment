import PricingInfo from "@/components/PricingInfo";
import PricingCard from "@/components/PricingCard";
import Image from "next/image";

export default function PricingSection() {
    return (
        <>
                <div className={"grid xs:grid-cols-1 lg:grid-cols-2 p-10 relative"}>
                    <Image src={"/bg-graph.png"} alt={"card-bg-grid"} width={1000} height={1000} className={"w-full h-full absolute object-cover mix-blend-overlay"} />
                    <div>
                        <PricingInfo />
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <PricingCard />
                    </div>
                </div>
        </>
    );
}