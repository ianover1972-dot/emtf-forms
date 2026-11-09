/* EMTF Club Series — SEPA Direct Debit Mandate (core scheme) */
EMTF.addTemplate({
  id: "sepa-mandate",
  version: "2026.11",
  title: { en: "SEPA Direct Debit Mandate", es: "Orden de Domiciliación SEPA" },
  intro: {
    en: "This mandate lets the club collect membership fees from your bank account. Please complete it in capitals and sign below. Fill in the IBAN carefully: a wrong digit will cause the payment to be returned.",
    es: "Esta orden permite al club cobrar las cuotas de inscripción en su cuenta bancaria. Complétela en mayúsculas y fírmela. Rellene el IBAN con cuidado: un dígito erróneo provocará la devolución del recibo."
  },
  sections: [
    {
      id: "creditor", title: { en: "Creditor (the club)", es: "Acreedor (el club)" },
      locked: true,
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "cr_name", en: "Creditor name", es: "Nombre del acreedor", prefill: "name" },
          { id: "cr_id", en: "Creditor identifier", es: "Identificador del acreedor", prefill: "sepaCreditorId" }
        ]},
        { type: "fields", cols: 2, items: [
          { id: "cr_addr", en: "Address", es: "Dirección", prefill: "address" },
          { id: "cr_ref", en: "Mandate reference (club completes)", es: "Referencia de la orden (la completa el club)" }
        ]}
      ]
    },
    {
      id: "debtor", title: { en: "Debtor (account holder)", es: "Deudor (titular de la cuenta)" },
      locked: true,
      blocks: [
        { type: "fields", cols: 2, items: [
          { id: "d_name", en: "Account holder's full name", es: "Nombre completo del titular" },
          { id: "d_nif", en: "ID card / passport no.", es: "DNI / NIE" }
        ]},
        { type: "fields", cols: 3, items: [
          { id: "d_addr", en: "Address", es: "Dirección" },
          { id: "d_cp", en: "Postcode and town", es: "Código postal y población" },
          { id: "d_country", en: "Country", es: "País" }
        ]},
        { type: "iban" },
        { type: "fields", cols: 3, items: [
          { id: "d_bic", en: "BIC / SWIFT (if known)", es: "BIC / SWIFT (si lo conoce)" },
          { id: "d_student", en: "Student(s) this covers", es: "Alumno(s) a los que corresponde" },
          { id: "d_tel", en: "Phone or email", es: "Teléfono o correo electrónico" }
        ]}
      ]
    },
    {
      id: "type", title: { en: "Type of payment", es: "Tipo de pago" },
      locked: true,
      blocks: [
        { type: "checks", cols: 2, items: [
          { id: "t_recurrent", en: "Recurrent payment (monthly fees)", es: "Pago recurrente (cuotas mensuales)" },
          { id: "t_oneoff", en: "One-off payment", es: "Pago único" }
        ]}
      ]
    },
    {
      id: "terms", title: { en: "Mandate terms", es: "Condiciones de la orden" },
      locked: true,
      blocks: [
        { type: "clauses", items: [
          { en: "By signing this mandate form, you authorise (A) {club} to send instructions to your bank to debit your account and (B) your bank to debit your account in accordance with the instructions from {club}.",
            es: "Mediante la firma de esta orden de domiciliación, el deudor autoriza (A) a {club} a enviar instrucciones a la entidad del deudor para adeudar su cuenta y (B) a la entidad para efectuar los adeudos en su cuenta siguiendo las instrucciones de {club}." },
          { en: "As part of your rights, you are entitled to a refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited.",
            es: "Como parte de sus derechos, el deudor está legitimado al reembolso por su entidad en los términos y condiciones del contrato suscrito con la misma. La solicitud de reembolso deberá efectuarse dentro de las ocho semanas que siguen a la fecha de adeudo en cuenta." },
          { en: "Your rights are explained in a statement that you can obtain from your bank. The club will notify you of the amount and date of each collection at least 2 days in advance.",
            es: "Puede obtener información adicional sobre sus derechos en su entidad financiera. El club le comunicará el importe y la fecha de cada cobro con al menos 2 días de antelación." }
        ]}
      ]
    },
    { id: "custom", custom: true },
    {
      id: "signatures", title: { en: "Signature", es: "Firma" },
      locked: true, keep: true,
      blocks: [
        { type: "signatures", boxes: [
          { label: { en: "Signature of the debtor (account holder)", es: "Firma del deudor (titular de la cuenta)" }, fields: [
            { id: "sig_place", en: "Place of signature", es: "Lugar de firma" }, { id: "sig_date", en: "Date", es: "Fecha" } ] }
        ]},
        { type: "note",
          en: "All fields must be completed. Please return this mandate to the club; it is kept by the club and not sent to your bank.",
          es: "Todos los campos son obligatorios. Devuelva esta orden al club; el club la conserva y no se envía a su banco." }
      ]
    },
    {
      id: "office", office: true, title: { en: "Club use only", es: "Uso exclusivo del club" },
      blocks: [
        { type: "fields", cols: 3, items: [
          { id: "o_recv", en: "Date received", es: "Fecha de recepción" },
          { id: "o_first", en: "First collection date", es: "Fecha del primer cobro" },
          { id: "o_amount", en: "Monthly amount (€)", es: "Importe mensual (€)" }
        ]},
        { type: "checks", cols: 3, items: [
          { id: "o_iban", en: "IBAN checked", es: "IBAN comprobado" },
          { id: "o_sys", en: "Set up in payment system", es: "Dado de alta en el sistema de cobros" },
          { id: "o_notified", en: "Pre-notification sent", es: "Preaviso enviado" }
        ]}
      ]
    }
  ]
});
