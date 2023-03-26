import Image from "next/image";

export default function HeroSectionContent() {
    return (
        <>
            <div className={"h-full flex flex-col items-center justify-center"}>
                <div className={"flex xs:flex-col items-center justify-center xs:text-center space-y-10 mb-10"}>
                    <h1 className={"xs:text-4xl font-bold"}>Be Better at DSA & CP</h1>
    
                    <p className={"xs:text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
    
                <div className={"grid xs:grid-cols-1 lg:grid-cols-2"}>
                    <div className={"xs:flex items-center justify-center space-x-5 m-4"}>
                        <Image src={"/rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className={"xs:flex items-center justify-center space-x-5 m-4"}>
                        <Image src={"/rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className={"xs:flex items-center justify-center space-x-5 m-4"}>
                        <Image src={"/rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className={"xs:flex items-center justify-center space-x-5 m-4"}>
                        <Image src={"/rectangle.png"} alt={"rectangle"} width={100} height={100} className={"w-fit h-fit"} />
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </>
    )
}