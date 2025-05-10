import FormContact from "./FormContact";
import Location from "./Location";

export default function SectionContact() {
    return (
        <section className="pb-20">
            <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
            <FormContact />
            <Location />
        </section>
    )
}