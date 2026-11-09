/* EMTF Club Series — Trial Class Waiver & Consent (short, 1–2 pages) */
EMTF.addTemplate({
  id: "trial-waiver",
  version: "2026.11",
  title: { en: "Trial Class Consent", es: "Consentimiento de Clase de Prueba" },
  intro: {
    en: "Welcome — we're glad you're here. Please complete this short form before your first class so we can keep you safe on the mat.",
    es: "Bienvenido/a, nos alegra tenerle aquí. Complete este breve formulario antes de su primera clase para que podamos garantizar su seguridad en el tatami."
  },
  sections: [
    {
      id: "participant", title: { en: "Participant", es: "Participante" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "p_name", en: "Full name", es: "Nombre completo" },
          { id: "p_dob", en: "Date of birth", es: "Fecha de nacimiento" },
          { id: "p_date", en: "Trial class date", es: "Fecha de la clase de prueba" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "p_guardian", en: "Parent / guardian (if under 18)", es: "Padre, madre o tutor/a (si es menor)" },
          { id: "p_tel", en: "Mobile", es: "Móvil" },
          { id: "p_mail", en: "Email", es: "Correo electrónico" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "p_emerg", en: "Emergency contact (name and phone)", es: "Contacto de emergencia (nombre y teléfono)" },
          { id: "p_heard", en: "How did you hear about us?", es: "¿Cómo nos conoció?" }
        ]}
      ]
    },
    {
      id: "health", title: { en: "Quick health check", es: "Revisión rápida de salud" },
      locked: true, keep: true,
      blocks: [
        { type: "yesno",
          head: { en: "Does the participant have…", es: "¿Tiene el participante…" },
          rows: [
            { id: "h_cond", en: "A heart, breathing or seizure condition, or diabetes?", es: "¿Una afección cardíaca, respiratoria o convulsiva, o diabetes?" },
            { id: "h_injury", en: "A current injury, or a recent operation or head injury?", es: "¿Una lesión actual, o una operación o golpe en la cabeza reciente?" },
            { id: "h_allergy", en: "A serious allergy or emergency medication?", es: "¿Una alergia grave o medicación de emergencia?" },
            { id: "h_needs", en: "Any additional needs the instructor should know about?", es: "¿Alguna necesidad específica que el instructor deba conocer?" }
          ]},
        { type: "fields", cols: 1, items: [
          { id: "h_detail", en: "If yes, please give brief details", es: "Si respondió sí, indique brevemente los detalles" }
        ]}
      ]
    },
    {
      id: "risk", title: { en: "Safety and consent", es: "Seguridad y consentimiento" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "Tang Soo Do is a physical, contact activity. Trial classes are adapted for beginners and fully supervised, but bumps, bruises and sprains can happen.",
            es: "El Tang Soo Do es una actividad física y de contacto. Las clases de prueba se adaptan a principiantes y están totalmente supervisadas, pero pueden producirse golpes, moratones y esguinces." },
          { en: "I confirm the participant is fit to take part and will follow the instructor's directions. Nothing in this form limits the club's legal responsibility for its own negligence.",
            es: "Confirmo que el participante está en condiciones de participar y seguirá las indicaciones del instructor. Nada en este formulario limita la responsabilidad legal del club por su propia negligencia." }
        ]},
        { type: "checks", items: [
          { id: "k_firstaid", en: "I consent to first aid being given and to the club calling 112 in an emergency.", es: "Autorizo que se presten primeros auxilios y que el club llame al 112 en caso de emergencia." },
          { id: "k_photo", en: "I understand no photos or videos of the participant will be shared without separate written consent.", es: "Entiendo que no se compartirán fotos ni vídeos del participante sin un consentimiento escrito aparte." },
          { id: "k_follow", en: "Optional: the club may contact me about joining after the trial.", es: "Opcional: el club puede contactarme sobre la inscripción tras la prueba." }
        ]},
        { type: "clauses", items: [
          { en: "<b>Data protection:</b> {club} uses these details only to run the trial class safely and, if you ticked the box above, to follow up. They are deleted after 6 months if you do not join. You may ask for access, correction or deletion at any time, or complain to {authority}.",
            es: "<b>Protección de datos:</b> {club} usa estos datos solo para impartir la clase de prueba con seguridad y, si marcó la casilla anterior, para hacer seguimiento. Se eliminan a los 6 meses si no se inscribe. Puede solicitar acceso, rectificación o supresión en cualquier momento, o reclamar ante {authority}." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signature", es: "Firma" },
      locked: true, keep: true,
      blocks: [
        { type: "signatures", boxes: [
          { label: { en: "Participant (18+) or parent / guardian", es: "Participante (mayor de edad) o padre, madre o tutor/a" }, fields: [
            { id: "sig_name", en: "Name", es: "Nombre" }, { id: "sig_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Instructor", es: "Instructor" }, fields: [
            { id: "sig_i_name", en: "Name", es: "Nombre" }, { id: "sig_i_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "checks", cols: 3, items: [
          { id: "o_attended", en: "Attended", es: "Asistió" },
          { id: "o_offer", en: "Membership offered", es: "Inscripción ofrecida" },
          { id: "o_joined", en: "Joined", es: "Se inscribió" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "o_notes", en: "Instructor notes", es: "Notas del instructor" },
          { id: "o_follow", en: "Follow-up date", es: "Fecha de seguimiento" }
        ]}
      ]
    }
  ]
});
