/* EMTF Club Series — Accident & Incident Report (completed by the club) */
EMTF.addTemplate({
  id: "incident-report",
  version: "2026.11",
  title: { en: "Accident & Incident Report", es: "Informe de Accidente e Incidente" },
  intro: {
    en: "To be completed by the instructor or first aider as soon as possible after any accident, injury or near miss. Stick to facts: what you saw, heard and did.",
    es: "Debe completarlo el instructor o la persona de primeros auxilios lo antes posible tras cualquier accidente, lesión o casi accidente. Cíñase a los hechos: lo que vio, oyó e hizo."
  },
  sections: [
    {
      id: "what", title: { en: "What happened", es: "Qué ocurrió" },
      locked: true,
      blocks: [
        { type: "checks", cols: 3, items: [
          { id: "t_injury", en: "Injury", es: "Lesión" },
          { id: "t_illness", en: "Illness", es: "Enfermedad" },
          { id: "t_near", en: "Near miss", es: "Casi accidente" },
          { id: "t_damage", en: "Damage to property", es: "Daños materiales" },
          { id: "t_behaviour", en: "Behaviour incident", es: "Incidente de conducta" },
          { id: "t_other", en: "Other", es: "Otro" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "w_date", en: "Date", es: "Fecha" },
          { id: "w_time", en: "Time", es: "Hora" },
          { id: "w_where", en: "Location (e.g. mat area, changing room)", es: "Lugar (p. ej. tatami, vestuario)" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "w_class", en: "Class / activity at the time", es: "Clase / actividad en ese momento" },
          { id: "w_instr", en: "Instructor in charge", es: "Instructor responsable" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "w_desc", tall: true, en: "Description — what happened, in order", es: "Descripción — qué ocurrió, en orden" }
        ]}
      ]
    },
    {
      id: "person", title: { en: "Person involved", es: "Persona afectada" },
      locked: true,
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "p_name", en: "Full name", es: "Nombre completo" },
          { id: "p_age", en: "Age", es: "Edad" },
          { id: "p_role", en: "Student / visitor / staff", es: "Alumno / visitante / personal" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "p_injury", en: "Injury and part of body", es: "Lesión y parte del cuerpo" },
          { id: "p_cond", en: "Relevant medical conditions", es: "Condiciones médicas relevantes" }
        ]}
      ]
    },
    {
      id: "response", title: { en: "Action taken", es: "Medidas adoptadas" },
      locked: true, keep: true,
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "a_firstaid", tall: true, en: "First aid given", es: "Primeros auxilios prestados" },
          { id: "a_by", tall: true, en: "Given by (name) and time", es: "Prestados por (nombre) y hora" }
        ]},
        { type: "yesno",
          head: { en: "Was…", es: "¿Se…" },
          rows: [
            { id: "a_112", en: "112 / an ambulance called?", es: "llamó al 112 / a una ambulancia?" },
            { id: "a_hospital", en: "The person taken to hospital or advised to see a doctor?", es: "llevó a la persona al hospital o se le aconsejó acudir al médico?" },
            { id: "a_parent", en: "A parent / guardian or emergency contact informed?", es: "informó al padre, madre, tutor/a o contacto de emergencia?" },
            { id: "a_return", en: "The person able to continue training?", es: "pudo la persona continuar entrenando?" }
          ]},
        { type: "fields", cols: 3, items: [
          { id: "a_who", en: "Who was informed", es: "A quién se informó" },
          { id: "a_when", en: "Time informed", es: "Hora del aviso" },
          { id: "a_how", en: "How (phone, in person…)", es: "Cómo (teléfono, en persona…)" }
        ]}
      ]
    },
    {
      id: "witnesses", title: { en: "Witnesses", es: "Testigos" },
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "x1", en: "Name and contact", es: "Nombre y contacto" },
          { id: "x2", en: "Name and contact", es: "Nombre y contacto" }
        ]}
      ]
    },
    {
      id: "follow", title: { en: "Follow-up", es: "Seguimiento" },
      blocks: [
        { type: "fields", cols: 1, items: [
          { id: "f_cause", en: "Likely cause", es: "Causa probable" },
          { id: "f_prevent", en: "What will we change to stop it happening again?", es: "¿Qué cambiaremos para evitar que vuelva a ocurrir?" }
        ]},
        { type: "checks", cols: 3, items: [
          { id: "f_insurer", en: "Insurer / federation notified", es: "Aseguradora / federación notificada" },
          { id: "f_family", en: "Family followed up", es: "Seguimiento con la familia" },
          { id: "f_closed", en: "Incident closed", es: "Incidente cerrado" }
        ]}
      ]
    },
    {
      id: "sg", title: { en: "Safeguarding", es: "Protección del menor" },
      locked: true,
      blocks: [
        { type: "note",
          en: "If this incident raises any concern about a child's welfare, do not record it here. Speak to the club's safeguarding lead today and follow the EMTF Safeguarding Policy.",
          es: "Si este incidente genera alguna preocupación sobre el bienestar de un menor, no lo registre aquí. Hable hoy con la persona responsable de protección del menor del club y siga la Política de Protección de la EMTF." },
        { type: "fields", cols: 2, items: [
          { id: "sg_name", en: "Safeguarding lead", es: "Responsable de protección del menor", prefill: "safeguardingLead" },
          { id: "sg_contact", en: "Contact", es: "Contacto", prefill: "safeguardingContact" }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signatures", es: "Firmas" },
      locked: true, keep: true,
      blocks: [
        { type: "signatures", boxes: [
          { label: { en: "Completed by", es: "Completado por" }, fields: [
            { id: "sig_by_name", en: "Name", es: "Nombre" }, { id: "sig_by_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Club lead / head instructor", es: "Responsable del club / instructor jefe" }, fields: [
            { id: "sig_hi_name", en: "Name", es: "Nombre" }, { id: "sig_hi_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Parent / guardian (seen)", es: "Padre, madre o tutor/a (visto)" }, fields: [
            { id: "sig_p_date", en: "Date", es: "Fecha" } ] }
        ]},
        { type: "clauses", items: [
          { en: "<b>Confidential.</b> {club} keeps this report securely to manage safety and insurance claims, shares it only with those who need it (insurer, federation, emergency services) and keeps it as long as the law requires.",
            es: "<b>Confidencial.</b> {club} conserva este informe de forma segura para gestionar la seguridad y las reclamaciones al seguro, lo comparte solo con quienes lo necesitan (aseguradora, federación, servicios de emergencia) y lo conserva el tiempo que exija la ley." }
        ]}
      ]
    }
  ]
});
