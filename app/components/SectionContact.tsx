import FormContact from "./FormContact";
import Location from "./Location";

export default function SectionContact() {
    return (
        <section id="contact" className="pb-20 pt-32">
            <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
            <FormContact />
            <Location />
        </section>
    )
}