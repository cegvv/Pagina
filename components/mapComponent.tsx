export default function GoogleMap() {
return (
    <iframe
        title="Ubicación en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9051650888287!2d-89.36966142496954!3d13.724191086664826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63287911f9d023%3A0x74e11569190f4bc7!2sCentro%20Escolar%20%22Gustavo%20Vides%20Vald%C3%A9s%22!5e0!3m2!1ses-419!2ssv!4v1694308174537!5m2!1ses-419!2ssv"
        style={{
            border: '0',
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
);
}
