const whatsAppHref =
  'https://wa.me/33758530169?text=Bonjour%20MatoStudio%2C%20je%20souhaite%20un%20devis%20pour%20un%20projet%20web.'

export function WhatsAppFloatingButton() {
  return (
    <a
      className="whatsapp-floating-button"
      href={whatsAppHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter MatoStudio Agency sur WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="whatsapp-floating-button__icon">
        <path
          fill="currentColor"
          d="M12.04 2a9.86 9.86 0 0 0-8.42 14.98L2.45 22l5.15-1.12A9.9 9.9 0 1 0 12.04 2Zm0 1.82a8.08 8.08 0 1 1 0 16.16 8 8 0 0 1-4.07-1.12l-.32-.19-3.01.66.68-2.94-.21-.34a8.07 8.07 0 0 1 6.93-12.23Zm-3.4 4.2c-.18 0-.47.07-.72.34-.25.28-.95.93-.95 2.26 0 1.34.98 2.64 1.12 2.82.14.19 1.89 3.02 4.66 4.12 2.31.91 2.78.73 3.28.69.5-.05 1.61-.66 1.84-1.3.23-.63.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52Z"
        />
      </svg>
    </a>
  )
}
