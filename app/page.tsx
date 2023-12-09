'use client'

import Image from 'next/image'
import styles from './page.module.css'
import stylex from '@stylexjs/stylex'

import { colors } from '@stylexjs/open-props/lib/colors.stylex'
import { Item } from './explora'
// const DARK = '@media (prefers-color-scheme: dark)'
const MOBILE = '@media (max-width: 700px)'
// const REDUCE_MOTION = '@media (prefers-reduced-motion: reduce)'

const tokens = stylex.defineVars({
  primaryText: 'black',
  secondaryText: '#333',
})

const X = stylex.create({
  test: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: {
      default: '33px',
      [String(MOBILE)]: '25px',
    },
    width: '100%',
    height: '60px',
    backgroundColor: {
      default: colors.red10,
      [String(MOBILE)]: tokens.primaryText,
    },
    zIndex: 99999,
  },
})

export default function Home() {
  return (
    <>
      <div className={stylex(X.test)}>
        {' '}
        Contenido en css donde estamos aprendiendo stylex{' '}
      </div>

      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  )
}
