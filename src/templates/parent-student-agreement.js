/* EMTF Club Series — Parent & Student Agreement
   Converted from emtf-parent-student-agreement.html (Sept 2026 master).
   Block types are documented in src/app.js (renderBlock). */
EMTF.addTemplate({
  id: "parent-student-agreement",
  version: "2026.11",
  audience: "junior",
  title: { en: "Parent & Student Agreement", es: "Acuerdo de Padres y Alumno" },
  summary: {
    en: "Full junior enrolment: details, health, collection, fees, conduct, photo consent, data protection and signatures.",
    es: "Inscripción completa de menores: datos, salud, recogida, cuotas, conducta, imagen, protección de datos y firmas."
  },
  intro: {
    en: "This agreement sets out how we train together, what the club commits to, and what we ask of students and families. Please read it with your child, complete every section and sign on the final page.",
    es: "Este acuerdo explica cómo entrenamos juntos, qué se compromete a ofrecer el club y qué pedimos a alumnos y familias. Léalo con su hijo/a, complete todas las secciones y firme en la última página."
  },
  sections: [
    {
      id: "student", title: { en: "Student details", es: "Datos del alumno" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "s_name", en: "Full name", es: "Nombre completo" },
          { id: "s_dob", en: "Date of birth", es: "Fecha de nacimiento" },
          { id: "s_grade", en: "Current grade", es: "Grado actual" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "s_addr", en: "Home address", es: "Domicilio" },
          { id: "s_school", en: "School attended", es: "Colegio" }
        ]}
      ]
    },
    {
      id: "guardians", title: { en: "Parent / guardian details", es: "Datos del padre, madre o tutor/a" },
      blocks: [
        { type: "fields", cols: 4, items: [
          { id: "g1_name", en: "Guardian 1 — name", es: "Tutor/a 1 — nombre" },
          { id: "g1_rel", en: "Relationship", es: "Parentesco" },
          { id: "g1_tel", en: "Mobile", es: "Móvil" },
          { id: "g1_mail", en: "Email", es: "Correo electrónico" }
        ]},
        { type: "fields", cols: 4, items: [
          { id: "g2_name", en: "Guardian 2 — name", es: "Tutor/a 2 — nombre" },
          { id: "g2_rel", en: "Relationship", es: "Parentesco" },
          { id: "g2_tel", en: "Mobile", es: "Móvil" },
          { id: "g2_mail", en: "Email", es: "Correo electrónico" }
        ]},
        { type: "note",
          en: "Any court order or arrangement affecting who may collect or be informed about the child must be disclosed to the club in writing.",
          es: "Cualquier resolución judicial o acuerdo que afecte a quién puede recoger o ser informado sobre el menor debe comunicarse al club por escrito." }
      ]
    },
    {
      id: "emergency", title: { en: "Emergency contacts", es: "Contactos de emergencia" },
      blocks: [
        { type: "note", en: "Please give contacts other than the guardians above.", es: "Indique contactos distintos de los tutores anteriores." },
        { type: "fields", cols: 3, items: [
          { id: "e1_name", en: "Name", es: "Nombre" },
          { id: "e1_rel", en: "Relationship", es: "Parentesco" },
          { id: "e1_tel", en: "Phone", es: "Teléfono" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "e2_name", en: "Name", es: "Nombre" },
          { id: "e2_rel", en: "Relationship", es: "Parentesco" },
          { id: "e2_tel", en: "Phone", es: "Teléfono" }
        ]}
      ]
    },
    {
      id: "health", title: { en: "Health information", es: "Información de salud" },
      blocks: [
        { type: "note",
          en: "Shared only with the instructors who need it to keep your child safe. Tell us straight away if anything changes.",
          es: "Solo se comparte con los instructores que lo necesitan para la seguridad de su hijo/a. Comuníquenos cualquier cambio de inmediato." },
        { type: "fields", cols: 2, items: [
          { id: "m_cond", tall: true, en: "Medical conditions (e.g. asthma, epilepsy, diabetes)", es: "Condiciones médicas (p. ej. asma, epilepsia, diabetes)" },
          { id: "m_meds", tall: true, en: "Allergies and medication", es: "Alergias y medicación" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "m_inj", tall: true, en: "Injuries or physical limitations", es: "Lesiones o limitaciones físicas" },
          { id: "m_needs", tall: true, en: "Additional needs we should know about to support your child", es: "Necesidades específicas que debamos conocer para apoyar a su hijo/a" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "m_card", en: "Health card no. (optional)", es: "Nº de tarjeta sanitaria (opcional)" },
          { id: "m_gp", en: "GP / health centre", es: "Médico / centro de salud" }
        ]},
        { type: "checks", items: [
          { id: "m_firstaid", en: "I consent to first aid being given by a trained club member.", es: "Autorizo que un miembro formado del club preste primeros auxilios." },
          { id: "m_emergency", en: "In an emergency, if I cannot be reached, I authorise the club to call 112 and follow the advice of medical services.", es: "En caso de emergencia, si no se me localiza, autorizo al club a llamar al 112 y seguir las indicaciones de los servicios médicos." }
        ]}
      ]
    },
    {
      id: "collection", title: { en: "Authorised collection", es: "Personas autorizadas para recoger" },
      blocks: [
        { type: "note",
          en: "Children will only be released to a guardian or a person named here. We may ask for ID.",
          es: "Los menores solo se entregarán a un tutor o a una persona indicada aquí. Podemos solicitar identificación." },
        { type: "fields", cols: 3, items: [
          { id: "c1_name", en: "Name", es: "Nombre" },
          { id: "c1_rel", en: "Relationship", es: "Parentesco" },
          { id: "c1_tel", en: "Phone", es: "Teléfono" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "c2_name", en: "Name", es: "Nombre" },
          { id: "c2_rel", en: "Relationship", es: "Parentesco" },
          { id: "c2_tel", en: "Phone", es: "Teléfono" }
        ]},
        { type: "checks", items: [
          { id: "c_alone", en: "(Students aged 12+) My child may leave the club unaccompanied at the end of class.", es: "(Alumnos de 12 años o más) Mi hijo/a puede salir solo/a del club al terminar la clase." }
        ]}
      ]
    },
    {
      id: "fees", title: { en: "Membership and fees", es: "Inscripción y cuotas" },
      blocks: [
        { type: "programmes" },
        { type: "fields", cols: 4, items: [
          { id: "start", en: "Start date", es: "Fecha de inicio" },
          { id: "minterm", en: "Minimum term", es: "Permanencia mínima", prefill: "minTerm" },
          { id: "notice", en: "Notice to cancel", es: "Preaviso de baja", prefill: "notice" },
          { id: "gradefees", en: "Grading / licence fees", es: "Cuotas de examen / licencia", prefill: "gradingFees" }
        ]},
        { type: "clauses", items: [
          { en: "Fees are paid monthly in advance by SEPA direct debit. A separate SEPA mandate is signed with this agreement.",
            es: "Las cuotas se abonan mensualmente por adelantado mediante domiciliación SEPA. Junto a este acuerdo se firma una orden de domiciliación SEPA independiente." },
          { en: "Fees cover the month, not individual classes. Missed classes are not refunded, but may be made up in another suitable class.",
            es: "La cuota cubre el mes, no clases sueltas. Las clases perdidas no se reembolsan, pero pueden recuperarse en otra clase adecuada." },
          { en: "Returned direct debits may incur the bank charge the club is billed. We will always contact you before taking any other step.",
            es: "Los recibos devueltos pueden generar el gasto bancario que se cobre al club. Siempre le contactaremos antes de tomar cualquier otra medida." },
          { en: "Any change to fees will be notified in writing at least 30 days in advance, and you may cancel before it applies.",
            es: "Cualquier cambio de cuota se comunicará por escrito con al menos 30 días de antelación, y podrá darse de baja antes de que se aplique." }
        ]}
      ]
    },
    {
      id: "conduct", title: { en: "Code of conduct", es: "Código de conducta" },
      blocks: [
        { type: "lists", groups: [
          { h: { en: "Our students", es: "Nuestros alumnos" }, items: [
            { en: "Bow on entering and leaving the dojang and follow instructors' directions.", es: "Saludan al entrar y salir del dojang y siguen las indicaciones de los instructores." },
            { en: "Arrive on time, in a clean dobok, with nails short and jewellery removed.", es: "Llegan puntuales, con el dobok limpio, uñas cortas y sin joyas." },
            { en: "Train with control and respect every partner's safety.", es: "Entrenan con control y respetan la seguridad de cada compañero." },
            { en: "Never use techniques outside class except to protect themselves or others from harm.", es: "Nunca usan técnicas fuera de clase, salvo para protegerse a sí mismos o a otros." },
            { en: "Speak kindly — no bullying, in or out of the club, including online.", es: "Hablan con respeto: nada de acoso, dentro o fuera del club, incluido en internet." }
          ]},
          { h: { en: "Our families", es: "Nuestras familias" }, items: [
            { en: "Drop off and collect on time; stay contactable during class.", es: "Dejan y recogen a sus hijos puntualmente y están localizables durante la clase." },
            { en: "Let instructors lead the class — questions are welcome afterwards.", es: "Dejan que los instructores dirijan la clase; las preguntas, al terminar." },
            { en: "Encourage every student, not only your own, from the viewing area.", es: "Animan a todos los alumnos, no solo a los suyos, desde la zona de espectadores." },
            { en: "Tell us about anything that may affect your child's training or wellbeing.", es: "Nos informan de todo lo que pueda afectar al entrenamiento o bienestar de su hijo/a." }
          ]},
          { h: { en: "Our club", es: "Nuestro club" }, items: [
            { en: "Qualified instructors holding a current Certificado de Delitos de Naturaleza Sexual.", es: "Instructores titulados con Certificado de Delitos de Naturaleza Sexual en vigor." },
            { en: "Safe, supervised classes with appropriate ratios and first aid cover.", es: "Clases seguras y supervisadas, con ratios adecuadas y cobertura de primeros auxilios." },
            { en: "Clear progress feedback and fair, transparent gradings.", es: "Información clara sobre el progreso y exámenes justos y transparentes." },
            { en: "A named safeguarding lead you can speak to in confidence.", es: "Una persona responsable de protección del menor con quien hablar en confianza." }
          ]}
        ]},
        { type: "fields", cols: 2, items: [
          { id: "sg_name", en: "Safeguarding lead", es: "Responsable de protección del menor", prefill: "safeguardingLead" },
          { id: "sg_contact", en: "Contact", es: "Contacto", prefill: "safeguardingContact" }
        ]}
      ]
    },
    {
      id: "risk", title: { en: "Safety and acknowledgement of risk", es: "Seguridad y reconocimiento de riesgos" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "Tang Soo Do is a physical, contact activity. Despite careful supervision, bumps, bruises, sprains and, rarely, more serious injuries can happen.",
            es: "El Tang Soo Do es una actividad física y de contacto. A pesar de una supervisión cuidadosa, pueden producirse golpes, moratones, esguinces y, en raras ocasiones, lesiones más graves." },
          { en: "The club holds public liability insurance and students are covered by sports accident insurance through their federation licence. Details are available on request.",
            es: "El club dispone de seguro de responsabilidad civil y los alumnos están cubiertos por el seguro de accidentes deportivos de su licencia federativa. Los detalles están disponibles a petición." },
          { en: "I confirm my child is fit to take part and I will tell the club about any change in their health. Nothing in this agreement limits the club's legal responsibility for its own negligence.",
            es: "Confirmo que mi hijo/a está en condiciones de participar e informaré al club de cualquier cambio en su salud. Nada en este acuerdo limita la responsabilidad legal del club por su propia negligencia." }
        ]}
      ]
    },
    {
      id: "images", title: { en: "Photos and video", es: "Fotografías y vídeo" },
      keep: true,
      blocks: [
        { type: "note",
          en: "Each use is optional and can be withdrawn at any time. Saying no never affects your child's place or treatment.",
          es: "Cada uso es opcional y puede retirarse en cualquier momento. Decir que no nunca afecta a la plaza ni al trato de su hijo/a." },
        { type: "yesno",
          head: { en: "I consent to images of my child being used for…", es: "Autorizo el uso de imágenes de mi hijo/a para…" },
          rows: [
            { id: "img_internal", en: "Internal use — coaching feedback, grading records and certificates", es: "Uso interno: corrección técnica, registros de exámenes y diplomas" },
            { id: "img_private", en: "Private member groups (e.g. club WhatsApp or members' portal)", es: "Grupos privados de socios (p. ej. WhatsApp del club o portal de socios)" },
            { id: "img_web", en: "The club website and printed materials", es: "La web del club y material impreso" },
            { id: "img_social", en: "Public social media (no full names are ever published)", es: "Redes sociales públicas (nunca se publican nombres completos)" }
          ]}
      ]
    },
    {
      id: "data", title: { en: "Data protection", es: "Protección de datos" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "<b>Controller:</b> {club}. <b>Purpose:</b> managing membership, fees, safety, gradings and federation licensing. <b>Legal basis:</b> performance of this agreement; consent for health data and images; legal obligations.",
            es: "<b>Responsable:</b> {club}. <b>Finalidad:</b> gestionar la inscripción, cuotas, seguridad, exámenes y licencias federativas. <b>Base jurídica:</b> ejecución de este acuerdo; consentimiento para datos de salud e imágenes; obligaciones legales." },
          { en: "<b>Recipients:</b> the federation (licensing and gradings), insurers, the club's bank for direct debits, and emergency services if needed. Data is never sold.",
            es: "<b>Destinatarios:</b> la federación (licencias y exámenes), aseguradoras, el banco del club para las domiciliaciones y los servicios de emergencia si fuera necesario. Los datos nunca se venden." },
          { en: "<b>Retention:</b> for the length of membership, then only as long as required by law. <b>Your rights:</b> access, rectification, erasure, objection, restriction and portability, by writing to the club. You may complain to {authority}.",
            es: "<b>Conservación:</b> mientras dure la inscripción y, después, solo el tiempo exigido por ley. <b>Sus derechos:</b> acceso, rectificación, supresión, oposición, limitación y portabilidad, escribiendo al club. Puede reclamar ante {authority}." }
        ]}
      ]
    },
    {
      id: "cancellation", title: { en: "Cancellation, pausing and withdrawal", es: "Baja, pausa y desistimiento" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "To cancel, give written notice (email is fine) within the notice period stated in the membership section. Direct debits stop after the notice period ends.",
            es: "Para darse de baja, comuníquelo por escrito (vale el correo electrónico) con el preaviso indicado en la sección de inscripción. Las domiciliaciones se detienen al finalizar el preaviso." },
          { en: "If you signed up online or away from the club, you have 14 days to withdraw without giving a reason, with a refund of any unused fees.",
            es: "Si se inscribió en línea o fuera del club, dispone de 14 días para desistir sin indicar motivo, con devolución de las cuotas no disfrutadas." },
          { en: "Membership can be paused for injury or illness (with a medical note) or for extended holidays, by agreement with the club.",
            es: "La inscripción puede pausarse por lesión o enfermedad (con justificante médico) o por vacaciones prolongadas, de mutuo acuerdo con el club." },
          { en: "The club may end membership after serious or repeated breaches of the code of conduct, once the family has been spoken to. Fees for untrained full months will be refunded.",
            es: "El club puede dar por finalizada la inscripción tras incumplimientos graves o reiterados del código de conducta, después de hablar con la familia. Se devolverán las cuotas de los meses completos no disfrutados." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Declaration and signatures", es: "Declaración y firmas" },
      locked: true, keep: true,
      blocks: [
        { type: "decl",
          en: "I am the parent or legal guardian of the student named above. I have read and agree to this agreement, and the information I have given is correct.",
          es: "Soy el padre, la madre o el tutor/a legal del alumno indicado. He leído y acepto este acuerdo, y la información facilitada es correcta." },
        { type: "signatures", boxes: [
          { label: { en: "Parent / guardian signature", es: "Firma del tutor/a" }, fields: [
            { id: "sig_g_name", en: "Name", es: "Nombre" }, { id: "sig_g_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Student signature", es: "Firma del alumno" },
            pledge: { en: "“I will train with respect, effort and control.”", es: "«Entrenaré con respeto, esfuerzo y control.»" },
            fields: [ { id: "sig_s_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "For the club", es: "Por el club" }, fields: [
            { id: "sig_c_name", en: "Instructor name", es: "Nombre del instructor" }, { id: "sig_c_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "o_mem", en: "Membership no.", es: "Nº de socio" },
          { id: "o_lic", en: "Federation licence no.", es: "Nº de licencia federativa" },
          { id: "o_recv", en: "Date received", es: "Fecha de recepción" }
        ]},
        { type: "checks", cols: 3, items: [
          { id: "o_sepa", en: "SEPA mandate signed", es: "Orden SEPA firmada" },
          { id: "o_sys", en: "Added to membership system", es: "Registrado en el sistema" },
          { id: "o_health", en: "Health info shared with instructors", es: "Salud comunicada a instructores" },
          { id: "o_photo", en: "Photo preferences recorded", es: "Preferencias de imagen registradas" },
          { id: "o_copy", en: "Copy given to family", es: "Copia entregada a la familia" },
          { id: "o_ind", en: "First-class induction done", es: "Bienvenida en primera clase hecha" }
        ]}
      ]
    }
  ]
});
