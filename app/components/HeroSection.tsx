import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col items-center justify-center mt-[16.25rem] mb-20">
            <div className="flex flex-row items-center gap-5 mb-6">
                <Image
                    src="/maison_toutou.avif"
                    width={100}
                    height={100}
                    priority={true}
                    quality={100}
                    alt="Logo La maison de toutou"
                    className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <div className="relative">
                    <h1 className="text-4xl font-bold">La maison de toutou</h1>
                    <Image
                        src="/Patte_verte.png"
                        width={100}
                        height={100}
                        priority={true}
                        quality={100}
                        alt="Patte verte"
                        className="w-[50px] h-[50px] object-cover rotate-45 absolute -bottom-4 right-5 animate-pulse"
                    />
                </div>
            </div>
            <p className="text-lg text-[var(--foreground-alt)]">
                {`Parce qu'il n'est pas toujours possible d'emmener son animal domestique sur son lieu de vacances
                ou autres occasions, je vous propose un service de garderie à domicile qui lui est entièrement dédié.`}
            </p>
            <p className="text-lg mt-5 text-[var(--foreground-alt)]">
                {`Véritable Club Med pour toutou, équipé pour apporter tout le confort et l'amour que votre fidèle compagnon mérite.`}
            </p>
            <p className="text-lg mt-5 text-[var(--foreground-alt)]">
                {`Il sera à "La Maison de Toutou" comme il est chez vous.`}
            </p>
            <div className="relative w-full max-w-4xl flex justify-between items-center mt-8">
                <div className="grid grid-cols-2 h-full gap-7">
                    <Image
                        src="/Os_vert.png"
                        width={30}
                        height={30}
                        priority={true}
                        quality={100}
                        alt="Os vert"
                        className="animate-[spin_3s_linear_infinite] mt-16"
                    />
                    <Image
                        src="/basketball.svg"
                        width={40}
                        height={40}
                        priority={true}
                        quality={100}
                        alt="Ballon basketball"
                        className='pt-36 animate-[bounce_1s_ease-in-out_infinite] [filter:invert(56%)_sepia(75%)_saturate(1595%)_hue-rotate(346deg)_brightness(97%)_contrast(96%)]'
                    />
                </div>
                <Image
                    src="/Chien_2.png"
                    width={250}
                    height={250}
                    priority={true}
                    quality={100}
                    alt="Chien"
                />
            </div>
            <p className="text-lg font-semibold mt-5 text-[var(--foreground)]">
                {`Ouvert tous les jours à 12 min. de Belleville-en-Beaujolais`}
            </p>
            <p className="text-lg mt-5 text-[var(--foreground-alt)]">
                {`Renseignements ou réservations :`}
            </p>
            <span className="text-lg font-bold mt-5 text-[var(--foreground-alt)]">
                {`06.80.32.26.10`}
            </span>
            <Button className="my-8">
                Réserver maintenant
            </Button>
        </section>
    )
}