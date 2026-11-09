/* EMTF Club Series — Health & Medical Declaration (any age; renew yearly or on change) */
EMTF.addTemplate({
  id: "health-declaration",
  version: "2026.11",
  title: { en: "Health & Medical Declaration", es: "Declaración de Salud" },
  intro: {
    en: "Please complete this when joining, once a year, and whenever anything changes. It is shared only with the instructors who need it to keep the student safe.",
    es: "Complete este formulario al inscribirse, una vez al año y siempre que haya algún cambio. Solo se comparte con los instructores que lo necesitan para la seguridad del alumno."
  },
  sections: [
    {
      id: "student", title: { en: "Student", es: "Alumno" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "s_name", en: "Full name", es: "Nombre completo" },
          { id: "s_dob", en: "Date of birth", es: "Fecha de nacimiento" },
          { id: "s_grade", en: "Current grade", es: "Grado actual" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "s_contact", en: "Parent / guardian (if under 18)", es: "Padre, madre o tutor/a (si es menor)" },
          { id: "s_tel", en: "Contact phone", es: "Teléfono de contacto" },
          { id: "s_gp", en: "GP / health centre", es: "Médico / centro de salud" }
        ]}
      ]
    },
    {
      id: "conditions", title: { en: "Medical conditions", es: "Condiciones médicas" },
      keep: true,
      blocks: [
        { type: "yesno",
          head: { en: "Does the student have, or have they had…", es: "¿Tiene o ha tenido el alumno…" },
          rows: [
            { id: "c_asthma", en: "Asthma or another breathing condition", es: "Asma u otra afección respiratoria" },
            { id: "c_epilepsy", en: "Epilepsy, seizures or fainting", es: "Epilepsia, convulsiones o desmayos" },
            { id: "c_diabetes", en: "Diabetes", es: "Diabetes" },
            { id: "c_heart", en: "A heart condition or high blood pressure", es: "Una afección cardíaca o tensión alta" },
            { id: "c_allergy", en: "A serious allergy (e.g. nuts, stings, latex)", es: "Una alergia grave (p. ej. frutos secos, picaduras, látex)" },
            { id: "c_joint", en: "A bone, joint, back or muscle problem", es: "Un problema de huesos, articulaciones, espalda o músculos" },
            { id: "c_head", en: "A head injury or concussion in the last 12 months", es: "Un golpe en la cabeza o conmoción en los últimos 12 meses" },
            { id: "c_sight", en: "Sight or hearing difficulties", es: "Dificultades de visión o audición" },
            { id: "c_other", en: "Any other condition the instructor should know about", es: "Cualquier otra condición que el instructor deba conocer" }
          ]},
        { type: "fields", cols: 1, items: [
          { id: "c_detail", tall: true, en: "If yes to any, please give details and what we should do if it happens in class", es: "Si respondió sí, indique los detalles y qué debemos hacer si ocurre en clase" }
        ]}
      ]
    },
    {
      id: "medication", title: { en: "Medication", es: "Medicación" },
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "m_regular", tall: true, en: "Regular medication", es: "Medicación habitual" },
          { id: "m_emergency", tall: true, en: "Emergency medication (e.g. inhaler, auto-injector) and where it is kept", es: "Medicación de emergencia (p. ej. inhalador, autoinyector) y dónde se guarda" }
        ]},
        { type: "checks", items: [
          { id: "m_brings", en: "The student will bring any emergency medication to every class.", es: "El alumno traerá su medicación de emergencia a cada clase." }
        ]}
      ]
    },
    {
      id: "support", title: { en: "Additional needs", es: "Necesidades específicas" },
      blocks: [
        { type: "fields", cols: 1, items: [
          { id: "n_needs", tall: true, en: "Anything that helps us support the student (e.g. learning, sensory or emotional needs)", es: "Todo lo que nos ayude a apoyar al alumno (p. ej. necesidades de aprendizaje, sensoriales o emocionales)" }
        ]}
      ]
    },
    {
      id: "consent", title: { en: "Consent", es: "Consentimiento" },
      locked: true,
      blocks: [
        { type: "checks", items: [
          { id: "k_firstaid", en: "I consent to first aid being given by a trained club member.", es: "Autorizo que un miembro formado del club preste primeros auxilios." },
          { id: "k_112", en: "In an emergency, if I cannot be reached, I authorise the club to call 112 and follow the advice of medical services.", es: "En caso de emergencia, si no se me localiza, autorizo al club a llamar al 112 y seguir las indicaciones de los servicios médicos." }
        ]},
        { type: "clauses", items: [
          { en: "<b>Data protection:</b> {club} holds this health information with your consent, only to keep the student safe. It is shared only with instructors who need it, kept for the length of membership, and you may withdraw consent or ask for it to be corrected or deleted at any time.",
            es: "<b>Protección de datos:</b> {club} conserva esta información de salud con su consentimiento, solo para la seguridad del alumno. Se comparte únicamente con los instructores que la necesitan, se conserva mientras dure la inscripción y puede retirar su consentimiento o pedir su rectificación o supresión en cualquier momento." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Declaration", es: "Declaración" },
      locked: true, keep: true,
      blocks: [
        { type: "decl",
          en: "The information above is correct. I will tell the club straight away if anything changes.",
          es: "La información anterior es correcta. Informaré al club de inmediato si hay algún cambio." },
        { type: "signatures", boxes: [
          { label: { en: "Signature (student 18+, or parent / guardian)", es: "Firma (alumno mayor de edad, o padre, madre o tutor/a)" }, fields: [
            { id: "sig_name", en: "Name", es: "Nombre" }, { id: "sig_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Received by the club", es: "Recibido por el club" }, fields: [
            { id: "sig_c_name", en: "Instructor name", es: "Nombre del instructor" }, { id: "sig_c_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "o_review", en: "Next review due", es: "Próxima revisión" },
          { id: "o_shared", en: "Shared with (instructors)", es: "Compartido con (instructores)" },
          { id: "o_plan", en: "Care plan needed?", es: "¿Plan de cuidados necesario?" }
        ]}
      ]
    }
  ]
});
