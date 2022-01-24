// eslint-disable-next-line import/no-unassigned-import, node/file-extension-in-import -- Tailwind CSS exception.
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import type { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention -- Next.js patterns.
const App = ({ Component, pageProps }: AppProps): ReactNode => (
  // eslint-disable-next-line react/jsx-props-no-spreading -- Next.js patterns.
  <Component {...pageProps} />
);

export default App;
