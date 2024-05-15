module.exports = (componentName) => `

import {useTranslation} from 'react-i18next'
import cls from './${componentName}.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import {memo} from 'react'

interface ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo(function ${componentName}(props: ${componentName}Props) {

  const {className} = props;
  const {t} = useTranslation()

  return (
    <div className={classNames(cls.${componentName}, {}, [className])}>
      <>
      </>
    </div>
  )


})
`;
