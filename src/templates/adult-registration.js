/* EMTF Club Series — Adult Student Registration (18+) */
EMTF.addTemplate({
  id: "adult-registration",
  version: "2026.11",
  audience: "adult",
  title: { en: "Adult Student Registration", es: "Inscripción de Alumno Adulto" },
  summary: {
    en: "Enrolment for students aged 18+: details, health check, fees, conduct, photo consent, data protection and signatures.",
    es: "Inscripción para alumnos mayores de 18 años: datos, salud, cuotas, conducta, imagen, protección de datos y firmas."
  },
  intro: {
    en: "Welcome to the club. Please complete every section and sign on the final page. Your answers help us keep you safe and get the most from your training.",
    es: "Bienvenido/a al club. Complete todas las secciones y firme en la última página. Sus respuestas nos ayudan a mantenerle seguro/a y a sacar el máximo partido a su entrenamiento."
  },
  sections: [
    {
      id: "personal", title: { en: "Your details", es: "Sus datos" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "a_name", en: "Full name", es: "Nombre completo" },
          { id: "a_dob", en: "Date of birth", es: "Fecha de nacimiento" },
          { id: "a_id", en: "ID card / passport no.", es: "DNI / NIE / pasaporte" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "a_addr", en: "Home address", es: "Domicilio" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "a_tel", en: "Mobile", es: "Móvil" },
          { id: "a_mail", en: "Email", es: "Correo electrónico" },
          { id: "a_job", en: "Occupation (optional)", es: "Profesión (opcional)" }
        ]},
        { type: "note",
          en: "Your ID number is needed only to issue your federation licence and sports accident insurance.",
          es: "Su número de documento solo se necesita para tramitar su licencia federativa y el seguro de accidentes deportivos." }
      ]
    },
    {
      id: "experience", title: { en: "Martial arts experience", es: "Experiencia en artes marciales" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "x_style", en: "Previous style(s), if any", es: "Estilo(s) anterior(es), si los hay" },
          { id: "x_grade", en: "Highest grade held", es: "Grado más alto obtenido" },
          { id: "x_years", en: "Years trained", es: "Años de práctica" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "x_goals", en: "What would you most like to get from your training?", es: "¿Qué le gustaría conseguir con su entrenamiento?" }
        ]}
      ]
    },
    {
      id: "emergency", title: { en: "Emergency contacts", es: "Contactos de emergencia" },
      blocks: [
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
      id: "health", title: { en: "Health check", es: "Revisión de salud" },
      keep: true,
      blocks: [
        { type: "note",
          en: "Shared only with the instructors who need it to keep you safe. Answering yes does not stop you training — we may simply ask you to check with your doctor first.",
          es: "Solo se comparte con los instructores que lo necesitan para su seguridad. Responder sí no le impide entrenar; quizá le pidamos consultar antes con su médico." },
        { type: "yesno",
          head: { en: "Has a doctor ever told you, or do you currently have…", es: "¿Le ha indicado un médico, o tiene actualmente…" },
          rows: [
            { id: "h_heart", en: "A heart condition, high blood pressure, or chest pain during exercise?", es: "¿Una afección cardíaca, tensión alta o dolor en el pecho al hacer ejercicio?" },
            { id: "h_dizzy", en: "Dizziness, fainting or loss of consciousness?", es: "¿Mareos, desmayos o pérdida de consciencia?" },
            { id: "h_breath", en: "Asthma or another breathing condition?", es: "¿Asma u otra afección respiratoria?" },
            { id: "h_joint", en: "A bone, joint, back or muscle problem that exercise could make worse?", es: "¿Un problema de huesos, articulaciones, espalda o músculos que el ejercicio pueda empeorar?" },
            { id: "h_head", en: "A head injury or concussion in the last 12 months?", es: "¿Un golpe en la cabeza o conmoción en los últimos 12 meses?" },
            { id: "h_preg", en: "Pregnancy, or a recent operation?", es: "¿Embarazo o una operación reciente?" },
            { id: "h_other", en: "Any other reason you should not take part in physical activity?", es: "¿Algún otro motivo por el que no deba realizar actividad física?" }
          ]},
        { type: "fields", cols: 2, items: [
          { id: "h_detail", tall: true, en: "If you answered yes, please give details", es: "Si respondió sí, indique los detalles" },
          { id: "h_meds", tall: true, en: "Allergies and medication", es: "Alergias y medicación" }
        ]},
        { type: "checks", items: [
          { id: "h_firstaid", en: "I consent to first aid being given by a trained club member, and to the club calling 112 in an emergency.", es: "Autorizo que un miembro formado del club preste primeros auxilios y que el club llame al 112 en caso de emergencia." }
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
          { en: "Fees are paid monthly in advance by SEPA direct debit. A separate SEPA mandate is signed with this registration.",
            es: "Las cuotas se abonan mensualmente por adelantado mediante domiciliación SEPA. Junto a esta inscripción se firma una orden de domiciliación SEPA independiente." },
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
          { h: { en: "As a member, I will", es: "Como socio/a, me comprometo a" }, items: [
            { en: "Bow on entering and leaving the dojang and follow instructors' directions.", es: "Saludar al entrar y salir del dojang y seguir las indicaciones de los instructores." },
            { en: "Arrive on time, in a clean dobok, with nails short and jewellery removed.", es: "Llegar puntual, con el dobok limpio, uñas cortas y sin joyas." },
            { en: "Train with control and look after every partner's safety, whatever their size or grade.", es: "Entrenar con control y cuidar la seguridad de cada compañero, sea cual sea su tamaño o grado." },
            { en: "Tell the instructor before class about any injury or health change.", es: "Avisar al instructor antes de la clase de cualquier lesión o cambio de salud." },
            { en: "Never use techniques outside class except to protect myself or others from harm.", es: "No usar nunca técnicas fuera de clase, salvo para protegerme a mí o a otros." },
            { en: "Set a good example to junior students, in and out of the club, including online.", es: "Dar buen ejemplo a los alumnos más jóvenes, dentro y fuera del club, incluido en internet." }
          ]},
          { h: { en: "The club will", es: "El club se compromete a" }, items: [
            { en: "Provide qualified instructors and safe, well-supervised classes.", es: "Ofrecer instructores titulados y clases seguras y bien supervisadas." },
            { en: "Give clear feedback on your progress and fair, transparent gradings.", es: "Darle información clara sobre su progreso y exámenes justos y transparentes." },
            { en: "Keep first aid cover available at every class.", es: "Mantener cobertura de primeros auxilios en cada clase." },
            { en: "Listen to any concern and deal with it promptly and in confidence.", es: "Escuchar cualquier inquietud y atenderla con rapidez y confidencialidad." }
          ]}
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
          { en: "The club holds public liability insurance and members are covered by sports accident insurance through their federation licence. Details are available on request.",
            es: "El club dispone de seguro de responsabilidad civil y los socios están cubiertos por el seguro de accidentes deportivos de su licencia federativa. Los detalles están disponibles a petición." },
          { en: "I confirm I am fit to take part, that my health answers are accurate, and that I will tell the club about any change. Nothing in this registration limits the club's legal responsibility for its own negligence.",
            es: "Confirmo que estoy en condiciones de participar, que mis respuestas de salud son correctas y que informaré al club de cualquier cambio. Nada en esta inscripción limita la responsabilidad legal del club por su propia negligencia." }
        ]}
      ]
    },
    {
      id: "images", title: { en: "Photos and video", es: "Fotografías y vídeo" },
      keep: true,
      blocks: [
        { type: "note",
          en: "Each use is optional and can be withdrawn at any time. Saying no never affects your membership.",
          es: "Cada uso es opcional y puede retirarse en cualquier momento. Decir que no nunca afecta a su inscripción." },
        { type: "yesno",
          head: { en: "I consent to images of me being used for…", es: "Autorizo el uso de mi imagen para…" },
          rows: [
            { id: "img_internal", en: "Internal use — coaching feedback, grading records and certificates", es: "Uso interno: corrección técnica, registros de exámenes y diplomas" },
            { id: "img_private", en: "Private member groups (e.g. club WhatsApp or members' portal)", es: "Grupos privados de socios (p. ej. WhatsApp del club o portal de socios)" },
            { id: "img_web", en: "The club website and printed materials", es: "La web del club y material impreso" },
            { id: "img_social", en: "Public social media", es: "Redes sociales públicas" }
          ]}
      ]
    },
    {
      id: "data", title: { en: "Data protection", es: "Protección de datos" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "<b>Controller:</b> {club}. <b>Purpose:</b> managing membership, fees, safety, gradings and federation licensing. <b>Legal basis:</b> performance of this registration; consent for health data and images; legal obligations.",
            es: "<b>Responsable:</b> {club}. <b>Finalidad:</b> gestionar la inscripción, cuotas, seguridad, exámenes y licencias federativas. <b>Base jurídica:</b> ejecución de esta inscripción; consentimiento para datos de salud e imágenes; obligaciones legales." },
          { en: "<b>Recipients:</b> the federation (licensing and gradings), insurers, the club's bank for direct debits, and emergency services if needed. Data is never sold.",
            es: "<b>Destinatarios:</b> la federación (licencias y exámenes), aseguradoras, el banco del club para las domiciliaciones y los servicios de emergencia si fuera necesario. Los datos nunca se venden." },
          { en: "<b>Retention:</b> for the length of membership, then only as long as required by law. <b>Your rights:</b> access, rectification, erasure, objection, restriction and portability, by writing to the club. You may complain to {authority}.",
            es: "<b>Conservación:</b> mientras dure la inscripción y, después, solo el tiempo exigido por ley. <b>Sus derechos:</b> acceso, rectificación, supresión, oposición, limitación y portabilidad, escribiendo al club. Puede reclamar ante {authority}." }
        ]},
        { type: "checks", items: [
          { id: "d_news", en: "Optional: I would like to receive club news and event information by email or WhatsApp.", es: "Opcional: deseo recibir noticias e información de eventos del club por correo electrónico o WhatsApp." }
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
          { en: "Membership can be paused for injury or illness (with a medical note) or for extended absence, by agreement with the club.",
            es: "La inscripción puede pausarse por lesión o enfermedad (con justificante médico) o por ausencia prolongada, de mutuo acuerdo con el club." },
          { en: "The club may end membership after serious or repeated breaches of the code of conduct, once it has been discussed with you. Fees for untrained full months will be refunded.",
            es: "El club puede dar por finalizada la inscripción tras incumplimientos graves o reiterados del código de conducta, después de hablarlo con usted. Se devolverán las cuotas de los meses completos no disfrutados." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Declaration and signatures", es: "Declaración y firmas" },
      locked: true, keep: true,
      blocks: [
        { type: "decl",
          en: "I am 18 or over. I have read and agree to this registration, and the information I have given is correct.",
          es: "Tengo 18 años o más. He leído y acepto esta inscripción, y la información facilitada es correcta." },
        { type: "signatures", boxes: [
          { label: { en: "Member signature", es: "Firma del socio/a" }, fields: [
            { id: "sig_m_name", en: "Name", es: "Nombre" }, { id: "sig_m_date", en: "Date", es: "Fecha" } ] },
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
          { id: "o_health", en: "Health answers reviewed", es: "Respuestas de salud revisadas" },
          { id: "o_gp", en: "GP clearance requested (if needed)", es: "Autorización médica solicitada (si procede)" },
          { id: "o_photo", en: "Photo preferences recorded", es: "Preferencias de imagen registradas" },
          { id: "o_ind", en: "First-class induction done", es: "Bienvenida en primera clase hecha" }
        ]}
      ]
    }
  ]
});
