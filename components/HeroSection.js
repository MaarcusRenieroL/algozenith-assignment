import PhotoContainer from "@/components/PhotoContainer";
import HeroSectionContent from "@/components/HeroSectionContent";

export default function HeroSection() {
    return (
        <>
            <div className={"text-white bg-gradient-to-r from-[#05445E] to-[#022534] px-10 py-20"}> {/* Hero Section */}
                <div className={"grid xs:grid-cols-1 md:grid-cols-2"}> {/* Container for the contents */}
                    <div> {/* First Grid */}
                        <HeroSectionContent />
                    </div>
                    <div className={"flex items-center justify-center"}> {/* Second grid */}
                        <PhotoContainer />
                    </div>
                </div>
            </div>
        </>
    )
}