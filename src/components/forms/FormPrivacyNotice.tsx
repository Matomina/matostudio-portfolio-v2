import { Link } from 'react-router-dom'

import { ROUTES } from '@/lib/constants/routes'

interface FormPrivacyNoticeProps {
  checkboxId: string
}

export function FormPrivacyNotice({ checkboxId }: FormPrivacyNoticeProps) {
  return (
    <div className="form-privacy-notice">
      <p className="form-privacy-notice__text">
        Les informations transmises via ce formulaire sont utilisées uniquement pour répondre à
        votre demande, préparer un devis ou assurer le suivi de votre projet. Elles ne sont ni
        vendues ni cédées à des tiers à des fins commerciales.{' '}
        <Link to={ROUTES.privacy}>Politique de confidentialité</Link>
      </p>

      <label className="form-privacy-notice__label" htmlFor={checkboxId}>
        <input
          id={checkboxId}
          name="privacyAccepted"
          type="checkbox"
          className="form-privacy-notice__checkbox"
          required
        />
        <span>
          J'ai lu la politique de confidentialité et j'accepte que mes informations soient utilisées
          pour traiter ma demande.
        </span>
      </label>
    </div>
  )
}
