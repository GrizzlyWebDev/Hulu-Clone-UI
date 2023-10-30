import '../../styles/globals.css';
import GlobalContextProvider from './Context/store';

export const metadata = {
  title: 'Hulu 2.0',
  description:
    'Monthly price. $6.99/mo · Streaming Library with thousands of TV episodes and movies · Most new episodes the day after they air · Access to award-winning Hulu ...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
