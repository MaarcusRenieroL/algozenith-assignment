import Image from "next/image";

export default function PhotoContainer() {
    return (
        <>
            <Image src={"/hero-image-1.png"} alt={"hero-image"} width={650} height={650}/>
        </>
    )
}