import { Languages } from 'lucide-react';
import { useLanguage } from '../../i18n/context';

export function EnglishHighlight() {
  const { t } = useLanguage();
  return (
    <div className="english-highlight">
      <Languages size={28} aria-hidden="true" />
      <div>
        <span>{t('IDIOMAS')}</span>
        <strong>{t('Inglês técnico')}</strong>
      </div>
      <span className="english-level" lang="en">
        EN
      </span>
    </div>
  );
}
