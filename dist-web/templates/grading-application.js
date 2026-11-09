/* EMTF Club Series — Grading Application (Gup grades up to Cho Dan Bo) */
EMTF.addTemplate({
  id: "grading-application",
  version: "2026.11",
  title: { en: "Grading Application", es: "Solicitud de Examen" },
  intro: {
    en: "Complete this form to apply for your next grading. Your instructor will confirm you are ready before the grading date.",
    es: "Complete este formulario para solicitar su próximo examen. Su instructor confirmará que está preparado/a antes de la fecha del examen."
  },
  sections: [
    {
      id: "student", title: { en: "Student", es: "Alumno" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "s_name", en: "Full name", es: "Nombre completo" },
          { id: "s_dob", en: "Date of birth", es: "Fecha de nacimiento" },
          { id: "s_lic", en: "Federation licence no.", es: "Nº de licencia federativa" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "s_current", en: "Current grade", es: "Grado actual" },
          { id: "s_since", en: "Date of last grading", es: "Fecha del último examen" },
          { id: "s_tel", en: "Contact phone", es: "Teléfono de contacto" }
        ]}
      ]
    },
    {
      id: "grade", title: { en: "Grade applied for", es: "Grado solicitado" },
      locked: true,
      blocks: [
        { type: "checks", cols: 3, items: [
          { id: "b_green", en: "Green belt", es: "Cinturón verde" },
          { id: "b_green_w", en: "Green belt, white stripe", es: "Cinturón verde, franja blanca" },
          { id: "b_green_b", en: "Green belt, black stripe", es: "Cinturón verde, franja negra" },
          { id: "b_red", en: "Red belt", es: "Cinturón rojo" },
          { id: "b_red_w", en: "Red belt, white stripe", es: "Cinturón rojo, franja blanca" },
          { id: "b_red_b", en: "Red belt, black stripe", es: "Cinturón rojo, franja negra" },
          { id: "b_blue", en: "Blue belt", es: "Cinturón azul" },
          { id: "b_blue_w", en: "Blue belt, white stripe", es: "Cinturón azul, franja blanca" },
          { id: "b_blue_b", en: "Blue belt, black stripe", es: "Cinturón azul, franja negra" },
          { id: "b_chodanbo", en: "Cho Dan Bo", es: "Cho Dan Bo" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "g_date", en: "Grading date", es: "Fecha del examen" },
          { id: "g_venue", en: "Venue", es: "Lugar" },
          { id: "g_fee", en: "Grading fee", es: "Cuota de examen", prefill: "gradingFees" }
        ]}
      ]
    },
    {
      id: "readiness", title: { en: "Training record", es: "Historial de entrenamiento" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "r_classes", en: "Classes attended since last grading", es: "Clases asistidas desde el último examen" },
          { id: "r_hyung", en: "Hyung (form) for this grade", es: "Hyung (forma) de este grado" },
          { id: "r_licence", en: "Licence valid until", es: "Licencia válida hasta" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "r_goals", tall: true, en: "Student: what have you worked hardest on since your last grading?", es: "Alumno: ¿en qué has trabajado más desde tu último examen?" }
        ]}
      ]
    },
    {
      id: "instructor", title: { en: "Instructor recommendation", es: "Recomendación del instructor" },
      locked: true, keep: true,
      blocks: [
        { type: "yesno",
          head: { en: "The student…", es: "El alumno…" },
          rows: [
            { id: "i_attend", en: "Has met the minimum attendance and time-in-grade", es: "Cumple la asistencia mínima y el tiempo en el grado" },
            { id: "i_syllabus", en: "Knows the full syllabus for this grade", es: "Conoce todo el programa de este grado" },
            { id: "i_conduct", en: "Shows the attitude and conduct expected at this grade", es: "Muestra la actitud y conducta esperadas en este grado" }
          ]},
        { type: "fields", cols: 2, items: [
          { id: "i_notes", en: "Notes", es: "Notas" },
          { id: "i_name", en: "Instructor name and signature", es: "Nombre y firma del instructor" }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Declaration", es: "Declaración" },
      locked: true, keep: true,
      blocks: [
        { type: "decl",
          en: "I apply for the grade above. I understand the grading fee is non-refundable if I do not attend without good reason, and that the result is decided by the examining panel.",
          es: "Solicito el grado indicado. Entiendo que la cuota de examen no se reembolsa si no asisto sin causa justificada, y que el resultado lo decide el tribunal examinador." },
        { type: "signatures", boxes: [
          { label: { en: "Student signature", es: "Firma del alumno" }, fields: [
            { id: "sig_s_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Parent / guardian (if under 18)", es: "Padre, madre o tutor/a (si es menor)" }, fields: [
            { id: "sig_g_name", en: "Name", es: "Nombre" }, { id: "sig_g_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Result — club use only", es: "Resultado — uso exclusivo del club" },
      blocks: [
        { type: "checks", cols: 3, items: [
          { id: "o_pass", en: "Pass", es: "Aprobado" },
          { id: "o_merit", en: "Pass with merit", es: "Aprobado con mérito" },
          { id: "o_defer", en: "Not yet — re-grade", es: "Todavía no — repetir examen" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "o_examiner", en: "Chief examiner", es: "Examinador principal" },
          { id: "o_cert", en: "Certificate no.", es: "Nº de diploma" },
          { id: "o_fed", en: "Reported to federation (date)", es: "Comunicado a la federación (fecha)" }
        ]}
      ]
    }
  ]
});
