/* EMTF Club Series — Photo & Video Consent (standalone) */
EMTF.addTemplate({
  id: "photo-consent",
  version: "2026.11",
  title: { en: "Photo & Video Consent", es: "Consentimiento de Imagen" },
  intro: {
    en: "We love sharing our students' progress, but only with your permission. Choose yes or no for each use. You can change your mind at any time by telling the club.",
    es: "Nos encanta compartir el progreso de nuestros alumnos, pero solo con su permiso. Elija sí o no para cada uso. Puede cambiar de opinión en cualquier momento comunicándolo al club."
  },
  sections: [
    {
      id: "person", title: { en: "Student", es: "Alumno" },
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "p_name", en: "Student's full name", es: "Nombre completo del alumno" },
          { id: "p_dob", en: "Date of birth", es: "Fecha de nacimiento" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "p_guardian", en: "Parent / guardian (if under 18)", es: "Padre, madre o tutor/a (si es menor)" },
          { id: "p_contact", en: "Phone or email", es: "Teléfono o correo electrónico" }
        ]}
      ]
    },
    {
      id: "uses", title: { en: "How images may be used", es: "Cómo pueden usarse las imágenes" },
      locked: true, keep: true,
      blocks: [
        { type: "note",
          en: "Each use is optional. Saying no never affects the student's place, treatment or gradings.",
          es: "Cada uso es opcional. Decir que no nunca afecta a la plaza, al trato ni a los exámenes del alumno." },
        { type: "yesno",
          head: { en: "I consent to photos and video of the student being used for…", es: "Autorizo el uso de fotos y vídeos del alumno para…" },
          rows: [
            { id: "u_internal", en: "Internal use — coaching feedback, grading records and certificates", es: "Uso interno: corrección técnica, registros de exámenes y diplomas" },
            { id: "u_private", en: "Private member groups (e.g. club WhatsApp or members' portal)", es: "Grupos privados de socios (p. ej. WhatsApp del club o portal de socios)" },
            { id: "u_web", en: "The club website, noticeboard and printed materials", es: "La web del club, el tablón de anuncios y material impreso" },
            { id: "u_social", en: "The club's public social media", es: "Las redes sociales públicas del club" },
            { id: "u_fed", en: "EMTF federation website, social media and events", es: "La web, redes sociales y eventos de la federación EMTF" },
            { id: "u_press", en: "Local press and media (e.g. a grading or competition result)", es: "Prensa y medios locales (p. ej. un resultado de examen o competición)" },
            { id: "u_name", en: "First name shown alongside images (surnames are never published)", es: "Nombre de pila junto a las imágenes (nunca se publican apellidos)" }
          ]}
      ]
    },
    {
      id: "promise", title: { en: "Our promise", es: "Nuestro compromiso" },
      locked: true,
      blocks: [
        { type: "lists", groups: [
          { h: { en: "The club will", es: "El club se compromete a" }, items: [
            { en: "Only use images that show students appropriately dressed and training safely.", es: "Usar solo imágenes en las que los alumnos aparezcan correctamente vestidos y entrenando con seguridad." },
            { en: "Never publish a child's full name, school or home location.", es: "No publicar nunca el nombre completo, el colegio ni el domicilio de un menor." },
            { en: "Remove images from club channels within 7 days of a request, where it is in our control.", es: "Retirar las imágenes de los canales del club en un plazo de 7 días tras la solicitud, cuando dependa de nosotros." },
            { en: "Ask families attending events not to share other students' images without permission.", es: "Pedir a las familias que asisten a eventos que no compartan imágenes de otros alumnos sin permiso." }
          ]}
        ]},
        { type: "clauses", items: [
          { en: "<b>Data protection:</b> {club} is responsible for these images. The legal basis is your consent, which you may withdraw at any time. Images are kept only while they are in use, and you may ask for access, correction or deletion, or complain to {authority}.",
            es: "<b>Protección de datos:</b> {club} es responsable de estas imágenes. La base jurídica es su consentimiento, que puede retirar en cualquier momento. Las imágenes se conservan solo mientras se utilizan y puede solicitar acceso, rectificación o supresión, o reclamar ante {authority}." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signature", es: "Firma" },
      locked: true, keep: true,
      blocks: [
        { type: "decl",
          en: "I am the student (18+) or their parent / legal guardian, and I give the consents marked above.",
          es: "Soy el alumno (mayor de edad) o su padre, madre o tutor/a legal, y otorgo los consentimientos marcados arriba." },
        { type: "signatures", boxes: [
          { label: { en: "Signature", es: "Firma" }, fields: [
            { id: "sig_name", en: "Name", es: "Nombre" }, { id: "sig_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Student (if 12+, to show they agree)", es: "Alumno (si tiene 12 años o más, en señal de acuerdo)" }, fields: [
            { id: "sig_s_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "o_recv", en: "Date received", es: "Fecha de recepción" },
          { id: "o_by", en: "Recorded by", es: "Registrado por" },
          { id: "o_withdrawn", en: "Withdrawn on (if applicable)", es: "Retirado el (si procede)" }
        ]}
      ]
    }
  ]
});
