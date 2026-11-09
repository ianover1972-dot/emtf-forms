/* EMTF Club Series — Membership Pause or Cancellation request */
EMTF.addTemplate({
  id: "membership-change",
  version: "2026.11",
  title: { en: "Membership Pause or Cancellation", es: "Pausa o Baja de la Inscripción" },
  intro: {
    en: "Use this form to pause, cancel or change a membership. Please give it to the club within the notice period in your membership agreement. We will confirm everything in writing.",
    es: "Utilice este formulario para pausar, dar de baja o cambiar una inscripción. Entréguelo al club dentro del preaviso indicado en su acuerdo de inscripción. Le confirmaremos todo por escrito."
  },
  sections: [
    {
      id: "member", title: { en: "Member", es: "Socio" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "m_name", en: "Student's full name", es: "Nombre completo del alumno" },
          { id: "m_no", en: "Membership no.", es: "Nº de socio" },
          { id: "m_prog", en: "Current programme", es: "Programa actual" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "m_guardian", en: "Parent / guardian (if under 18)", es: "Padre, madre o tutor/a (si es menor)" },
          { id: "m_contact", en: "Phone or email", es: "Teléfono o correo electrónico" }
        ]}
      ]
    },
    {
      id: "request", title: { en: "Your request", es: "Su solicitud" },
      locked: true,
      blocks: [
        { type: "checks", cols: 3, items: [
          { id: "r_pause", en: "Pause my membership", es: "Pausar mi inscripción" },
          { id: "r_cancel", en: "Cancel my membership", es: "Darme de baja" },
          { id: "r_change", en: "Change programme", es: "Cambiar de programa" }
        ]}
      ]
    },
    {
      id: "pause", title: { en: "Pause", es: "Pausa" },
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "p_from", en: "Pause from", es: "Pausa desde" },
          { id: "p_to", en: "Return on", es: "Vuelta el" }
        ]},
        { type: "checks", cols: 3, items: [
          { id: "p_injury", en: "Injury or illness (medical note attached)", es: "Lesión o enfermedad (con justificante médico)" },
          { id: "p_travel", en: "Holiday or travel", es: "Vacaciones o viaje" },
          { id: "p_other", en: "Other reason", es: "Otro motivo" }
        ]}
      ]
    },
    {
      id: "cancel", title: { en: "Cancellation", es: "Baja" },
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "c_last", en: "Last day of training", es: "Último día de entrenamiento" },
          { id: "c_reason", en: "Reason (optional)", es: "Motivo (opcional)" }
        ]},
        { type: "fields", cols: 1, items: [
          { id: "c_feedback", tall: true, en: "Is there anything we could have done better? (optional)", es: "¿Hay algo que podríamos haber hecho mejor? (opcional)" }
        ]}
      ]
    },
    {
      id: "change", title: { en: "Change of programme", es: "Cambio de programa" },
      blocks: [
        { type: "programmes" },
        { type: "fields", cols: 1, items: [
          { id: "g_from", en: "Change from (date)", es: "Cambio a partir de (fecha)" }
        ]}
      ]
    },
    {
      id: "terms", title: { en: "Good to know", es: "Información importante" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "Direct debits continue until the end of the notice period in your membership agreement. The club will confirm in writing when the last payment will be taken.",
            es: "Las domiciliaciones continúan hasta el final del preaviso indicado en su acuerdo de inscripción. El club le confirmará por escrito cuándo se cobrará el último recibo." },
          { en: "A pause is agreed with the club and stops fees for the agreed dates. Fees restart automatically on the return date unless you tell us otherwise.",
            es: "La pausa se acuerda con el club y detiene las cuotas durante las fechas acordadas. Las cuotas se reanudan automáticamente en la fecha de vuelta salvo que nos indique lo contrario." },
          { en: "When a membership ends, the club stops using your SEPA mandate. You do not need to contact your bank.",
            es: "Cuando finaliza una inscripción, el club deja de utilizar su orden SEPA. No necesita contactar con su banco." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signatures", es: "Firmas" },
      locked: true, keep: true,
      blocks: [
        { type: "signatures", boxes: [
          { label: { en: "Member (18+) or parent / guardian", es: "Socio (mayor de edad) o padre, madre o tutor/a" }, fields: [
            { id: "sig_name", en: "Name", es: "Nombre" }, { id: "sig_date", en: "Date", es: "Fecha" } ] },
          { label: { en: "Received by the club", es: "Recibido por el club" }, fields: [
            { id: "sig_c_name", en: "Name", es: "Nombre" }, { id: "sig_c_date", en: "Date", es: "Fecha" } ] }
        ]}
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "o_notice", en: "Notice period ends", es: "Fin del preaviso" },
          { id: "o_lastpay", en: "Last collection date", es: "Fecha del último cobro" },
          { id: "o_restart", en: "Fees restart on", es: "Las cuotas se reanudan el" }
        ]},
        { type: "checks", cols: 3, items: [
          { id: "o_confirmed", en: "Confirmed in writing", es: "Confirmado por escrito" },
          { id: "o_payments", en: "Payment system updated", es: "Sistema de cobros actualizado" },
          { id: "o_licence", en: "Federation licence updated", es: "Licencia federativa actualizada" }
        ]}
      ]
    }
  ]
});
