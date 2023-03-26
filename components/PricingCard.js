import Image from "next/image";

export default function PricingCard () {
    return (
        <>
            <div className={"h-fit w-3/4 border border-blue-800 border-opacity-10 rounded-xl xs:mt-10 md:mt-0"}>
                <div className={"px-5 pt-5 flex items-center justify-between"}>
                    <div>
                        <p>Premium Victory Batch</p>
                        <h1>19,999</h1>
                        <h1>13,999</h1>
                    </div>
                    <div className={"opacity-30"}>
                        <Image src={"/zenith.png"} alt={"zenith"} width={500} height={500} className={"w-fit h-fit"} />
                    </div>
                </div>
                <div className={"bg-gradient-to-b from-[#05445E] to-[#022534] bg-[url('../public/card-bg-grid.png')] text-white relative"}>
                    <Image src={"/card-bg-grid.png"} alt={"card-bg-grid"} width={1000} height={1000} className={"w-full h-full opacity-10 absolute object-cover mix-blend-overlay"} />
                    <div className={"p-5 space-y-14"}>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>100+ Hrs Content</p>
                            </div>
                        </div>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>50+ Hrs Contest</p>
                            </div>
                        </div>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>500+ Problems</p>
                            </div>
                        </div>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>Includes an interview bootcamp and access to a mentor network</p>
                            </div>
                        </div>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>Enjoy access to our content for one year (paid extensions available)</p>
                            </div>
                        </div>
                        <div className={"xs:flex items-center justify-left m-5"}>
                            <Image src={"/rectangle.png"} alt={"rectangle"} width={50} height={50} />
                            <div className={"ml-5"}>
                                <p>Flexible payment options, including no-cost EMI, are available.</p>
                            </div>
                        </div>
                        <div>
                            <button className={"bg-white rounded-2xl w-full p-4 text-black"}>Join Now &rarr; </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}