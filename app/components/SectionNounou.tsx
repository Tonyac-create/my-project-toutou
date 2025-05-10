import Image from "next/image";
import PattesPath from "./PattesPath";

export default function SectionNounou() {
    return (
        <section id="nounou" className="flex flex-col pt-32">
            <div className="flex flex-row items-center gap-3 mb-6">
                <Image
                    src="/niche.png"
                    width={50}
                    height={50}
                    priority={true}
                    quality={100}
                    alt="Niche"
                    className="w-[50px] h-[50px] object-cover"
                />
                <h2 className="text-4xl font-bold">Votre nounou</h2>
            </div>
            <div className="relative h-72">
                <PattesPath />
                <Image
                    src="/nounou.avif"
                    width={200}
                    height={200}
                    priority={true}
                    quality={100}
                    alt="Nounou"
                    className="rounded-full mb-6"
                />
            </div>
            <p className="text-lg text-[var(--foreground-alt)]">{`Ma passion pour les animaux remonte à ma plus tendre enfance, j'ai côtoyé le monde canin durant
             de nombreuses années, tant au titre de compétitrice qu'au titre de monitrice, ce qui m'a valu de passer :`}</p>
            <ul className="list-disc text-lg text-[var(--foreground-alt)] ml-7">
                <li>{`Le monitorat d'éducation canine`}</li>
                <li>{`Le certificat de capacité`}</li>
            </ul>
            <p className="text-lg text-[var(--foreground-alt)] mt-5">{`Mon cursus professionnel m'a également permis d'approfondir mes connaissances en tant qu'assistante 
            vétérinaire durant 13 ans.`}</p>
        </section>
    )
}