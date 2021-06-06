import { useTranslation } from 'react-i18next'


const HomePage = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => i18n.changeLanguage(lng)

  return (
    <>
      <div>{t('initial')}</div>
      <button type="button" onClick={() => handleLanguageChange('ru')}>ru</button>
      <button type="button" onClick={() => handleLanguageChange('en')}>en</button>
    </>
  )
}

export default HomePage
