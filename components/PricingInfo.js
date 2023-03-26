import Image from "next/image";

export default function PricingInfo () {
    return (
        <>
            <div className={"xs:text-center lg:text-left p-10 flex flex-col"}>
                <h1 className={"font-bold xs:text-4xl"}>Invest in skills</h1> < span className={"text-5xl font-bold text-blue-500"}>earn 10X</span> <h1 className={"font-bold xs:text-4xl"}>of what you paid</h1>
                
                <p className={"mt-10 font-light"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div>
                <div className={"grid xs:grid-cols-1 lg:grid-cols-2"}>
                    <div className={"xs:flex items-center justify-left m-5"}>
                        <Image src={"/grayscale-rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <div className={"ml-5"}>
                            <p>1.2Cr/Year</p>
                            <p>Highest fresher package</p>
                        </div>
                    </div>
                    <div className={"xs:flex items-center justify-left m-5"}>
                        <Image src={"/grayscale-rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <div className={"ml-5"}>
                            <p>Multiple &lt; 100 Ranks</p>
                            <p>in kickstart last year</p>
                        </div>
                    </div>
                    <div className={"xs:flex items-center justify-left m-5"}>
                        <Image src={"/grayscale-rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <div className={"ml-5"}>
                            <p>1000+ offers</p>
                            <p>from top companies</p>
                        </div>
                    </div>
                    <div className={"xs:flex items-center justify-left m-5"}>
                        <Image src={"/grayscale-rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <div className={"ml-5"}>
                            <p>Trusted by IITians</p>
                            <p>for their career prep</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}