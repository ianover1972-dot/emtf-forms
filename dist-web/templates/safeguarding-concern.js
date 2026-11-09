/* EMTF Club Series — Safeguarding Concern Record (confidential, for the club's safeguarding lead) */
EMTF.addTemplate({
  id: "safeguarding-concern",
  version: "2026.11",
  title: { en: "Safeguarding Concern Record", es: "Registro de Preocupación sobre Protección del Menor" },
  intro: {
    en: "Confidential. Complete as soon as possible, ideally the same day, and give it only to the club's safeguarding lead. Record facts and the child's own words. Do not investigate, question the child further or promise to keep a secret.",
    es: "Confidencial. Complételo lo antes posible, idealmente el mismo día, y entréguelo solo a la persona responsable de protección del menor del club. Anote hechos y las palabras exactas del menor. No investigue, no vuelva a preguntar al menor ni le prometa guardar un secreto."
  },
  sections: [
    {
      id: "danger", title: { en: "Immediate safety", es: "Seguridad inmediata" },
      locked: true,
      blocks: [
        { type: "note",
          en: "If a child is in immediate danger, call 112 now. Complete this record afterwards.",
          es: "Si un menor está en peligro inmediato, llame ahora al 112. Complete este registro después." },
        { type: "fields", cols: 2, items: [
          { id: "sg_name", en: "Safeguarding lead", es: "Responsable de protección del menor", prefill: "safeguardingLead" },
          { id: "sg_contact", en: "Contact", es: "Contacto", prefill: "safeguardingContact" }
        ]}
      ]
    },
    {
      id: "child", title: { en: "The child", es: "El menor" },
      locked: true,
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "c_name", en: "Child's full name", es: "Nombre completo del menor" },
          { id: "c_dob", en: "Date of birth or age", es: "Fecha de nacimiento o edad" },
          { id: "c_grade", en: "Class / group", es: "Clase / grupo" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "c_guardians", en: "Parent(s) / guardian(s)", es: "Padre(s), madre(s) o tutor(es)" }
        ]}
      ]
    },
    {
      id: "concern", title: { en: "The concern", es: "La preocupación" },
      locked: true,
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "q_date", en: "Date", es: "Fecha" },
          { id: "q_time", en: "Time", es: "Hora" },
          { id: "q_where", en: "Where", es: "Lugar" }
        ]},
        { type: "checks", cols: 2, items: [
          { id: "q_said", en: "Something the child said", es: "Algo que dijo el menor" },
          { id: "q_seen", en: "Something seen (e.g. an injury or behaviour)", es: "Algo observado (p. ej. una lesión o un comportamiento)" },
          { id: "q_told", en: "Information from another person", es: "Información de otra persona" },
          { id: "q_change", en: "A change in the child's behaviour or appearance", es: "Un cambio en el comportamiento o aspecto del menor" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "q_what", tall: true, en: "What happened — facts only, in order", es: "Qué ocurrió — solo hechos, en orden" },
          { id: "q_words", tall: true, en: "The child's own words, exactly as said (and what you said)", es: "Las palabras exactas del menor (y lo que usted dijo)" },
          { id: "q_marks", en: "Any visible injury: where on the body and what it looked like", es: "Cualquier lesión visible: en qué parte del cuerpo y qué aspecto tenía" }
        ]},
        { type: "note",
          en: "Do not photograph injuries or ask the child to show them. Describe only what you saw.",
          es: "No fotografíe las lesiones ni pida al menor que las enseñe. Describa solo lo que vio." }
      ]
    },
    {
      id: "reporter", title: { en: "Person reporting", es: "Persona que informa" },
      locked: true,
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "r_name", en: "Name", es: "Nombre" },
          { id: "r_role", en: "Role in the club", es: "Función en el club" },
          { id: "r_when", en: "Date and time this record was made", es: "Fecha y hora de este registro" }
        ]}
      ]
    },
    {
      id: "action", title: { en: "Action taken", es: "Medidas adoptadas" },
      locked: true, keep: true,
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "a_lead", en: "Passed to the safeguarding lead (name, date and time)", es: "Entregado a la persona responsable (nombre, fecha y hora)" },
          { id: "a_ref", en: "Referred to (children's services, police) and reference no.", es: "Derivado a (servicios sociales, policía) y nº de referencia" }
        ]},
        { type: "yesno",
          head: { en: "Has the safeguarding lead…", es: "¿La persona responsable ha…" },
          rows: [
            { id: "a_fed", en: "Informed the federation safeguarding officer?", es: "informado a la persona responsable de protección de la federación?" },
            { id: "a_parents", en: "Informed the parents (only if this will not put the child at greater risk)?", es: "informado a los padres (solo si esto no pone al menor en mayor riesgo)?" }
          ]},
        { type: "fields", cols: 1, items: [
          { id: "a_decision", tall: true, en: "Decision and next steps (safeguarding lead)", es: "Decisión y próximos pasos (persona responsable)" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "a_review", en: "Review date", es: "Fecha de revisión" },
          { id: "a_closed", en: "Closed on", es: "Cerrado el" }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signatures", es: "Firmas" },
      locked: true, keep: true,
      blocks: [
        { type: "signatures", boxes: [
          { label: { en: "Person reporting", es: "Persona que informa" }, fields: [
            { id: "sig_r_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Safeguarding lead", es: "Responsable de protección del menor" }, fields: [
            { id: "sig_l_date", en: "Date", es: "Fecha" } ] }
        ]},
        { type: "clauses", items: [
          { en: "<b>Confidential.</b> {club} keeps this record locked away, separate from membership files, to protect the child. It is shared only with the federation safeguarding officer and the authorities where needed, and kept for as long as the law requires.",
            es: "<b>Confidencial.</b> {club} guarda este registro bajo llave, separado de los expedientes de socios, para proteger al menor. Solo se comparte con la persona responsable de protección de la federación y con las autoridades cuando sea necesario, y se conserva el tiempo que exija la ley." }
        ]}
      ]
    }
  ]
});
