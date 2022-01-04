import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import App from './App';
import i18next from 'i18next'
// import cookies from 'js-cookie'
// import classNames from 'classnames'

export default function App0() {
    const languages = [
        {
          code: 'fr',
          name: 'Français',
          country_code: 'fr',
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'gb',
        }
      ]

    // const currentLanguageCode = cookies.get('i18next') || 'en'
    // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    const releaseDate = new Date('2021-03-07')
    const timeDifference = new Date() - releaseDate
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    useEffect(() => {
        console.log('Setting page stuff')
        // document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, 
    [
        // currentLanguage
        , t])
    return (
        <div>
            <div className="container">
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              lang
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    // className={classNames('dropdown-item', {
                    //   disabled: currentLanguageCode === code,
                    // })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        // opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('days_since_release', { number_of_days })}</p>
      </div>
    </div>
            {/* <App/> */}
        </div>
    );

}
