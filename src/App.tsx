import { ThemeProvider } from 'styled-components'

import { Button } from "./components/Button";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider  theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="warning" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}